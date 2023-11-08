import {
  Command,
  CommandRunner,
  InquirerService,
  Option,
} from 'nest-commander';
import isEqual from 'lodash.isequal';

import { PrismaService } from 'src/database/prisma.service';
import peopleSeed from 'src/core/person/seed-data/people.json';
import companiesSeed from 'src/core/company/seed-data/companies.json';
import pipelineStagesSeed from 'src/core/pipeline/seed-data/pipeline-stages.json';
import pipelinesSeed from 'src/core/pipeline/seed-data/sales-pipeline.json';
import { WorkspaceService } from 'src/core/workspace/services/workspace.service';

interface DataCleanInactiveOptions {
  days?: number;
  dryRun?: boolean;
  confirmation?: boolean;
  workspaceId?: string;
  boundaries?: Array<number>;
}

interface ActivityReport {
  displayName: string;
  maxUpdatedAt: string;
  inactiveDays: number;
  sameAsSeed: boolean;
}

interface DataCleanResults {
  [key: string]: ActivityReport;
}

const formattedPipelineStagesSeed = pipelineStagesSeed.map((pipelineStage) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { position, ...rest } = pipelineStage;
  return rest;
});

@Command({
  name: 'workspaces:clean-inactive',
  description: 'Clean inactive workspaces from the public database schema',
})
export class DataCleanInactiveCommand extends CommandRunner {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly workspaceService: WorkspaceService,
    private readonly inquiererService: InquirerService,
  ) {
    super();
  }

  @Option({
    flags: '-w, --workspaceId [workspace id]',
    description: 'Specific workspaceId to apply cleaning',
  })
  parseWorkspace(val: string): string {
    return val;
  }

  @Option({
    flags: '-d, --days [inactive days threshold]',
    description: 'Inactive days threshold',
    defaultValue: 60,
  })
  parseDays(val: string): number {
    return Number(val);
  }

  @Option({
    flags: '-b, --boundaries [boundaries]',
    description:
      'Set boundaries for batch cleaning, separated by a comma -> eg: 25,50',
  })
  parseBoundaries(val: string): Array<number> {
    const boundaries = val.split(',');
    if (boundaries.length !== 2) {
      console.error(
        'You must provide 2 integer boundaries separated by a comma, eg: 25,50',
      );
      throw new Error();
    }
    if (Number(boundaries[0]) > Number(boundaries[1])) {
      console.error(
        'First boundary should be lower that second boundary, eg: 25,50',
      );
      throw new Error();
    }
    return [Number(boundaries[0]), Number(boundaries[1])];
  }

  @Option({
    flags: '--dry-run [dry run]',
    description: 'List inactive workspaces without removing them',
  })
  parseDryRun(val: string): boolean {
    return Boolean(val);
  }

  // We look for public tables which contains workspaceId and updatedAt columns
  getRelevantTables() {
    return Object.keys(this.prismaService.client).filter(
      (name) =>
        !name.startsWith('_') &&
        !name.startsWith('$') &&
        !name.includes('user') &&
        !name.includes('refreshToken') &&
        !name.includes('workspace') &&
        !name.includes('webHook') &&
        !name.includes('favorite'),
    );
  }

  async getMaxUpdatedAtForAllWorkspaces(tables, workspaces) {
    const result = {};
    for (const table of tables) {
      result[table] = {};
      const groupByWorkspaces = await this.prismaService.client[table].groupBy({
        by: ['workspaceId'],
        _max: { updatedAt: true },
        where: {
          workspaceId: { in: workspaces.map((workspace) => workspace.id) },
        },
      });
      for (const groupByWorkspace of groupByWorkspaces) {
        result[table][groupByWorkspace.workspaceId] =
          groupByWorkspace._max.updatedAt;
      }
    }
    return result;
  }

  async addMaxUpdatedAtToWorkspaces(
    result,
    workspace,
    table,
    maxUpdatedAtForAllWorkspaces,
  ) {
    const newUpdatedAt = maxUpdatedAtForAllWorkspaces[table][workspace.id];
    if (!result[workspace.id]) {
      result[workspace.id] = {
        displayName: workspace.displayName,
        maxUpdatedAt: null,
      };
    }
    if (
      newUpdatedAt &&
      new Date(result[workspace.id].maxUpdatedAt) < new Date(newUpdatedAt)
    ) {
      result[workspace.id].maxUpdatedAt = newUpdatedAt;
    }
  }
  async getSeedTableData(workspaces) {
    const where = {
      workspaceId: { in: workspaces.map((workspace) => workspace.id) },
    };
    const companies = await this.prismaService.client.company.findMany({
      select: {
        name: true,
        domainName: true,
        address: true,
        employees: true,
        workspaceId: true,
      },
      where,
    });
    const people = await this.prismaService.client.person.findMany({
      select: {
        firstName: true,
        lastName: true,
        city: true,
        email: true,
        avatarUrl: true,
        workspaceId: true,
      },
      where,
    });
    const pipelineStages =
      await this.prismaService.client.pipelineStage.findMany({
        select: {
          name: true,
          color: true,
          type: true,
          workspaceId: true,
        },
        where,
      });
    const pipelines = await this.prismaService.client.pipeline.findMany({
      select: {
        name: true,
        icon: true,
        pipelineProgressableType: true,
        workspaceId: true,
      },
      where,
    });
    return {
      companies,
      people,
      pipelineStages,
      pipelines,
    };
  }

  async detectWorkspacesWithSeedDataOnly(result, workspace, seedTableData) {
    const companies = seedTableData.companies.reduce((filtered, company) => {
      if (company.workspaceId === workspace.id) {
        delete company.workspaceId;
        filtered.push(company);
      }
      return filtered;
    }, []);
    const people = seedTableData.people.reduce((filtered, person) => {
      if (person.workspaceId === workspace.id) {
        delete person.workspaceId;
        filtered.push(person);
      }
      return filtered;
    }, []);
    const pipelineStages = seedTableData.pipelineStages.reduce(
      (filtered, pipelineStage) => {
        if (pipelineStage.workspaceId === workspace.id) {
          delete pipelineStage.workspaceId;
          filtered.push(pipelineStage);
        }
        return filtered;
      },
      [],
    );
    const pipelines = seedTableData.pipelines.reduce((filtered, pipeline) => {
      if (pipeline.workspaceId === workspace.id) {
        delete pipeline.workspaceId;
        filtered.push(pipeline);
      }
      return filtered;
    }, []);
    if (
      isEqual(people, peopleSeed) &&
      isEqual(companies, companiesSeed) &&
      isEqual(pipelineStages, formattedPipelineStagesSeed) &&
      isEqual(pipelines, [pipelinesSeed])
    ) {
      result[workspace.id].sameAsSeed = true;
    } else {
      {
        result[workspace.id].sameAsSeed = false;
      }
    }
  }

  async getWorkspaces(options) {
    const where = options.workspaceId
      ? { id: { equals: options.workspaceId } }
      : {};
    const workspaces = await this.prismaService.client.workspace.findMany({
      where,
      orderBy: [{ createdAt: 'asc' }],
    });
    if (options.boundaries) {
      return workspaces.slice(options.boundaries[0], options.boundaries[1] + 1);
    }
    return workspaces;
  }

  async findInactiveWorkspaces(workspaces, result, options) {
    const tables = this.getRelevantTables();
    const maxUpdatedAtForAllWorkspaces =
      await this.getMaxUpdatedAtForAllWorkspaces(tables, workspaces);
    const seedTableData = await this.getSeedTableData(workspaces);
    for (const workspace of workspaces) {
      for (const table of tables) {
        await this.addMaxUpdatedAtToWorkspaces(
          result,
          workspace,
          table,
          maxUpdatedAtForAllWorkspaces,
        );
      }
      await this.detectWorkspacesWithSeedDataOnly(
        result,
        workspace,
        seedTableData,
      );
    }
  }

  filterResults(result, options) {
    for (const workspaceId in result) {
      const timeDifferenceInSeconds = Math.abs(
        new Date().getTime() -
          new Date(result[workspaceId].maxUpdatedAt).getTime(),
      );
      const timeDifferenceInDays = Math.ceil(
        timeDifferenceInSeconds / (1000 * 3600 * 24),
      );
      if (
        timeDifferenceInDays < options.days &&
        !result[workspaceId].sameAsSeed
      ) {
        delete result[workspaceId];
      } else {
        result[workspaceId].inactiveDays = timeDifferenceInDays;
      }
    }
  }

  async delete(result) {
    if (Object.keys(result).length) {
      console.log('Deleting inactive workspaces');
    }
    for (const workspaceId in result) {
      process.stdout.write(`- deleting ${workspaceId} ...`);
      await this.workspaceService.deleteWorkspace({
        workspaceId,
      });
      console.log(' done!');
    }
  }

  displayResults(result, totalWorkspacesCount) {
    console.log(result);
    console.log(
      `${
        Object.keys(result).length
      } out of ${totalWorkspacesCount} workspace(s) checked (${Math.floor(
        (100 * Object.keys(result).length) / totalWorkspacesCount,
      )}%) will be deleted`,
    );
  }

  async run(
    _passedParam: string[],
    options: DataCleanInactiveOptions,
  ): Promise<void> {
    const result: DataCleanResults = {};
    const workspaces = await this.getWorkspaces(options);
    const totalWorkspacesCount = workspaces.length;
    console.log(totalWorkspacesCount, 'workspace(s) to analyse');
    await this.findInactiveWorkspaces(workspaces, result, options);
    this.filterResults(result, options);
    this.displayResults(result, totalWorkspacesCount);
    if (!options.dryRun) {
      options = await this.inquiererService.ask('confirm', options);
      if (!options.confirmation) {
        console.log('Cleaning aborted');
        return;
      }
    }
    if (!options.dryRun) {
      await this.delete(result);
    }
  }
}
