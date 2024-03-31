import { useApolloFactory } from '@/apollo/hooks/useApolloFactory';
import { REACT_APP_SERVER_BASE_URL } from '~/config';

import { ApolloMetadataClientContext } from '../context/ApolloClientMetadataContext';

export const ApolloMetadataClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const apolloMetadataClient = useApolloFactory({
    uri: `${REACT_APP_SERVER_BASE_URL}/metadata`,
  });

  return (
    <ApolloMetadataClientContext.Provider value={apolloMetadataClient}>
      {children}
    </ApolloMetadataClientContext.Provider>
  );
};
