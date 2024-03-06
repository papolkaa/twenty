import { Injectable } from '@nestjs/common';

import { WorkspaceSyncContext } from 'src/workspace/workspace-sync-metadata/interfaces/workspace-sync-context.interface';
import { FeatureFlagMap } from 'src/core/feature-flag/interfaces/feature-flag-map.interface';
import {
  PartialComputedFieldMetadata,
  PartialFieldMetadata,
} from 'src/workspace/workspace-sync-metadata/interfaces/partial-field-metadata.interface';
import { ReflectFieldMetadata } from 'src/workspace/workspace-sync-metadata/interfaces/reflect-field-metadata.interface';
import { ReflectObjectMetadata } from 'src/workspace/workspace-sync-metadata/interfaces/reflect-object-metadata.interface';
import { ReflectComputedRelationFieldMetadata } from 'src/workspace/workspace-sync-metadata/interfaces/reflect-computed-relation-field-metadata.interface';

import { TypedReflect } from 'src/utils/typed-reflect';
import { isGatedAndNotEnabled } from 'src/workspace/workspace-sync-metadata/utils/is-gate-and-not-enabled.util';

@Injectable()
export class StandardFieldFactory {
  create(
    target: object,
    context: WorkspaceSyncContext,
    workspaceFeatureFlagsMap: FeatureFlagMap,
  ): (PartialFieldMetadata | PartialComputedFieldMetadata)[] {
    const reflectObjectMetadata = TypedReflect.getMetadata(
      'objectMetadata',
      target,
    );
    const reflectFieldMetadataMap =
      TypedReflect.getMetadata('fieldMetadataMap', target) ?? [];
    const reflectComputedRelationFieldMetadataMap = TypedReflect.getMetadata(
      'computedRelationFieldMetadataMap',
      target,
    );
    const partialFieldMetadataCollection: (
      | PartialFieldMetadata
      | PartialComputedFieldMetadata
    )[] = Object.values(reflectFieldMetadataMap)
      .map((reflectFieldMetadata) =>
        this.createFieldMetadata(
          reflectObjectMetadata,
          reflectFieldMetadata,
          context,
          workspaceFeatureFlagsMap,
        ),
      )
      .filter((metadata): metadata is PartialFieldMetadata => !!metadata);
    const partialComputedFieldMetadata = this.createComputedFieldMetadata(
      reflectComputedRelationFieldMetadataMap,
      context,
      workspaceFeatureFlagsMap,
    );

    if (partialComputedFieldMetadata) {
      partialFieldMetadataCollection.push(partialComputedFieldMetadata);
    }

    return partialFieldMetadataCollection;
  }

  private createFieldMetadata(
    reflectObjectMetadata: ReflectObjectMetadata | undefined,
    reflectFieldMetadata: ReflectFieldMetadata[string],
    context: WorkspaceSyncContext,
    workspaceFeatureFlagsMap: FeatureFlagMap,
  ): PartialFieldMetadata | undefined {
    if (
      isGatedAndNotEnabled(reflectFieldMetadata.gate, workspaceFeatureFlagsMap)
    ) {
      return undefined;
    }

    return {
      ...reflectFieldMetadata,
      workspaceId: context.workspaceId,
      isSystem:
        reflectObjectMetadata?.isSystem || reflectFieldMetadata.isSystem,
    };
  }

  private createComputedFieldMetadata(
    reflectComputedRelationFieldMetadata:
      | ReflectComputedRelationFieldMetadata
      | undefined,
    context: WorkspaceSyncContext,
    workspaceFeatureFlagsMap: FeatureFlagMap,
  ): PartialComputedFieldMetadata | undefined {
    if (
      !reflectComputedRelationFieldMetadata ||
      isGatedAndNotEnabled(
        reflectComputedRelationFieldMetadata.gate,
        workspaceFeatureFlagsMap,
      )
    ) {
      return undefined;
    }

    return {
      ...reflectComputedRelationFieldMetadata,
      workspaceId: context.workspaceId,
      isSystem: reflectComputedRelationFieldMetadata.isSystem,
    };
  }
}
