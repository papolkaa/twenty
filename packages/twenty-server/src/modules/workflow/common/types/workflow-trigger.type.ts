import { WorkflowAction } from 'src/modules/workflow/common/types/workflow-action.type';

export enum WorkflowTriggerType {
  DATABASE_EVENT = 'DATABASE_EVENT',
  MANUAL = 'MANUAL',
}

type BaseTrigger = {
  type: WorkflowTriggerType;
  input?: object;
  nextAction?: WorkflowAction;
};

export type WorkflowDatabaseEventTrigger = BaseTrigger & {
  type: WorkflowTriggerType.DATABASE_EVENT;
  settings: {
    eventName: string;
    triggerName: string;
  };
};

type WorkflowManualTrigger = BaseTrigger & {
  type: WorkflowTriggerType.MANUAL;
};

export type WorkflowTrigger =
  | WorkflowDatabaseEventTrigger
  | WorkflowManualTrigger;
