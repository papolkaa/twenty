import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { RelationDeleteAction } from 'src/metadata/relation-metadata/relation-metadata.entity';

export enum WorkspaceMigrationColumnActionType {
  CREATE = 'CREATE',
  ALTER = 'ALTER',
  CREATE_RELATION = 'CREATE_RELATION',
  DROP_RELATION = 'DROP_RELATION',
  DROP = 'DROP',
}

export type WorkspaceMigrationEnum = string | { from: string; to: string };

export interface WorkspaceMigrationColumnDefinition {
  columnName: string;
  columnType: string;
  enum?: WorkspaceMigrationEnum[];
  isArray?: boolean;
  isNullable?: boolean;
  defaultValue?: any;
}

export interface WorkspaceMigrationColumnCreate
  extends WorkspaceMigrationColumnDefinition {
  action: WorkspaceMigrationColumnActionType.CREATE;
}

export type WorkspaceMigrationColumnAlter = {
  action: WorkspaceMigrationColumnActionType.ALTER;
  currentColumnDefinition: WorkspaceMigrationColumnDefinition;
  alteredColumnDefinition: WorkspaceMigrationColumnDefinition;
};

export type WorkspaceMigrationColumnCreateRelation = {
  action: WorkspaceMigrationColumnActionType.CREATE_RELATION;
  columnName: string;
  referencedTableName: string;
  referencedTableColumnName: string;
  isUnique?: boolean;
  onDelete?: RelationDeleteAction;
};

export type WorkspaceMigrationColumnDropRelation = {
  action: WorkspaceMigrationColumnActionType.DROP_RELATION;
  columnName: string;
};

export type WorkspaceMigrationColumnDrop = {
  action: WorkspaceMigrationColumnActionType.DROP;
  columnName: string;
};

export type WorkspaceMigrationColumnAction = {
  action: WorkspaceMigrationColumnActionType;
} & (
  | WorkspaceMigrationColumnCreate
  | WorkspaceMigrationColumnAlter
  | WorkspaceMigrationColumnCreateRelation
  | WorkspaceMigrationColumnDropRelation
  | WorkspaceMigrationColumnDrop
);

export type WorkspaceMigrationTableAction = {
  name: string;
  action: 'create' | 'alter' | 'drop';
  columns?: WorkspaceMigrationColumnAction[];
};

@Entity('workspaceMigration')
export class WorkspaceMigrationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, type: 'jsonb' })
  migrations: WorkspaceMigrationTableAction[];

  @Column({ nullable: false })
  name: string;

  @Column({ default: false })
  isCustom: boolean;

  @Column({ nullable: true })
  appliedAt?: Date;

  @Column({ nullable: false, type: 'uuid' })
  workspaceId: string;

  @CreateDateColumn()
  createdAt: Date;
}
