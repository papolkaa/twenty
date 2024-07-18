import { Injectable } from '@nestjs/common';

import { mapFieldMetadataToGraphqlQuery } from 'src/engine/api/rest/core/query-builder/utils/map-field-metadata-to-graphql-query.utils';
import { capitalize } from 'src/utils/capitalize';

@Injectable()
export class FindDuplicatesQueryFactory {
  create(objectMetadata, depth?: number): string {
    const objectNameSingular = objectMetadata.objectMetadataItem.nameSingular;

    return `
      query FindDuplicate${capitalize(objectNameSingular)}($ids: [ID!]!) {
        ${objectNameSingular}Duplicates(ids: $ids) {
          edges{
            node {
                ${objectMetadata.objectMetadataItem.fields
                  .map((field) =>
                    mapFieldMetadataToGraphqlQuery(
                      objectMetadata.objectMetadataItems,
                      field,
                      depth,
                    ),
                  )
                  .join('\n')}
            }
          }
          pageInfo {
          hasNextPage
          startCursor
          endCursor
          __typename
          }
          __typename
          }
      }
    `;
  }
}
