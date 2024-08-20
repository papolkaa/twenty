import { Module } from '@nestjs/common';

import { WorkflowTriggerResolver } from 'src/engine/core-modules/workflow/workflow-trigger.resolver';
import { ScopedWorkspaceContextFactory } from 'src/engine/twenty-orm/factories/scoped-workspace-context.factory';
import { WorkflowCommonModule } from 'src/modules/workflow/common/workflow-common.module';
import { WorkflowRunnerModule } from 'src/modules/workflow/workflow-runner/workflow-runner.module';
import { WorkflowStatusModule } from 'src/modules/workflow/workflow-status/workflow-status.module';
import { WorkflowTriggerWorkspaceService } from 'src/modules/workflow/workflow-trigger/services/workflow-trigger.workspace-service';

@Module({
  imports: [WorkflowCommonModule, WorkflowRunnerModule, WorkflowStatusModule],
  providers: [
    WorkflowTriggerWorkspaceService,
    WorkflowTriggerResolver,
    ScopedWorkspaceContextFactory,
  ],
})
export class WorkflowTriggerCoreModule {}
