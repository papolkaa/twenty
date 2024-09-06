import { Relation } from 'src/engine/workspace-manager/workspace-sync-metadata/interfaces/relation.interface';

import {
  ActorMetadata,
  FieldActorSource,
} from 'src/engine/metadata-modules/field-metadata/composite-types/actor.composite-type';
import { FieldMetadataType } from 'src/engine/metadata-modules/field-metadata/field-metadata.entity';
import {
  RelationMetadataType,
  RelationOnDeleteAction,
} from 'src/engine/metadata-modules/relation-metadata/relation-metadata.entity';
import { BaseWorkspaceEntity } from 'src/engine/twenty-orm/base.workspace-entity';
import { WorkspaceEntity } from 'src/engine/twenty-orm/decorators/workspace-entity.decorator';
import { WorkspaceField } from 'src/engine/twenty-orm/decorators/workspace-field.decorator';
import { WorkspaceIsNullable } from 'src/engine/twenty-orm/decorators/workspace-is-nullable.decorator';
import { WorkspaceIsSystem } from 'src/engine/twenty-orm/decorators/workspace-is-system.decorator';
import { WorkspaceRelation } from 'src/engine/twenty-orm/decorators/workspace-relation.decorator';
import { NOTE_STANDARD_FIELD_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-field-ids';
import { STANDARD_OBJECT_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-object-ids';
import { AttachmentWorkspaceEntity } from 'src/modules/attachment/standard-objects/attachment.workspace-entity';
import { FavoriteWorkspaceEntity } from 'src/modules/favorite/standard-objects/favorite.workspace-entity';
import { NoteTargetWorkspaceEntity } from 'src/modules/note/standard-objects/note-target.workspace-entity';
import { TimelineActivityWorkspaceEntity } from 'src/modules/timeline/standard-objects/timeline-activity.workspace-entity';

@WorkspaceEntity({
  standardId: STANDARD_OBJECT_IDS.note,
  namePlural: 'notes',
  labelSingular: 'Nota',
  labelPlural: 'Notas',
  description: 'Uma nota',
  icon: 'IconNotes',
  labelIdentifierStandardId: NOTE_STANDARD_FIELD_IDS.title,
  softDelete: true,
})
export class NoteWorkspaceEntity extends BaseWorkspaceEntity {
  @WorkspaceField({
    standardId: NOTE_STANDARD_FIELD_IDS.position,
    type: FieldMetadataType.POSITION,
    label: 'Posição',
    description: 'Posição do registro da nota',
    icon: 'IconHierarchy2',
  })
  @WorkspaceIsSystem()
  @WorkspaceIsNullable()
  position: number | null;

  @WorkspaceField({
    standardId: NOTE_STANDARD_FIELD_IDS.title,
    type: FieldMetadataType.TEXT,
    label: 'Título',
    description: 'Título da nota',
    icon: 'IconNotes',
  })
  title: string;

  @WorkspaceField({
    standardId: NOTE_STANDARD_FIELD_IDS.body,
    type: FieldMetadataType.RICH_TEXT,
    label: 'Descrição',
    description: 'Descrição da nota',
    icon: 'IconFilePencil',
  })
  @WorkspaceIsNullable()
  body: string | null;

  @WorkspaceField({
    standardId: NOTE_STANDARD_FIELD_IDS.createdBy,
    type: FieldMetadataType.ACTOR,
    label: 'Criado por',
    icon: 'IconCreativeCommonsSa',
    description: 'O criador do registro',
    defaultValue: {
      source: `'${FieldActorSource.MANUAL}'`,
      name: "''",
    },
  })
  createdBy: ActorMetadata;

  @WorkspaceRelation({
    standardId: NOTE_STANDARD_FIELD_IDS.noteTargets,
    label: 'Alvos',
    description: 'Alvos da nota',
    icon: 'IconCheckbox',
    type: RelationMetadataType.ONE_TO_MANY,
    inverseSideTarget: () => NoteTargetWorkspaceEntity,
    onDelete: RelationOnDeleteAction.SET_NULL,
  })
  @WorkspaceIsNullable()
  @WorkspaceIsSystem()
  noteTargets: Relation<NoteTargetWorkspaceEntity[]>;

  @WorkspaceRelation({
    standardId: NOTE_STANDARD_FIELD_IDS.attachments,
    label: 'Anexos',
    description: 'Anexos da nota',
    icon: 'IconFileImport',
    type: RelationMetadataType.ONE_TO_MANY,
    inverseSideTarget: () => AttachmentWorkspaceEntity,
    onDelete: RelationOnDeleteAction.SET_NULL,
  })
  @WorkspaceIsNullable()
  attachments: Relation<AttachmentWorkspaceEntity[]>;

  @WorkspaceRelation({
    standardId: NOTE_STANDARD_FIELD_IDS.timelineActivities,
    type: RelationMetadataType.ONE_TO_MANY,
    label: 'Atividades da Linha do Tempo',
    description: 'Atividades da linha do tempo vinculadas à nota.',
    icon: 'IconTimelineEvent',
    inverseSideTarget: () => TimelineActivityWorkspaceEntity,
    onDelete: RelationOnDeleteAction.SET_NULL,
  })
  @WorkspaceIsNullable()
  timelineActivities: Relation<TimelineActivityWorkspaceEntity[]>;

  @WorkspaceRelation({
    standardId: NOTE_STANDARD_FIELD_IDS.favorites,
    type: RelationMetadataType.ONE_TO_MANY,
    label: 'Favoritos',
    description: 'Favoritos vinculados à nota',
    icon: 'IconHeart',
    inverseSideTarget: () => FavoriteWorkspaceEntity,
    onDelete: RelationOnDeleteAction.CASCADE,
  })
  @WorkspaceIsSystem()
  favorites: Relation<FavoriteWorkspaceEntity[]>;
}
