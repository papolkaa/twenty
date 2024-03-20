import { ObjectMetadataInterface } from 'src/engine-metadata/field-metadata/interfaces/object-metadata.interface';

export class ObjectRecordBaseEvent {
  workspaceId: string;
  recordId: string;
  objectMetadata: ObjectMetadataInterface;
  details: any;
}
