import { CustomException } from 'src/utils/custom-exception';

export class WorkflowTriggerException extends CustomException {
  code: WorkflowTriggerExceptionCode;
  constructor(message: string, code: WorkflowTriggerExceptionCode) {
    super(message, code);
  }
}

export enum WorkflowTriggerExceptionCode {
  INVALID_INPUT = 'INVALID_INPUT',
  INVALID_WORKFLOW_TRIGGER = 'INVALID_WORKFLOW_TRIGGER',
  INVALID_WORKFLOW_VERSION = 'INVALID_WORKFLOW_VERSION',
}
