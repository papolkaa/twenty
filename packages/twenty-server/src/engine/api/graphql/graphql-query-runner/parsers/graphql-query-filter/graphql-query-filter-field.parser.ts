import { FindOptionsWhere, Not, ObjectLiteral } from 'typeorm';

import { RecordFilter } from 'src/engine/api/graphql/workspace-query-builder/interfaces/record.interface';
import { FieldMetadataInterface } from 'src/engine/metadata-modules/field-metadata/interfaces/field-metadata.interface';

import { compositeTypeDefintions } from 'src/engine/metadata-modules/field-metadata/composite-types';
import { isCompositeFieldMetadataType } from 'src/engine/metadata-modules/field-metadata/utils/is-composite-field-metadata-type.util';
import { CompositeFieldMetadataType } from 'src/engine/metadata-modules/workspace-migration/factories/composite-column-action.factory';
import { capitalize } from 'src/utils/capitalize';

import { GraphqlQueryFilterConditionParser } from './graphql-query-filter-condition.parser';
import { GraphqlQueryFilterOperatorParser } from './graphql-query-filter-operator.parser';

export class GraphqlQueryFilterFieldParser {
  private fieldMetadataMap: Map<string, FieldMetadataInterface>;
  private operatorParser: GraphqlQueryFilterOperatorParser;

  constructor(fieldMetadataMap: Map<string, FieldMetadataInterface>) {
    this.fieldMetadataMap = fieldMetadataMap;
    this.operatorParser = new GraphqlQueryFilterOperatorParser();
  }

  /**   *
   * @param key - The key of the filter field.
   * @param value - The value of the filter field.
   * @param isNegated - Indicates whether the filter should be negated.
   * @returns The `FindOptionsWhere` object representing the parsed filter field.
   */
  public parse(
    key: string,
    value: any,
    isNegated: boolean,
  ): FindOptionsWhere<ObjectLiteral> {
    const fieldMetadata = this.fieldMetadataMap.get(key);

    if (!fieldMetadata) {
      return {
        [key]: (value: RecordFilter, isNegated: boolean | undefined) => {
          const conditionParser = new GraphqlQueryFilterConditionParser(
            this.fieldMetadataMap,
          );

          return conditionParser.parse(value, isNegated);
        },
      };
    }

    if (isCompositeFieldMetadataType(fieldMetadata.type)) {
      return this.handleCompositeFieldForFilter(
        fieldMetadata,
        value,
        isNegated,
      );
    }

    if (typeof value === 'object' && value !== null) {
      const parsedValue = this.operatorParser.parseOperator(value, isNegated);

      return { [key]: parsedValue };
    }

    return { [key]: isNegated ? Not(value) : value };
  }

  private handleCompositeFieldForFilter(
    fieldMetadata: FieldMetadataInterface,
    fieldValue: any,
    isNegated: boolean,
  ): FindOptionsWhere<ObjectLiteral> {
    const compositeType = compositeTypeDefintions.get(
      fieldMetadata.type as CompositeFieldMetadataType,
    );

    if (!compositeType) {
      throw new Error(
        `Composite type definition not found for type: ${fieldMetadata.type}`,
      );
    }

    return Object.entries(fieldValue).reduce(
      (result, [subFieldKey, subFieldValue]) => {
        const subFieldMetadata = compositeType.properties.find(
          (property) => property.name === subFieldKey,
        );

        if (!subFieldMetadata) {
          throw new Error(
            `Sub field metadata not found for composite type: ${fieldMetadata.type}`,
          );
        }

        const fullFieldName = `${fieldMetadata.name}${capitalize(subFieldKey)}`;

        if (typeof subFieldValue === 'object' && subFieldValue !== null) {
          result[fullFieldName] = this.operatorParser.parseOperator(
            subFieldValue,
            isNegated,
          );
        } else {
          result[fullFieldName] = isNegated
            ? Not(subFieldValue)
            : subFieldValue;
        }

        return result;
      },
      {} as FindOptionsWhere<ObjectLiteral>,
    );
  }
}
