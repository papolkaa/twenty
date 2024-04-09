import { FieldMetadataType } from 'src/engine/metadata-modules/field-metadata/field-metadata.entity';
import {
  baseObjectStandardFieldIds,
  auditLogStandardFieldIds,
} from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-field-ids';
import { standardObjectIds } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-object-ids';
import { FieldMetadata } from 'src/engine/workspace-manager/workspace-sync-metadata/decorators/field-metadata.decorator';
import { IsNullable } from 'src/engine/workspace-manager/workspace-sync-metadata/decorators/is-nullable.decorator';
import { IsSystem } from 'src/engine/workspace-manager/workspace-sync-metadata/decorators/is-system.decorator';
import { ObjectMetadata } from 'src/engine/workspace-manager/workspace-sync-metadata/decorators/object-metadata.decorator';
import { WorkspaceMemberObjectMetadata } from 'src/modules/workspace-member/standard-objects/workspace-member.object-metadata';

@ObjectMetadata({
  standardId: standardObjectIds.auditLog,
  namePlural: 'auditLogs',
  labelSingular: 'Audit Log',
  labelPlural: 'Audit Logs',
  description: 'An audit log of actions performed in the system',
  icon: 'IconIconTimelineEvent',
})
@IsSystem()
export class AuditLogObjectMetadata {
  @FieldMetadata({
    standardId: baseObjectStandardFieldIds.id,
    type: FieldMetadataType.UUID,
    label: 'Id',
    description: 'Id',
    defaultValue: 'uuid',
    icon: 'Icon123',
  })
  @IsSystem()
  id: string;

  @FieldMetadata({
    standardId: baseObjectStandardFieldIds.createdAt,
    type: FieldMetadataType.DATE_TIME,
    label: 'Creation date',
    description: 'Creation date',
    icon: 'IconCalendar',
    defaultValue: 'now',
  })
  createdAt: Date;

  @FieldMetadata({
    standardId: auditLogStandardFieldIds.name,
    type: FieldMetadataType.TEXT,
    label: 'Event name',
    description: 'Event name/type',
    icon: 'IconAbc',
  })
  name: string;

  @FieldMetadata({
    standardId: auditLogStandardFieldIds.properties,
    type: FieldMetadataType.RAW_JSON,
    label: 'Event details',
    description: 'Json value for event details',
    icon: 'IconListDetails',
  })
  @IsNullable()
  properties: JSON;

  @FieldMetadata({
    standardId: auditLogStandardFieldIds.context,
    type: FieldMetadataType.RAW_JSON,
    label: 'Event context',
    description:
      'Json object to provide context (user, device, workspace, etc.)',
    icon: 'IconListDetails',
  })
  @IsNullable()
  context: JSON;

  @FieldMetadata({
    standardId: auditLogStandardFieldIds.objectName,
    type: FieldMetadataType.TEXT,
    label: 'Object name',
    description: 'If the event is related to a particular object',
    icon: 'IconAbc',
  })
  @IsNullable()
  objectName: string;

  @FieldMetadata({
    standardId: auditLogStandardFieldIds.objectId,
    type: FieldMetadataType.UUID,
    label: 'Object id',
    description: 'Event name/type',
    icon: 'IconAbc',
  })
  @IsNullable()
  objectId: string;

  @FieldMetadata({
    standardId: auditLogStandardFieldIds.workspaceMember,
    type: FieldMetadataType.RELATION,
    label: 'Workspace Member',
    description: 'Event workspace member',
    icon: 'IconCircleUser',
    joinColumn: 'workspaceMemberId',
  })
  @IsNullable()
  workspaceMember: WorkspaceMemberObjectMetadata;
}
