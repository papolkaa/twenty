import { gql } from '@apollo/client';

export const FIND_ONE_SERVERLESS_FUNCTION = gql`
  query GetOneServerlessFunction($id: UUID!) {
    serverlessFunction(id: $id) {
      id
      name
      description
      sourceCodeHash
      sourceCodeFullPath
      runtime
      syncStatus
      createdAt
      updatedAt
    }
  }
`;
