import { useApolloMetadataClient } from '@/object-metadata/hooks/useApolloMetadataClient';
import { ApolloClient, useApolloClient, useMutation } from '@apollo/client';

import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useFindOneRecordQuery } from '@/object-record/hooks/useFindOneRecordQuery';
import { DEACTIVATE_WORKFLOW_VERSION } from '@/workflow/graphql/deactivateWorkflowVersion';
import {
  ActivateWorkflowVersionMutation,
  ActivateWorkflowVersionMutationVariables,
} from '~/generated/graphql';

export const useDeactivateWorkflowVersion = () => {
  const apolloClient = useApolloClient();

  const apolloMetadataClient = useApolloMetadataClient();
  const [mutate] = useMutation<
    ActivateWorkflowVersionMutation,
    ActivateWorkflowVersionMutationVariables
  >(DEACTIVATE_WORKFLOW_VERSION, {
    client: apolloMetadataClient ?? ({} as ApolloClient<any>),
  });

  const { findOneRecordQuery: findOneWorkflowVersionQuery } =
    useFindOneRecordQuery({
      objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
    });

  const deactivateWorkflowVersion = async (workflowVersionId: string) => {
    await mutate({
      variables: {
        workflowVersionId,
      },
    });

    await apolloClient.query({
      query: findOneWorkflowVersionQuery,
      variables: {
        objectRecordId: workflowVersionId,
      },
      fetchPolicy: 'network-only',
    });
  };

  return { deactivateWorkflowVersion };
};
