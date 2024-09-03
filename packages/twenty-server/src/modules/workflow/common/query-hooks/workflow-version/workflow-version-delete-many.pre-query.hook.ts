import { WorkspaceQueryHookInstance } from 'src/engine/api/graphql/workspace-query-runner/workspace-query-hook/interfaces/workspace-query-hook.interface';
import { DeleteManyResolverArgs } from 'src/engine/api/graphql/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';

import { WorkspaceQueryHook } from 'src/engine/api/graphql/workspace-query-runner/workspace-query-hook/decorators/workspace-query-hook.decorator';
import {
  WorkflowQueryHookException,
  WorkflowQueryHookExceptionCode,
} from 'src/modules/workflow/common/query-hooks/workflow-query-hook.exception';
import { WorkflowVersionWorkspaceEntity } from 'src/modules/workflow/common/standard-objects/workflow-version.workspace-entity';

@WorkspaceQueryHook(`workflowVersion.deleteMany`)
export class WorkflowVersionDeleteManyPreQueryHook
  implements WorkspaceQueryHookInstance
{
  async execute(): Promise<
    DeleteManyResolverArgs<WorkflowVersionWorkspaceEntity>
  > {
    throw new WorkflowQueryHookException(
      'Method not allowed.',
      WorkflowQueryHookExceptionCode.FORBIDDEN,
    );
  }
}
