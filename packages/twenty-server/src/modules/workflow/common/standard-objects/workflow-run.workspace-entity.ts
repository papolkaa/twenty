import { Relation } from 'src/engine/workspace-manager/workspace-sync-metadata/interfaces/relation.interface';

import { FeatureFlagKey } from 'src/engine/core-modules/feature-flag/enums/feature-flag-key.enum';
import {
  ActorMetadata,
  FieldActorSource,
} from 'src/engine/metadata-modules/field-metadata/composite-types/actor.composite-type';
import { FieldMetadataType } from 'src/engine/metadata-modules/field-metadata/field-metadata.entity';
import { RelationMetadataType } from 'src/engine/metadata-modules/relation-metadata/relation-metadata.entity';
import { BaseWorkspaceEntity } from 'src/engine/twenty-orm/base.workspace-entity';
import { WorkspaceEntity } from 'src/engine/twenty-orm/decorators/workspace-entity.decorator';
import { WorkspaceField } from 'src/engine/twenty-orm/decorators/workspace-field.decorator';
import { WorkspaceGate } from 'src/engine/twenty-orm/decorators/workspace-gate.decorator';
import { WorkspaceIsNullable } from 'src/engine/twenty-orm/decorators/workspace-is-nullable.decorator';
import { WorkspaceIsSystem } from 'src/engine/twenty-orm/decorators/workspace-is-system.decorator';
import { WorkspaceJoinColumn } from 'src/engine/twenty-orm/decorators/workspace-join-column.decorator';
import { WorkspaceRelation } from 'src/engine/twenty-orm/decorators/workspace-relation.decorator';
import { WORKFLOW_RUN_STANDARD_FIELD_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-field-ids';
import { STANDARD_OBJECT_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-object-ids';
import { WorkflowVersionWorkspaceEntity } from 'src/modules/workflow/common/standard-objects/workflow-version.workspace-entity';
import { WorkflowWorkspaceEntity } from 'src/modules/workflow/common/standard-objects/workflow.workspace-entity';

export enum WorkflowRunStatus {
  NOT_STARTED = 'NOT_STARTED',
  RUNNING = 'RUNNING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

@WorkspaceEntity({
  standardId: STANDARD_OBJECT_IDS.workflowRun,
  namePlural: 'workflowRuns',
  labelSingular: 'workflowRun',
  labelPlural: 'WorkflowRuns',
  description: 'A workflow run',
})
@WorkspaceGate({
  featureFlag: FeatureFlagKey.IsWorkflowEnabled,
})
@WorkspaceIsSystem()
export class WorkflowRunWorkspaceEntity extends BaseWorkspaceEntity {
  @WorkspaceField({
    standardId: WORKFLOW_RUN_STANDARD_FIELD_IDS.startedAt,
    type: FieldMetadataType.DATE_TIME,
    label: 'Workflow run started at',
    description: 'Workflow run started at',
    icon: 'IconHistory',
  })
  @WorkspaceIsNullable()
  startedAt: string | null;

  @WorkspaceField({
    standardId: WORKFLOW_RUN_STANDARD_FIELD_IDS.endedAt,
    type: FieldMetadataType.DATE_TIME,
    label: 'Workflow run ended at',
    description: 'Workflow run ended at',
    icon: 'IconHistory',
  })
  @WorkspaceIsNullable()
  endedAt: string | null;

  @WorkspaceField({
    standardId: WORKFLOW_RUN_STANDARD_FIELD_IDS.status,
    type: FieldMetadataType.SELECT,
    label: 'Workflow run status',
    description: 'Workflow run status',
    icon: 'IconHistory',
    options: [
      {
        value: WorkflowRunStatus.NOT_STARTED,
        label: 'Not started',
        position: 0,
        color: 'grey',
      },
      {
        value: WorkflowRunStatus.RUNNING,
        label: 'Running',
        position: 1,
        color: 'yellow',
      },
      {
        value: WorkflowRunStatus.COMPLETED,
        label: 'Completed',
        position: 2,
        color: 'green',
      },
      {
        value: WorkflowRunStatus.FAILED,
        label: 'Failed',
        position: 3,
        color: 'red',
      },
    ],
    defaultValue: "'NOT_STARTED'",
  })
  status: WorkflowRunStatus;

  @WorkspaceField({
    standardId: WORKFLOW_RUN_STANDARD_FIELD_IDS.createdBy,
    type: FieldMetadataType.ACTOR,
    label: 'Created by',
    icon: 'IconCreativeCommonsSa',
    description: 'The creator of the record',
    defaultValue: {
      source: `'${FieldActorSource.MANUAL}'`,
      name: "''",
    },
  })
  createdBy: ActorMetadata;

  // Relations
  @WorkspaceRelation({
    standardId: WORKFLOW_RUN_STANDARD_FIELD_IDS.workflowVersion,
    type: RelationMetadataType.MANY_TO_ONE,
    label: 'Workflow',
    description: 'WorkflowVersion workflow',
    icon: 'IconVersions',
    inverseSideTarget: () => WorkflowVersionWorkspaceEntity,
    inverseSideFieldKey: 'runs',
  })
  workflowVersion: Relation<WorkflowVersionWorkspaceEntity>;

  @WorkspaceJoinColumn('workflowVersion')
  workflowVersionId: string;

  @WorkspaceRelation({
    standardId: WORKFLOW_RUN_STANDARD_FIELD_IDS.workflow,
    type: RelationMetadataType.MANY_TO_ONE,
    label: 'Workflow',
    description: 'WorkflowRun workflow',
    icon: 'IconSettingsAutomation',
    inverseSideTarget: () => WorkflowWorkspaceEntity,
    inverseSideFieldKey: 'runs',
  })
  @WorkspaceIsNullable()
  workflow: Relation<WorkflowWorkspaceEntity>;

  @WorkspaceJoinColumn('workflow')
  workflowId: string;
}
