import { FieldMetadataDefaultValue } from 'src/metadata/field-metadata/interfaces/field-metadata-default-value.interface';
import { GateDecoratorParams } from 'src/workspace/workspace-sync-metadata/interfaces/gate-decorator.interface';
import { FieldMetadataOptions } from 'src/metadata/field-metadata/interfaces/field-metadata-options.interface';
import { FieldMetadataTargetColumnMap } from 'src/metadata/field-metadata/interfaces/field-metadata-target-column-map.interface';

import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';

import { ReflectObjectMetadata } from './reflect-object-metadata.interface';

export interface FieldMetadataDecoratorParams<
  T extends FieldMetadataType | 'default',
> {
  type: T;
  label: string | ((objectMetadata: ReflectObjectMetadata) => string);
  description?: string | ((objectMetadata: ReflectObjectMetadata) => string);
  icon?: string;
  defaultValue?: FieldMetadataDefaultValue<T>;
  joinColumn?: string;
  options?: FieldMetadataOptions<T>;
}

export interface ReflectFieldMetadata {
  [key: string]: Omit<
    FieldMetadataDecoratorParams<'default'>,
    'defaultValue' | 'type' | 'options'
  > & {
    name: string;
    type: FieldMetadataType;
    targetColumnMap: FieldMetadataTargetColumnMap<'default'>;
    isNullable: boolean;
    isSystem: boolean;
    isCustom: boolean;
    defaultValue: FieldMetadataDefaultValue<'default'> | null;
    gate?: GateDecoratorParams;
    options?: FieldMetadataOptions<'default'> | null;
  };
}
