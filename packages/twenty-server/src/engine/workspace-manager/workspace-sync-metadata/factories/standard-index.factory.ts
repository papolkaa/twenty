import { Injectable } from '@nestjs/common';

import { FeatureFlagMap } from 'src/engine/core-modules/feature-flag/interfaces/feature-flag-map.interface';
import { PartialIndexMetadata } from 'src/engine/workspace-manager/workspace-sync-metadata/interfaces/partial-index-metadata.interface';
import { WorkspaceSyncContext } from 'src/engine/workspace-manager/workspace-sync-metadata/interfaces/workspace-sync-context.interface';

import { IndexMetadataEntity } from 'src/engine/metadata-modules/index-metadata/index-metadata.entity';
import { generateDeterministicIndexName } from 'src/engine/metadata-modules/index-metadata/utils/generate-deterministic-index-name';
import { ObjectMetadataEntity } from 'src/engine/metadata-modules/object-metadata/object-metadata.entity';
import { BaseWorkspaceEntity } from 'src/engine/twenty-orm/base.workspace-entity';
import { CustomWorkspaceEntity } from 'src/engine/twenty-orm/custom.workspace-entity';
import { metadataArgsStorage } from 'src/engine/twenty-orm/storage/metadata-args.storage';
import { computeTableName } from 'src/engine/utils/compute-table-name.util';
import { isGatedAndNotEnabled } from 'src/engine/workspace-manager/workspace-sync-metadata/utils/is-gate-and-not-enabled.util';

@Injectable()
export class StandardIndexFactory {
  create(
    standardObjectMetadataDefinitions: (typeof BaseWorkspaceEntity)[],
    context: WorkspaceSyncContext,
    originalObjectMetadataMap: Record<string, ObjectMetadataEntity>,
    originalCustomObjectMetadataMap: Record<string, ObjectMetadataEntity>,
    workspaceFeatureFlagsMap: FeatureFlagMap,
  ): Partial<IndexMetadataEntity>[] {
    const standardIndexOnStandardObjects =
      standardObjectMetadataDefinitions.flatMap((standardObjectMetadata) =>
        this.createIndexMetadata(
          standardObjectMetadata,
          context,
          originalObjectMetadataMap,
          workspaceFeatureFlagsMap,
        ),
      );

    const standardIndexesOnCustomObjects =
      this.createStandardIndexMetadataForCustomObject(
        context,
        originalCustomObjectMetadataMap,
        workspaceFeatureFlagsMap,
      );

    return [
      standardIndexOnStandardObjects,
      standardIndexesOnCustomObjects,
    ].flat();
  }

  private createIndexMetadata(
    target: typeof BaseWorkspaceEntity,
    context: WorkspaceSyncContext,
    originalObjectMetadataMap: Record<string, ObjectMetadataEntity>,
    workspaceFeatureFlagsMap: FeatureFlagMap,
  ): Partial<IndexMetadataEntity>[] {
    const workspaceEntity = metadataArgsStorage.filterEntities(
      CustomWorkspaceEntity,
    );

    if (!workspaceEntity) {
      throw new Error(
        `Object metadata decorator not found, can't parse ${target.name}`,
      );
    }

    if (isGatedAndNotEnabled(workspaceEntity?.gate, workspaceFeatureFlagsMap)) {
      return [];
    }

    const workspaceIndexMetadataArgsCollection = metadataArgsStorage
      .filterIndexes(target)
      .filter((workspaceIndexMetadataArgs) => {
        return !isGatedAndNotEnabled(
          workspaceIndexMetadataArgs.gate,
          workspaceFeatureFlagsMap,
        );
      });

    return workspaceIndexMetadataArgsCollection.map(
      (workspaceIndexMetadataArgs) => {
        const objectMetadata =
          originalObjectMetadataMap[workspaceEntity.nameSingular];

        if (!objectMetadata) {
          throw new Error(
            `Object metadata not found for ${workspaceEntity.nameSingular}`,
          );
        }

        const indexMetadata: PartialIndexMetadata = {
          workspaceId: context.workspaceId,
          objectMetadataId: objectMetadata.id,
          name: workspaceIndexMetadataArgs.name,
          columns: workspaceIndexMetadataArgs.columns,
          isCustom: false,
          indexType: workspaceIndexMetadataArgs.type,
        };

        return indexMetadata;
      },
    );
  }

  private createStandardIndexMetadataForCustomObject(
    context: WorkspaceSyncContext,
    originalCustomObjectMetadataMap: Record<string, ObjectMetadataEntity>,
    workspaceFeatureFlagsMap: FeatureFlagMap,
  ): Partial<IndexMetadataEntity>[] {
    const target = CustomWorkspaceEntity;
    const workspaceEntity = metadataArgsStorage.filterExtendedEntities(target);

    if (!workspaceEntity) {
      throw new Error(
        `Object metadata decorator not found, can't parse ${target.name}`,
      );
    }

    const workspaceIndexMetadataArgsCollection = metadataArgsStorage
      .filterIndexes(target)
      .filter((workspaceIndexMetadataArgs) => {
        return !isGatedAndNotEnabled(
          workspaceIndexMetadataArgs.gate,
          workspaceFeatureFlagsMap,
        );
      });

    return Object.entries(originalCustomObjectMetadataMap).flatMap(
      ([customObjectName, customObjectMetadata]) => {
        return workspaceIndexMetadataArgsCollection.map(
          (workspaceIndexMetadataArgs) => {
            const indexMetadata: PartialIndexMetadata = {
              workspaceId: context.workspaceId,
              objectMetadataId: customObjectMetadata.id,
              name: `IDX_${generateDeterministicIndexName([computeTableName(customObjectName, true), ...workspaceIndexMetadataArgs.columns])}`,
              columns: workspaceIndexMetadataArgs.columns,
              isCustom: false,
              indexType: workspaceIndexMetadataArgs.type,
            };

            return indexMetadata;
          },
        );
      },
    );
  }
}
