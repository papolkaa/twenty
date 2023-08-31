import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  JSON: any;
  Upload: any;
};

export type Activity = {
  __typename?: 'Activity';
  activityTargets?: Maybe<Array<ActivityTarget>>;
  assignee?: Maybe<User>;
  assigneeId?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Attachment>>;
  author: User;
  authorId: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  dueAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  reminderAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type: ActivityType;
  updatedAt: Scalars['DateTime'];
};

export type ActivityCreateInput = {
  activityTargets?: InputMaybe<ActivityTargetCreateNestedManyWithoutActivityInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedActivitiesInput>;
  attachments?: InputMaybe<AttachmentCreateNestedManyWithoutActivityInput>;
  author: UserCreateNestedOneWithoutAuthoredActivitiesInput;
  body?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutActivityInput>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dueAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  reminderAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ActivityType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityCreateNestedOneWithoutActivityTargetsInput = {
  connect?: InputMaybe<ActivityWhereUniqueInput>;
};

export type ActivityCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<ActivityWhereUniqueInput>;
};

export type ActivityListRelationFilter = {
  every?: InputMaybe<ActivityWhereInput>;
  none?: InputMaybe<ActivityWhereInput>;
  some?: InputMaybe<ActivityWhereInput>;
};

export type ActivityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ActivityOrderByWithRelationInput = {
  activityTargets?: InputMaybe<ActivityTargetOrderByRelationAggregateInput>;
  assignee?: InputMaybe<UserOrderByWithRelationInput>;
  assigneeId?: InputMaybe<SortOrder>;
  attachments?: InputMaybe<AttachmentOrderByRelationAggregateInput>;
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dueAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  reminderAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ActivityRelationFilter = {
  is?: InputMaybe<ActivityWhereInput>;
  isNot?: InputMaybe<ActivityWhereInput>;
};

export enum ActivityScalarFieldEnum {
  AssigneeId = 'assigneeId',
  AuthorId = 'authorId',
  Body = 'body',
  CompletedAt = 'completedAt',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DueAt = 'dueAt',
  Id = 'id',
  ReminderAt = 'reminderAt',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId'
}

export type ActivityTarget = {
  __typename?: 'ActivityTarget';
  activity: Activity;
  activityId: Scalars['String'];
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  person?: Maybe<Person>;
  personId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ActivityTargetCreateManyActivityInput = {
  companyId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  personId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityTargetCreateManyActivityInputEnvelope = {
  data: Array<ActivityTargetCreateManyActivityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActivityTargetCreateManyCompanyInput = {
  activityId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  personId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityTargetCreateManyCompanyInputEnvelope = {
  data: Array<ActivityTargetCreateManyCompanyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActivityTargetCreateManyPersonInput = {
  activityId: Scalars['String'];
  companyId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityTargetCreateManyPersonInputEnvelope = {
  data: Array<ActivityTargetCreateManyPersonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActivityTargetCreateManyWorkspaceInput = {
  activityId: Scalars['String'];
  companyId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  personId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityTargetCreateManyWorkspaceInputEnvelope = {
  data: Array<ActivityTargetCreateManyWorkspaceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActivityTargetCreateNestedManyWithoutActivityInput = {
  connect?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityTargetCreateOrConnectWithoutActivityInput>>;
  create?: InputMaybe<Array<ActivityTargetCreateWithoutActivityInput>>;
  createMany?: InputMaybe<ActivityTargetCreateManyActivityInputEnvelope>;
};

export type ActivityTargetCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityTargetCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<ActivityTargetCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<ActivityTargetCreateManyCompanyInputEnvelope>;
};

export type ActivityTargetCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityTargetCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<ActivityTargetCreateWithoutPersonInput>>;
  createMany?: InputMaybe<ActivityTargetCreateManyPersonInputEnvelope>;
};

export type ActivityTargetCreateOrConnectWithoutActivityInput = {
  create: ActivityTargetCreateWithoutActivityInput;
  where: ActivityTargetWhereUniqueInput;
};

export type ActivityTargetCreateOrConnectWithoutCompanyInput = {
  create: ActivityTargetCreateWithoutCompanyInput;
  where: ActivityTargetWhereUniqueInput;
};

export type ActivityTargetCreateOrConnectWithoutPersonInput = {
  create: ActivityTargetCreateWithoutPersonInput;
  where: ActivityTargetWhereUniqueInput;
};

export type ActivityTargetCreateOrConnectWithoutWorkspaceInput = {
  create: ActivityTargetCreateWithoutWorkspaceInput;
  where: ActivityTargetWhereUniqueInput;
};

export type ActivityTargetCreateWithoutActivityInput = {
  company?: InputMaybe<CompanyCreateNestedOneWithoutActivityTargetInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  person?: InputMaybe<PersonCreateNestedOneWithoutActivityTargetInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityTargetCreateWithoutCompanyInput = {
  activity: ActivityCreateNestedOneWithoutActivityTargetsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  person?: InputMaybe<PersonCreateNestedOneWithoutActivityTargetInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityTargetCreateWithoutPersonInput = {
  activity: ActivityCreateNestedOneWithoutActivityTargetsInput;
  company?: InputMaybe<CompanyCreateNestedOneWithoutActivityTargetInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityTargetCreateWithoutWorkspaceInput = {
  activity: ActivityCreateNestedOneWithoutActivityTargetsInput;
  company?: InputMaybe<CompanyCreateNestedOneWithoutActivityTargetInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  person?: InputMaybe<PersonCreateNestedOneWithoutActivityTargetInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityTargetListRelationFilter = {
  every?: InputMaybe<ActivityTargetWhereInput>;
  none?: InputMaybe<ActivityTargetWhereInput>;
  some?: InputMaybe<ActivityTargetWhereInput>;
};

export type ActivityTargetOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ActivityTargetScalarWhereInput = {
  AND?: InputMaybe<Array<ActivityTargetScalarWhereInput>>;
  NOT?: InputMaybe<Array<ActivityTargetScalarWhereInput>>;
  OR?: InputMaybe<Array<ActivityTargetScalarWhereInput>>;
  activityId?: InputMaybe<StringFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  personId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ActivityTargetUpdateManyWithoutActivityNestedInput = {
  connect?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityTargetCreateOrConnectWithoutActivityInput>>;
  create?: InputMaybe<Array<ActivityTargetCreateWithoutActivityInput>>;
  createMany?: InputMaybe<ActivityTargetCreateManyActivityInputEnvelope>;
  delete?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ActivityTargetScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  set?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
};

export type ActivityTargetUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityTargetCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<ActivityTargetCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<ActivityTargetCreateManyCompanyInputEnvelope>;
  delete?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ActivityTargetScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  set?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
};

export type ActivityTargetUpdateManyWithoutPersonNestedInput = {
  connect?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityTargetCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<ActivityTargetCreateWithoutPersonInput>>;
  createMany?: InputMaybe<ActivityTargetCreateManyPersonInputEnvelope>;
  delete?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ActivityTargetScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  set?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
};

export type ActivityTargetUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityTargetCreateOrConnectWithoutWorkspaceInput>>;
  create?: InputMaybe<Array<ActivityTargetCreateWithoutWorkspaceInput>>;
  createMany?: InputMaybe<ActivityTargetCreateManyWorkspaceInputEnvelope>;
  delete?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ActivityTargetScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
  set?: InputMaybe<Array<ActivityTargetWhereUniqueInput>>;
};

export type ActivityTargetWhereInput = {
  AND?: InputMaybe<Array<ActivityTargetWhereInput>>;
  NOT?: InputMaybe<Array<ActivityTargetWhereInput>>;
  OR?: InputMaybe<Array<ActivityTargetWhereInput>>;
  activity?: InputMaybe<ActivityRelationFilter>;
  activityId?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  person?: InputMaybe<PersonRelationFilter>;
  personId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ActivityTargetWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum ActivityType {
  Note = 'Note',
  Task = 'Task'
}

export type ActivityUpdateInput = {
  activityTargets?: InputMaybe<ActivityTargetUpdateManyWithoutActivityNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedActivitiesNestedInput>;
  attachments?: InputMaybe<AttachmentUpdateManyWithoutActivityNestedInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutAuthoredActivitiesNestedInput>;
  body?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<CommentUpdateManyWithoutActivityNestedInput>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dueAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  reminderAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ActivityType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<ActivityWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ActivityWhereUniqueInput>>;
  set?: InputMaybe<Array<ActivityWhereUniqueInput>>;
};

export type ActivityUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<ActivityWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ActivityWhereUniqueInput>>;
  set?: InputMaybe<Array<ActivityWhereUniqueInput>>;
};

export type ActivityUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<ActivityWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ActivityWhereUniqueInput>>;
  set?: InputMaybe<Array<ActivityWhereUniqueInput>>;
};

export type ActivityWhereInput = {
  AND?: InputMaybe<Array<ActivityWhereInput>>;
  NOT?: InputMaybe<Array<ActivityWhereInput>>;
  OR?: InputMaybe<Array<ActivityWhereInput>>;
  activityTargets?: InputMaybe<ActivityTargetListRelationFilter>;
  assignee?: InputMaybe<UserRelationFilter>;
  assigneeId?: InputMaybe<StringNullableFilter>;
  attachments?: InputMaybe<AttachmentListRelationFilter>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringNullableFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dueAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  reminderAt?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumActivityTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ActivityWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type AffectedRows = {
  __typename?: 'AffectedRows';
  count: Scalars['Int'];
};

export type Analytics = {
  __typename?: 'Analytics';
  /** Boolean that confirms query was dispatched */
  success: Scalars['Boolean'];
};

export type Attachment = {
  __typename?: 'Attachment';
  activity: Activity;
  activityId: Scalars['String'];
  author: User;
  authorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  fullPath: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  type: AttachmentType;
  updatedAt: Scalars['DateTime'];
  workspace: Workspace;
};

export type AttachmentCreateNestedManyWithoutActivityInput = {
  connect?: InputMaybe<Array<AttachmentWhereUniqueInput>>;
};

export type AttachmentListRelationFilter = {
  every?: InputMaybe<AttachmentWhereInput>;
  none?: InputMaybe<AttachmentWhereInput>;
  some?: InputMaybe<AttachmentWhereInput>;
};

export type AttachmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum AttachmentType {
  Archive = 'Archive',
  Audio = 'Audio',
  Image = 'Image',
  Other = 'Other',
  Spreadsheet = 'Spreadsheet',
  TextDocument = 'TextDocument',
  Video = 'Video'
}

export type AttachmentUpdateManyWithoutActivityNestedInput = {
  connect?: InputMaybe<Array<AttachmentWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<AttachmentWhereUniqueInput>>;
  set?: InputMaybe<Array<AttachmentWhereUniqueInput>>;
};

export type AttachmentUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<AttachmentWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<AttachmentWhereUniqueInput>>;
  set?: InputMaybe<Array<AttachmentWhereUniqueInput>>;
};

export type AttachmentUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<AttachmentWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<AttachmentWhereUniqueInput>>;
  set?: InputMaybe<Array<AttachmentWhereUniqueInput>>;
};

export type AttachmentWhereInput = {
  AND?: InputMaybe<Array<AttachmentWhereInput>>;
  NOT?: InputMaybe<Array<AttachmentWhereInput>>;
  OR?: InputMaybe<Array<AttachmentWhereInput>>;
  activity?: InputMaybe<ActivityRelationFilter>;
  activityId?: InputMaybe<StringFilter>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fullPath?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumAttachmentTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AttachmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type AuthProviders = {
  __typename?: 'AuthProviders';
  google: Scalars['Boolean'];
  magicLink: Scalars['Boolean'];
  password: Scalars['Boolean'];
};

export type AuthToken = {
  __typename?: 'AuthToken';
  expiresAt: Scalars['DateTime'];
  token: Scalars['String'];
};

export type AuthTokenPair = {
  __typename?: 'AuthTokenPair';
  accessToken: AuthToken;
  refreshToken: AuthToken;
};

export type AuthTokens = {
  __typename?: 'AuthTokens';
  tokens: AuthTokenPair;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type ClientConfig = {
  __typename?: 'ClientConfig';
  authProviders: AuthProviders;
  debugMode: Scalars['Boolean'];
  signInPrefilled: Scalars['Boolean'];
  support: Support;
  telemetry: Telemetry;
};

export enum ColorScheme {
  Dark = 'Dark',
  Light = 'Light',
  System = 'System'
}

export type Comment = {
  __typename?: 'Comment';
  activity?: Maybe<Activity>;
  activityId?: Maybe<Scalars['String']>;
  author: User;
  authorId: Scalars['String'];
  body: Scalars['String'];
  commentThreadId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type CommentCreateInput = {
  activity?: InputMaybe<ActivityCreateNestedOneWithoutCommentsInput>;
  author: UserCreateNestedOneWithoutCommentsInput;
  body: Scalars['String'];
  commentThreadId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateNestedManyWithoutActivityInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentUpdateManyWithoutActivityNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  activity?: InputMaybe<ActivityRelationFilter>;
  activityId?: InputMaybe<StringNullableFilter>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringFilter>;
  commentThreadId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  ActivityTarget?: Maybe<Array<ActivityTarget>>;
  Favorite?: Maybe<Array<Favorite>>;
  PipelineProgress?: Maybe<Array<PipelineProgress>>;
  _activityCount: Scalars['Int'];
  accountOwner?: Maybe<User>;
  accountOwnerId?: Maybe<Scalars['String']>;
  activities: Array<Activity>;
  address: Scalars['String'];
  annualRecurringRevenue?: Maybe<Scalars['Int']>;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  domainName: Scalars['String'];
  employees?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  idealCustomerProfile: Scalars['Boolean'];
  linkedinUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  people?: Maybe<Array<Person>>;
  updatedAt: Scalars['DateTime'];
  xUrl?: Maybe<Scalars['String']>;
};

export type CompanyCreateInput = {
  ActivityTarget?: InputMaybe<ActivityTargetCreateNestedManyWithoutCompanyInput>;
  Favorite?: InputMaybe<FavoriteCreateNestedManyWithoutCompanyInput>;
  PipelineProgress?: InputMaybe<PipelineProgressCreateNestedManyWithoutCompanyInput>;
  accountOwner?: InputMaybe<UserCreateNestedOneWithoutCompaniesInput>;
  address: Scalars['String'];
  annualRecurringRevenue?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  domainName: Scalars['String'];
  employees?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  idealCustomerProfile?: InputMaybe<Scalars['Boolean']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  people?: InputMaybe<PersonCreateNestedManyWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  xUrl?: InputMaybe<Scalars['String']>;
};

export type CompanyCreateManyInput = {
  accountOwnerId?: InputMaybe<Scalars['String']>;
  address: Scalars['String'];
  annualRecurringRevenue?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  domainName: Scalars['String'];
  employees?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  idealCustomerProfile?: InputMaybe<Scalars['Boolean']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  xUrl?: InputMaybe<Scalars['String']>;
};

export type CompanyCreateNestedOneWithoutActivityTargetInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
};

export type CompanyCreateNestedOneWithoutPeopleInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
};

export type CompanyCreateNestedOneWithoutPipelineProgressInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
};

export type CompanyListRelationFilter = {
  every?: InputMaybe<CompanyWhereInput>;
  none?: InputMaybe<CompanyWhereInput>;
  some?: InputMaybe<CompanyWhereInput>;
};

export type CompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CompanyOrderByWithRelationInput = {
  ActivityTarget?: InputMaybe<ActivityTargetOrderByRelationAggregateInput>;
  Favorite?: InputMaybe<FavoriteOrderByRelationAggregateInput>;
  PipelineProgress?: InputMaybe<PipelineProgressOrderByRelationAggregateInput>;
  accountOwner?: InputMaybe<UserOrderByWithRelationInput>;
  accountOwnerId?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  annualRecurringRevenue?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  domainName?: InputMaybe<SortOrder>;
  employees?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  idealCustomerProfile?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  people?: InputMaybe<PersonOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  xUrl?: InputMaybe<SortOrder>;
};

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
};

export enum CompanyScalarFieldEnum {
  AccountOwnerId = 'accountOwnerId',
  Address = 'address',
  AnnualRecurringRevenue = 'annualRecurringRevenue',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DomainName = 'domainName',
  Employees = 'employees',
  Id = 'id',
  IdealCustomerProfile = 'idealCustomerProfile',
  LinkedinUrl = 'linkedinUrl',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId',
  XUrl = 'xUrl'
}

export type CompanyUpdateInput = {
  ActivityTarget?: InputMaybe<ActivityTargetUpdateManyWithoutCompanyNestedInput>;
  Favorite?: InputMaybe<FavoriteUpdateManyWithoutCompanyNestedInput>;
  PipelineProgress?: InputMaybe<PipelineProgressUpdateManyWithoutCompanyNestedInput>;
  accountOwner?: InputMaybe<UserUpdateOneWithoutCompaniesNestedInput>;
  address?: InputMaybe<Scalars['String']>;
  annualRecurringRevenue?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  domainName?: InputMaybe<Scalars['String']>;
  employees?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  idealCustomerProfile?: InputMaybe<Scalars['Boolean']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  people?: InputMaybe<PersonUpdateManyWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  xUrl?: InputMaybe<Scalars['String']>;
};

export type CompanyUpdateManyWithoutAccountOwnerNestedInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<CompanyWhereUniqueInput>>;
};

export type CompanyUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<CompanyWhereUniqueInput>>;
};

export type CompanyUpdateOneWithoutPeopleNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CompanyUpdateOneWithoutPipelineProgressNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  ActivityTarget?: InputMaybe<ActivityTargetListRelationFilter>;
  Favorite?: InputMaybe<FavoriteListRelationFilter>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  PipelineProgress?: InputMaybe<PipelineProgressListRelationFilter>;
  accountOwner?: InputMaybe<UserRelationFilter>;
  accountOwnerId?: InputMaybe<StringNullableFilter>;
  address?: InputMaybe<StringFilter>;
  annualRecurringRevenue?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  domainName?: InputMaybe<StringFilter>;
  employees?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  idealCustomerProfile?: InputMaybe<BoolFilter>;
  linkedinUrl?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  people?: InputMaybe<PersonListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  xUrl?: InputMaybe<StringNullableFilter>;
};

export type CompanyWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumActivityTypeFilter = {
  equals?: InputMaybe<ActivityType>;
  in?: InputMaybe<Array<ActivityType>>;
  not?: InputMaybe<NestedEnumActivityTypeFilter>;
  notIn?: InputMaybe<Array<ActivityType>>;
};

export type EnumAttachmentTypeFilter = {
  equals?: InputMaybe<AttachmentType>;
  in?: InputMaybe<Array<AttachmentType>>;
  not?: InputMaybe<NestedEnumAttachmentTypeFilter>;
  notIn?: InputMaybe<Array<AttachmentType>>;
};

export type EnumColorSchemeFilter = {
  equals?: InputMaybe<ColorScheme>;
  in?: InputMaybe<Array<ColorScheme>>;
  not?: InputMaybe<NestedEnumColorSchemeFilter>;
  notIn?: InputMaybe<Array<ColorScheme>>;
};

export type EnumPipelineProgressableTypeFilter = {
  equals?: InputMaybe<PipelineProgressableType>;
  in?: InputMaybe<Array<PipelineProgressableType>>;
  not?: InputMaybe<NestedEnumPipelineProgressableTypeFilter>;
  notIn?: InputMaybe<Array<PipelineProgressableType>>;
};

export type EnumViewFilterOperandFilter = {
  equals?: InputMaybe<ViewFilterOperand>;
  in?: InputMaybe<Array<ViewFilterOperand>>;
  not?: InputMaybe<NestedEnumViewFilterOperandFilter>;
  notIn?: InputMaybe<Array<ViewFilterOperand>>;
};

export type EnumViewSortDirectionFilter = {
  equals?: InputMaybe<ViewSortDirection>;
  in?: InputMaybe<Array<ViewSortDirection>>;
  not?: InputMaybe<NestedEnumViewSortDirectionFilter>;
  notIn?: InputMaybe<Array<ViewSortDirection>>;
};

export type EnumViewTypeFilter = {
  equals?: InputMaybe<ViewType>;
  in?: InputMaybe<Array<ViewType>>;
  not?: InputMaybe<NestedEnumViewTypeFilter>;
  notIn?: InputMaybe<Array<ViewType>>;
};

export type Favorite = {
  __typename?: 'Favorite';
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  person?: Maybe<Person>;
  personId?: Maybe<Scalars['String']>;
  workspaceId?: Maybe<Scalars['String']>;
  workspaceMember?: Maybe<WorkspaceMember>;
  workspaceMemberId?: Maybe<Scalars['String']>;
};

export type FavoriteCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<FavoriteWhereUniqueInput>>;
};

export type FavoriteCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<Array<FavoriteWhereUniqueInput>>;
};

export type FavoriteListRelationFilter = {
  every?: InputMaybe<FavoriteWhereInput>;
  none?: InputMaybe<FavoriteWhereInput>;
  some?: InputMaybe<FavoriteWhereInput>;
};

export type FavoriteMutationForCompanyArgs = {
  companyId: Scalars['String'];
};

export type FavoriteMutationForPersonArgs = {
  personId: Scalars['String'];
};

export type FavoriteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FavoriteUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<FavoriteWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<FavoriteWhereUniqueInput>>;
  set?: InputMaybe<Array<FavoriteWhereUniqueInput>>;
};

export type FavoriteUpdateManyWithoutPersonNestedInput = {
  connect?: InputMaybe<Array<FavoriteWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<FavoriteWhereUniqueInput>>;
  set?: InputMaybe<Array<FavoriteWhereUniqueInput>>;
};

export type FavoriteWhereInput = {
  AND?: InputMaybe<Array<FavoriteWhereInput>>;
  NOT?: InputMaybe<Array<FavoriteWhereInput>>;
  OR?: InputMaybe<Array<FavoriteWhereInput>>;
  companyId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  personId?: InputMaybe<StringNullableFilter>;
  workspaceId?: InputMaybe<StringNullableFilter>;
  workspaceMemberId?: InputMaybe<StringNullableFilter>;
};

export type FavoriteWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum FileFolder {
  Attachment = 'Attachment',
  PersonPicture = 'PersonPicture',
  ProfilePicture = 'ProfilePicture',
  WorkspaceLogo = 'WorkspaceLogo'
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type LoginToken = {
  __typename?: 'LoginToken';
  loginToken: AuthToken;
};

export type Mutation = {
  __typename?: 'Mutation';
  allowImpersonation: WorkspaceMember;
  challenge: LoginToken;
  createEvent: Analytics;
  createFavoriteForCompany: Favorite;
  createFavoriteForPerson: Favorite;
  createManyCompany: AffectedRows;
  createManyPerson: AffectedRows;
  createManyView: AffectedRows;
  createManyViewField: AffectedRows;
  createManyViewFilter: AffectedRows;
  createManyViewSort: AffectedRows;
  createOneActivity: Activity;
  createOneComment: Comment;
  createOneCompany: Company;
  createOnePerson: Person;
  createOnePipelineProgress: PipelineProgress;
  createOnePipelineStage: PipelineStage;
  createOneView: View;
  createOneViewField: ViewField;
  deleteCurrentWorkspace: Workspace;
  deleteFavorite: Favorite;
  deleteManyActivities: AffectedRows;
  deleteManyCompany: AffectedRows;
  deleteManyPerson: AffectedRows;
  deleteManyPipelineProgress: AffectedRows;
  deleteManyView: AffectedRows;
  deleteManyViewFilter: AffectedRows;
  deleteManyViewSort: AffectedRows;
  deleteOneView: View;
  deleteUserAccount: User;
  deleteWorkspaceMember: WorkspaceMember;
  impersonate: Verify;
  renewToken: AuthTokens;
  signUp: LoginToken;
  updateOneActivity: Activity;
  updateOneCompany?: Maybe<Company>;
  updateOnePerson?: Maybe<Person>;
  updateOnePipelineProgress?: Maybe<PipelineProgress>;
  updateOnePipelineStage?: Maybe<PipelineStage>;
  updateOneView: View;
  updateOneViewField: ViewField;
  updateOneViewFilter: ViewFilter;
  updateOneViewSort: ViewSort;
  updateUser: User;
  updateWorkspace: Workspace;
  uploadAttachment: Scalars['String'];
  uploadFile: Scalars['String'];
  uploadImage: Scalars['String'];
  uploadPersonPicture: Scalars['String'];
  uploadProfilePicture: Scalars['String'];
  uploadWorkspaceLogo: Scalars['String'];
  verify: Verify;
};


export type MutationAllowImpersonationArgs = {
  allowImpersonation: Scalars['Boolean'];
};


export type MutationChallengeArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateEventArgs = {
  data: Scalars['JSON'];
  type: Scalars['String'];
};


export type MutationCreateFavoriteForCompanyArgs = {
  data: FavoriteMutationForCompanyArgs;
};


export type MutationCreateFavoriteForPersonArgs = {
  data: FavoriteMutationForPersonArgs;
};


export type MutationCreateManyCompanyArgs = {
  data: Array<CompanyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPersonArgs = {
  data: Array<PersonCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyViewArgs = {
  data: Array<ViewCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyViewFieldArgs = {
  data: Array<ViewFieldCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyViewFilterArgs = {
  data: Array<ViewFilterCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyViewSortArgs = {
  data: Array<ViewSortCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneActivityArgs = {
  data: ActivityCreateInput;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOneCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationCreateOnePersonArgs = {
  data: PersonCreateInput;
};


export type MutationCreateOnePipelineProgressArgs = {
  data: PipelineProgressCreateInput;
};


export type MutationCreateOnePipelineStageArgs = {
  data: PipelineStageCreateInput;
};


export type MutationCreateOneViewArgs = {
  data: ViewCreateInput;
};


export type MutationCreateOneViewFieldArgs = {
  data: ViewFieldCreateInput;
};


export type MutationDeleteFavoriteArgs = {
  where: FavoriteWhereInput;
};


export type MutationDeleteManyActivitiesArgs = {
  where?: InputMaybe<ActivityWhereInput>;
};


export type MutationDeleteManyCompanyArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};


export type MutationDeleteManyPersonArgs = {
  where?: InputMaybe<PersonWhereInput>;
};


export type MutationDeleteManyPipelineProgressArgs = {
  where?: InputMaybe<PipelineProgressWhereInput>;
};


export type MutationDeleteManyViewArgs = {
  where?: InputMaybe<ViewWhereInput>;
};


export type MutationDeleteManyViewFilterArgs = {
  where?: InputMaybe<ViewFilterWhereInput>;
};


export type MutationDeleteManyViewSortArgs = {
  where?: InputMaybe<ViewSortWhereInput>;
};


export type MutationDeleteOneViewArgs = {
  where: ViewWhereUniqueInput;
};


export type MutationDeleteWorkspaceMemberArgs = {
  where: WorkspaceMemberWhereUniqueInput;
};


export type MutationImpersonateArgs = {
  userId: Scalars['String'];
};


export type MutationRenewTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  workspaceInviteHash?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateOneActivityArgs = {
  data: ActivityUpdateInput;
  where: ActivityWhereUniqueInput;
};


export type MutationUpdateOneCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateOnePersonArgs = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};


export type MutationUpdateOnePipelineProgressArgs = {
  data: PipelineProgressUpdateInput;
  where: PipelineProgressWhereUniqueInput;
};


export type MutationUpdateOnePipelineStageArgs = {
  data: PipelineStageUpdateInput;
  where: PipelineStageWhereUniqueInput;
};


export type MutationUpdateOneViewArgs = {
  data: ViewUpdateInput;
  where: ViewWhereUniqueInput;
};


export type MutationUpdateOneViewFieldArgs = {
  data: ViewFieldUpdateInput;
  where: ViewFieldWhereUniqueInput;
};


export type MutationUpdateOneViewFilterArgs = {
  data: ViewFilterUpdateInput;
  where: ViewFilterWhereUniqueInput;
};


export type MutationUpdateOneViewSortArgs = {
  data: ViewSortUpdateInput;
  where: ViewSortWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateWorkspaceArgs = {
  data: WorkspaceUpdateInput;
};


export type MutationUploadAttachmentArgs = {
  activityId: Scalars['String'];
  file: Scalars['Upload'];
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
  fileFolder?: InputMaybe<FileFolder>;
};


export type MutationUploadImageArgs = {
  file: Scalars['Upload'];
  fileFolder?: InputMaybe<FileFolder>;
};


export type MutationUploadPersonPictureArgs = {
  file: Scalars['Upload'];
  id: Scalars['String'];
};


export type MutationUploadProfilePictureArgs = {
  file: Scalars['Upload'];
};


export type MutationUploadWorkspaceLogoArgs = {
  file: Scalars['Upload'];
};


export type MutationVerifyArgs = {
  loginToken: Scalars['String'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumActivityTypeFilter = {
  equals?: InputMaybe<ActivityType>;
  in?: InputMaybe<Array<ActivityType>>;
  not?: InputMaybe<NestedEnumActivityTypeFilter>;
  notIn?: InputMaybe<Array<ActivityType>>;
};

export type NestedEnumAttachmentTypeFilter = {
  equals?: InputMaybe<AttachmentType>;
  in?: InputMaybe<Array<AttachmentType>>;
  not?: InputMaybe<NestedEnumAttachmentTypeFilter>;
  notIn?: InputMaybe<Array<AttachmentType>>;
};

export type NestedEnumColorSchemeFilter = {
  equals?: InputMaybe<ColorScheme>;
  in?: InputMaybe<Array<ColorScheme>>;
  not?: InputMaybe<NestedEnumColorSchemeFilter>;
  notIn?: InputMaybe<Array<ColorScheme>>;
};

export type NestedEnumPipelineProgressableTypeFilter = {
  equals?: InputMaybe<PipelineProgressableType>;
  in?: InputMaybe<Array<PipelineProgressableType>>;
  not?: InputMaybe<NestedEnumPipelineProgressableTypeFilter>;
  notIn?: InputMaybe<Array<PipelineProgressableType>>;
};

export type NestedEnumViewFilterOperandFilter = {
  equals?: InputMaybe<ViewFilterOperand>;
  in?: InputMaybe<Array<ViewFilterOperand>>;
  not?: InputMaybe<NestedEnumViewFilterOperandFilter>;
  notIn?: InputMaybe<Array<ViewFilterOperand>>;
};

export type NestedEnumViewSortDirectionFilter = {
  equals?: InputMaybe<ViewSortDirection>;
  in?: InputMaybe<Array<ViewSortDirection>>;
  not?: InputMaybe<NestedEnumViewSortDirectionFilter>;
  notIn?: InputMaybe<Array<ViewSortDirection>>;
};

export type NestedEnumViewTypeFilter = {
  equals?: InputMaybe<ViewType>;
  in?: InputMaybe<Array<ViewType>>;
  not?: InputMaybe<NestedEnumViewTypeFilter>;
  notIn?: InputMaybe<Array<ViewType>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  ActivityTarget?: Maybe<Array<ActivityTarget>>;
  Favorite?: Maybe<Array<Favorite>>;
  PipelineProgress?: Maybe<Array<PipelineProgress>>;
  _activityCount: Scalars['Int'];
  activities: Array<Activity>;
  avatarUrl?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  comments: Array<Comment>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']>;
  contactPipelineProgresses?: Maybe<Array<PipelineProgress>>;
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jobTitle?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  xUrl?: Maybe<Scalars['String']>;
};

export type PersonCreateInput = {
  ActivityTarget?: InputMaybe<ActivityTargetCreateNestedManyWithoutPersonInput>;
  Favorite?: InputMaybe<FavoriteCreateNestedManyWithoutPersonInput>;
  PipelineProgress?: InputMaybe<PipelineProgressCreateNestedManyWithoutPersonInput>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutPeopleInput>;
  contactPipelineProgresses?: InputMaybe<PipelineProgressCreateNestedManyWithoutPointOfContactInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  xUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateManyInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  xUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
};

export type PersonCreateNestedOneWithoutActivityTargetInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
};

export type PersonCreateNestedOneWithoutContactPipelineProgressesInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
};

export type PersonCreateNestedOneWithoutPipelineProgressInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
};

export type PersonListRelationFilter = {
  every?: InputMaybe<PersonWhereInput>;
  none?: InputMaybe<PersonWhereInput>;
  some?: InputMaybe<PersonWhereInput>;
};

export type PersonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PersonOrderByWithRelationInput = {
  ActivityTarget?: InputMaybe<ActivityTargetOrderByRelationAggregateInput>;
  Favorite?: InputMaybe<FavoriteOrderByRelationAggregateInput>;
  PipelineProgress?: InputMaybe<PipelineProgressOrderByRelationAggregateInput>;
  avatarUrl?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  contactPipelineProgresses?: InputMaybe<PipelineProgressOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  xUrl?: InputMaybe<SortOrder>;
};

export type PersonRelationFilter = {
  is?: InputMaybe<PersonWhereInput>;
  isNot?: InputMaybe<PersonWhereInput>;
};

export enum PersonScalarFieldEnum {
  AvatarUrl = 'avatarUrl',
  City = 'city',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  JobTitle = 'jobTitle',
  LastName = 'lastName',
  LinkedinUrl = 'linkedinUrl',
  Phone = 'phone',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId',
  XUrl = 'xUrl'
}

export type PersonUpdateInput = {
  ActivityTarget?: InputMaybe<ActivityTargetUpdateManyWithoutPersonNestedInput>;
  Favorite?: InputMaybe<FavoriteUpdateManyWithoutPersonNestedInput>;
  PipelineProgress?: InputMaybe<PipelineProgressUpdateManyWithoutPersonNestedInput>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<CompanyUpdateOneWithoutPeopleNestedInput>;
  contactPipelineProgresses?: InputMaybe<PipelineProgressUpdateManyWithoutPointOfContactNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  xUrl?: InputMaybe<Scalars['String']>;
};

export type PersonUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  set?: InputMaybe<Array<PersonWhereUniqueInput>>;
};

export type PersonUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  set?: InputMaybe<Array<PersonWhereUniqueInput>>;
};

export type PersonUpdateOneWithoutContactPipelineProgressesNestedInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type PersonUpdateOneWithoutPipelineProgressNestedInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type PersonWhereInput = {
  AND?: InputMaybe<Array<PersonWhereInput>>;
  ActivityTarget?: InputMaybe<ActivityTargetListRelationFilter>;
  Favorite?: InputMaybe<FavoriteListRelationFilter>;
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  OR?: InputMaybe<Array<PersonWhereInput>>;
  PipelineProgress?: InputMaybe<PipelineProgressListRelationFilter>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  contactPipelineProgresses?: InputMaybe<PipelineProgressListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  jobTitle?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  linkedinUrl?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  xUrl?: InputMaybe<StringNullableFilter>;
};

export type PersonWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Pipeline = {
  __typename?: 'Pipeline';
  createdAt: Scalars['DateTime'];
  icon: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  pipelineProgressableType: PipelineProgressableType;
  pipelineProgresses?: Maybe<Array<PipelineProgress>>;
  pipelineStages?: Maybe<Array<PipelineStage>>;
  updatedAt: Scalars['DateTime'];
};

export type PipelineCreateNestedOneWithoutPipelineProgressesInput = {
  connect?: InputMaybe<PipelineWhereUniqueInput>;
};

export type PipelineCreateNestedOneWithoutPipelineStagesInput = {
  connect?: InputMaybe<PipelineWhereUniqueInput>;
};

export type PipelineOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pipelineProgressableType?: InputMaybe<SortOrder>;
  pipelineProgresses?: InputMaybe<PipelineProgressOrderByRelationAggregateInput>;
  pipelineStages?: InputMaybe<PipelineStageOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PipelineProgress = {
  __typename?: 'PipelineProgress';
  amount?: Maybe<Scalars['Int']>;
  closeDate?: Maybe<Scalars['DateTime']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  person?: Maybe<Person>;
  personId?: Maybe<Scalars['String']>;
  pipeline: Pipeline;
  pipelineId: Scalars['String'];
  pipelineStage: PipelineStage;
  pipelineStageId: Scalars['String'];
  pointOfContact?: Maybe<Person>;
  pointOfContactId?: Maybe<Scalars['String']>;
  probability?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type PipelineProgressCreateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  closeDate?: InputMaybe<Scalars['DateTime']>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutPipelineProgressInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  person?: InputMaybe<PersonCreateNestedOneWithoutPipelineProgressInput>;
  pipeline: PipelineCreateNestedOneWithoutPipelineProgressesInput;
  pipelineStage: PipelineStageCreateNestedOneWithoutPipelineProgressesInput;
  pointOfContact?: InputMaybe<PersonCreateNestedOneWithoutContactPipelineProgressesInput>;
  probability?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PipelineProgressCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
};

export type PipelineProgressCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
};

export type PipelineProgressCreateNestedManyWithoutPipelineStageInput = {
  connect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
};

export type PipelineProgressCreateNestedManyWithoutPointOfContactInput = {
  connect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
};

export type PipelineProgressListRelationFilter = {
  every?: InputMaybe<PipelineProgressWhereInput>;
  none?: InputMaybe<PipelineProgressWhereInput>;
  some?: InputMaybe<PipelineProgressWhereInput>;
};

export type PipelineProgressOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PipelineProgressOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  closeDate?: InputMaybe<SortOrder>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  person?: InputMaybe<PersonOrderByWithRelationInput>;
  personId?: InputMaybe<SortOrder>;
  pipeline?: InputMaybe<PipelineOrderByWithRelationInput>;
  pipelineId?: InputMaybe<SortOrder>;
  pipelineStage?: InputMaybe<PipelineStageOrderByWithRelationInput>;
  pipelineStageId?: InputMaybe<SortOrder>;
  pointOfContact?: InputMaybe<PersonOrderByWithRelationInput>;
  pointOfContactId?: InputMaybe<SortOrder>;
  probability?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PipelineProgressScalarFieldEnum {
  Amount = 'amount',
  CloseDate = 'closeDate',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  PersonId = 'personId',
  PipelineId = 'pipelineId',
  PipelineStageId = 'pipelineStageId',
  PointOfContactId = 'pointOfContactId',
  Probability = 'probability',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId'
}

export type PipelineProgressUpdateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  closeDate?: InputMaybe<Scalars['DateTime']>;
  company?: InputMaybe<CompanyUpdateOneWithoutPipelineProgressNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  person?: InputMaybe<PersonUpdateOneWithoutPipelineProgressNestedInput>;
  pipeline?: InputMaybe<PipelineUpdateOneRequiredWithoutPipelineProgressesNestedInput>;
  pipelineStage?: InputMaybe<PipelineStageUpdateOneRequiredWithoutPipelineProgressesNestedInput>;
  pointOfContact?: InputMaybe<PersonUpdateOneWithoutContactPipelineProgressesNestedInput>;
  probability?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PipelineProgressUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
  set?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
};

export type PipelineProgressUpdateManyWithoutPersonNestedInput = {
  connect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
  set?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
};

export type PipelineProgressUpdateManyWithoutPipelineStageNestedInput = {
  connect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
  set?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
};

export type PipelineProgressUpdateManyWithoutPointOfContactNestedInput = {
  connect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
  set?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
};

export type PipelineProgressUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
  set?: InputMaybe<Array<PipelineProgressWhereUniqueInput>>;
};

export type PipelineProgressWhereInput = {
  AND?: InputMaybe<Array<PipelineProgressWhereInput>>;
  NOT?: InputMaybe<Array<PipelineProgressWhereInput>>;
  OR?: InputMaybe<Array<PipelineProgressWhereInput>>;
  amount?: InputMaybe<IntNullableFilter>;
  closeDate?: InputMaybe<DateTimeNullableFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  person?: InputMaybe<PersonRelationFilter>;
  personId?: InputMaybe<StringNullableFilter>;
  pipeline?: InputMaybe<PipelineRelationFilter>;
  pipelineId?: InputMaybe<StringFilter>;
  pipelineStage?: InputMaybe<PipelineStageRelationFilter>;
  pipelineStageId?: InputMaybe<StringFilter>;
  pointOfContact?: InputMaybe<PersonRelationFilter>;
  pointOfContactId?: InputMaybe<StringNullableFilter>;
  probability?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PipelineProgressWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum PipelineProgressableType {
  Company = 'Company',
  Person = 'Person'
}

export type PipelineRelationFilter = {
  is?: InputMaybe<PipelineWhereInput>;
  isNot?: InputMaybe<PipelineWhereInput>;
};

export enum PipelineScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Icon = 'icon',
  Id = 'id',
  Name = 'name',
  PipelineProgressableType = 'pipelineProgressableType',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId'
}

export type PipelineStage = {
  __typename?: 'PipelineStage';
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  index?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  pipeline: Pipeline;
  pipelineId: Scalars['String'];
  pipelineProgresses?: Maybe<Array<PipelineProgress>>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PipelineStageCreateInput = {
  color: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  pipeline: PipelineCreateNestedOneWithoutPipelineStagesInput;
  pipelineProgresses?: InputMaybe<PipelineProgressCreateNestedManyWithoutPipelineStageInput>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PipelineStageCreateNestedOneWithoutPipelineProgressesInput = {
  connect?: InputMaybe<PipelineStageWhereUniqueInput>;
};

export type PipelineStageListRelationFilter = {
  every?: InputMaybe<PipelineStageWhereInput>;
  none?: InputMaybe<PipelineStageWhereInput>;
  some?: InputMaybe<PipelineStageWhereInput>;
};

export type PipelineStageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PipelineStageOrderByWithRelationInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pipeline?: InputMaybe<PipelineOrderByWithRelationInput>;
  pipelineId?: InputMaybe<SortOrder>;
  pipelineProgresses?: InputMaybe<PipelineProgressOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PipelineStageRelationFilter = {
  is?: InputMaybe<PipelineStageWhereInput>;
  isNot?: InputMaybe<PipelineStageWhereInput>;
};

export enum PipelineStageScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Index = 'index',
  Name = 'name',
  PipelineId = 'pipelineId',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId'
}

export type PipelineStageUpdateInput = {
  color?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  pipeline?: InputMaybe<PipelineUpdateOneRequiredWithoutPipelineStagesNestedInput>;
  pipelineProgresses?: InputMaybe<PipelineProgressUpdateManyWithoutPipelineStageNestedInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PipelineStageUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<PipelineStageWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<PipelineStageWhereUniqueInput>>;
  set?: InputMaybe<Array<PipelineStageWhereUniqueInput>>;
};

export type PipelineStageUpdateOneRequiredWithoutPipelineProgressesNestedInput = {
  connect?: InputMaybe<PipelineStageWhereUniqueInput>;
};

export type PipelineStageWhereInput = {
  AND?: InputMaybe<Array<PipelineStageWhereInput>>;
  NOT?: InputMaybe<Array<PipelineStageWhereInput>>;
  OR?: InputMaybe<Array<PipelineStageWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  index?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  pipeline?: InputMaybe<PipelineRelationFilter>;
  pipelineId?: InputMaybe<StringFilter>;
  pipelineProgresses?: InputMaybe<PipelineProgressListRelationFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PipelineStageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PipelineUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<PipelineWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<PipelineWhereUniqueInput>>;
  set?: InputMaybe<Array<PipelineWhereUniqueInput>>;
};

export type PipelineUpdateOneRequiredWithoutPipelineProgressesNestedInput = {
  connect?: InputMaybe<PipelineWhereUniqueInput>;
};

export type PipelineUpdateOneRequiredWithoutPipelineStagesNestedInput = {
  connect?: InputMaybe<PipelineWhereUniqueInput>;
};

export type PipelineWhereInput = {
  AND?: InputMaybe<Array<PipelineWhereInput>>;
  NOT?: InputMaybe<Array<PipelineWhereInput>>;
  OR?: InputMaybe<Array<PipelineWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  icon?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  pipelineProgressableType?: InputMaybe<EnumPipelineProgressableTypeFilter>;
  pipelineProgresses?: InputMaybe<PipelineProgressListRelationFilter>;
  pipelineStages?: InputMaybe<PipelineStageListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PipelineWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  checkUserExists: UserExists;
  checkWorkspaceInviteHashIsValid: WorkspaceInviteHashValid;
  clientConfig: ClientConfig;
  currentUser: User;
  currentWorkspace: Workspace;
  findFavorites: Array<Favorite>;
  findManyActivities: Array<Activity>;
  findManyCompany: Array<Company>;
  findManyPerson: Array<Person>;
  findManyPipeline: Array<Pipeline>;
  findManyPipelineProgress: Array<PipelineProgress>;
  findManyPipelineStage: Array<PipelineStage>;
  findManyUser: Array<User>;
  findManyView: Array<View>;
  findManyViewField: Array<ViewField>;
  findManyViewFilter: Array<ViewFilter>;
  findManyViewSort: Array<ViewSort>;
  findManyWorkspaceMember: Array<WorkspaceMember>;
  findUniqueCompany: Company;
  findUniquePerson: Person;
  findWorkspaceFromInviteHash: Workspace;
};


export type QueryCheckUserExistsArgs = {
  email: Scalars['String'];
};


export type QueryCheckWorkspaceInviteHashIsValidArgs = {
  inviteHash: Scalars['String'];
};


export type QueryFindManyActivitiesArgs = {
  cursor?: InputMaybe<ActivityWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActivityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActivityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActivityWhereInput>;
};


export type QueryFindManyCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryFindManyPersonArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryFindManyPipelineArgs = {
  cursor?: InputMaybe<PipelineWhereUniqueInput>;
  distinct?: InputMaybe<Array<PipelineScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PipelineOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PipelineWhereInput>;
};


export type QueryFindManyPipelineProgressArgs = {
  cursor?: InputMaybe<PipelineProgressWhereUniqueInput>;
  distinct?: InputMaybe<Array<PipelineProgressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PipelineProgressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PipelineProgressWhereInput>;
};


export type QueryFindManyPipelineStageArgs = {
  cursor?: InputMaybe<PipelineStageWhereUniqueInput>;
  distinct?: InputMaybe<Array<PipelineStageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PipelineStageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PipelineStageWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyViewArgs = {
  cursor?: InputMaybe<ViewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ViewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ViewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ViewWhereInput>;
};


export type QueryFindManyViewFieldArgs = {
  cursor?: InputMaybe<ViewFieldWhereUniqueInput>;
  distinct?: InputMaybe<Array<ViewFieldScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ViewFieldOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ViewFieldWhereInput>;
};


export type QueryFindManyViewFilterArgs = {
  cursor?: InputMaybe<ViewFilterWhereUniqueInput>;
  distinct?: InputMaybe<Array<ViewFilterScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ViewFilterOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ViewFilterWhereInput>;
};


export type QueryFindManyViewSortArgs = {
  cursor?: InputMaybe<ViewSortWhereUniqueInput>;
  distinct?: InputMaybe<Array<ViewSortScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ViewSortOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ViewSortWhereInput>;
};


export type QueryFindManyWorkspaceMemberArgs = {
  cursor?: InputMaybe<WorkspaceMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<WorkspaceMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WorkspaceMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkspaceMemberWhereInput>;
};


export type QueryFindUniqueCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type QueryFindUniquePersonArgs = {
  id: Scalars['String'];
};


export type QueryFindWorkspaceFromInviteHashArgs = {
  inviteHash: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Support = {
  __typename?: 'Support';
  supportDriver: Scalars['String'];
  supportFrontChatId?: Maybe<Scalars['String']>;
};

export type Telemetry = {
  __typename?: 'Telemetry';
  anonymizationEnabled: Scalars['Boolean'];
  enabled: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  assignedActivities?: Maybe<Array<Activity>>;
  authoredActivities?: Maybe<Array<Activity>>;
  authoredAttachments?: Maybe<Array<Attachment>>;
  avatarUrl?: Maybe<Scalars['String']>;
  canImpersonate: Scalars['Boolean'];
  comments?: Maybe<Array<Comment>>;
  companies?: Maybe<Array<Company>>;
  createdAt: Scalars['DateTime'];
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['DateTime']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['JSON']>;
  phoneNumber?: Maybe<Scalars['String']>;
  settings: UserSettings;
  settingsId: Scalars['String'];
  supportUserHash?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  workspaceMember?: Maybe<WorkspaceMember>;
};

export type UserCreateNestedOneWithoutAssignedActivitiesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutAuthoredActivitiesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutCompaniesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserExists = {
  __typename?: 'UserExists';
  exists: Scalars['Boolean'];
};

export type UserOrderByWithRelationInput = {
  assignedActivities?: InputMaybe<ActivityOrderByRelationAggregateInput>;
  authoredActivities?: InputMaybe<ActivityOrderByRelationAggregateInput>;
  authoredAttachments?: InputMaybe<AttachmentOrderByRelationAggregateInput>;
  avatarUrl?: InputMaybe<SortOrder>;
  canImpersonate?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  companies?: InputMaybe<CompanyOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  disabled?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  lastSeen?: InputMaybe<SortOrder>;
  locale?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  settings?: InputMaybe<UserSettingsOrderByWithRelationInput>;
  settingsId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  AvatarUrl = 'avatarUrl',
  CanImpersonate = 'canImpersonate',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Disabled = 'disabled',
  Email = 'email',
  EmailVerified = 'emailVerified',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  LastSeen = 'lastSeen',
  Locale = 'locale',
  Metadata = 'metadata',
  PasswordHash = 'passwordHash',
  PhoneNumber = 'phoneNumber',
  SettingsId = 'settingsId',
  UpdatedAt = 'updatedAt'
}

export type UserSettings = {
  __typename?: 'UserSettings';
  colorScheme: ColorScheme;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  locale: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type UserSettingsOrderByWithRelationInput = {
  colorScheme?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locale?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type UserSettingsRelationFilter = {
  is?: InputMaybe<UserSettingsWhereInput>;
  isNot?: InputMaybe<UserSettingsWhereInput>;
};

export type UserSettingsUpdateOneRequiredWithoutUserNestedInput = {
  update?: InputMaybe<UserSettingsUpdateWithoutUserInput>;
};

export type UserSettingsUpdateWithoutUserInput = {
  colorScheme?: InputMaybe<ColorScheme>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserSettingsWhereInput = {
  AND?: InputMaybe<Array<UserSettingsWhereInput>>;
  NOT?: InputMaybe<Array<UserSettingsWhereInput>>;
  OR?: InputMaybe<Array<UserSettingsWhereInput>>;
  colorScheme?: InputMaybe<EnumColorSchemeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  locale?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type UserUpdateInput = {
  assignedActivities?: InputMaybe<ActivityUpdateManyWithoutAssigneeNestedInput>;
  authoredActivities?: InputMaybe<ActivityUpdateManyWithoutAuthorNestedInput>;
  authoredAttachments?: InputMaybe<AttachmentUpdateManyWithoutAuthorNestedInput>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  canImpersonate?: InputMaybe<Scalars['Boolean']>;
  comments?: InputMaybe<CommentUpdateManyWithoutAuthorNestedInput>;
  companies?: InputMaybe<CompanyUpdateManyWithoutAccountOwnerNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastSeen?: InputMaybe<Scalars['DateTime']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  settings?: InputMaybe<UserSettingsUpdateOneRequiredWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserUpdateOneRequiredWithoutAuthoredActivitiesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserUpdateOneWithoutAssignedActivitiesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateOneWithoutCompaniesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignedActivities?: InputMaybe<ActivityListRelationFilter>;
  authoredActivities?: InputMaybe<ActivityListRelationFilter>;
  authoredAttachments?: InputMaybe<AttachmentListRelationFilter>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  canImpersonate?: InputMaybe<BoolFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  companies?: InputMaybe<CompanyListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  disabled?: InputMaybe<BoolFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<BoolFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  lastSeen?: InputMaybe<DateTimeNullableFilter>;
  locale?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  settings?: InputMaybe<UserSettingsRelationFilter>;
  settingsId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  settingsId?: InputMaybe<Scalars['String']>;
};

export type Verify = {
  __typename?: 'Verify';
  tokens: AuthTokenPair;
  user: User;
};

export type View = {
  __typename?: 'View';
  fields?: Maybe<Array<ViewField>>;
  filters?: Maybe<Array<ViewFilter>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  objectId: Scalars['String'];
  sorts?: Maybe<Array<ViewSort>>;
  type: ViewType;
};

export type ViewCreateInput = {
  fields?: InputMaybe<ViewFieldCreateNestedManyWithoutViewInput>;
  filters?: InputMaybe<ViewFilterCreateNestedManyWithoutViewInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  objectId: Scalars['String'];
  sorts?: InputMaybe<ViewSortCreateNestedManyWithoutViewInput>;
  type: ViewType;
};

export type ViewCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  objectId: Scalars['String'];
  type: ViewType;
};

export type ViewCreateNestedOneWithoutFieldsInput = {
  connect?: InputMaybe<ViewWhereUniqueInput>;
};

export type ViewField = {
  __typename?: 'ViewField';
  fieldName: Scalars['String'];
  id: Scalars['ID'];
  index: Scalars['Int'];
  isVisible: Scalars['Boolean'];
  objectName: Scalars['String'];
  sizeInPx: Scalars['Int'];
  view?: Maybe<View>;
  viewId?: Maybe<Scalars['String']>;
};

export type ViewFieldCreateInput = {
  fieldName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  index: Scalars['Int'];
  isVisible: Scalars['Boolean'];
  objectName: Scalars['String'];
  sizeInPx: Scalars['Int'];
  view?: InputMaybe<ViewCreateNestedOneWithoutFieldsInput>;
};

export type ViewFieldCreateManyInput = {
  fieldName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  index: Scalars['Int'];
  isVisible: Scalars['Boolean'];
  objectName: Scalars['String'];
  sizeInPx: Scalars['Int'];
  viewId?: InputMaybe<Scalars['String']>;
};

export type ViewFieldCreateNestedManyWithoutViewInput = {
  connect?: InputMaybe<Array<ViewFieldWhereUniqueInput>>;
};

export type ViewFieldListRelationFilter = {
  every?: InputMaybe<ViewFieldWhereInput>;
  none?: InputMaybe<ViewFieldWhereInput>;
  some?: InputMaybe<ViewFieldWhereInput>;
};

export type ViewFieldOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ViewFieldOrderByWithRelationInput = {
  fieldName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  isVisible?: InputMaybe<SortOrder>;
  objectName?: InputMaybe<SortOrder>;
  sizeInPx?: InputMaybe<SortOrder>;
  view?: InputMaybe<ViewOrderByWithRelationInput>;
  viewId?: InputMaybe<SortOrder>;
};

export enum ViewFieldScalarFieldEnum {
  FieldName = 'fieldName',
  Id = 'id',
  Index = 'index',
  IsVisible = 'isVisible',
  ObjectName = 'objectName',
  SizeInPx = 'sizeInPx',
  ViewId = 'viewId',
  WorkspaceId = 'workspaceId'
}

export type ViewFieldUpdateInput = {
  fieldName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  isVisible?: InputMaybe<Scalars['Boolean']>;
  objectName?: InputMaybe<Scalars['String']>;
  sizeInPx?: InputMaybe<Scalars['Int']>;
  view?: InputMaybe<ViewUpdateOneWithoutFieldsNestedInput>;
};

export type ViewFieldUpdateManyWithoutViewNestedInput = {
  connect?: InputMaybe<Array<ViewFieldWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ViewFieldWhereUniqueInput>>;
  set?: InputMaybe<Array<ViewFieldWhereUniqueInput>>;
};

export type ViewFieldUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<ViewFieldWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ViewFieldWhereUniqueInput>>;
  set?: InputMaybe<Array<ViewFieldWhereUniqueInput>>;
};

export type ViewFieldWhereInput = {
  AND?: InputMaybe<Array<ViewFieldWhereInput>>;
  NOT?: InputMaybe<Array<ViewFieldWhereInput>>;
  OR?: InputMaybe<Array<ViewFieldWhereInput>>;
  fieldName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  index?: InputMaybe<IntFilter>;
  isVisible?: InputMaybe<BoolFilter>;
  objectName?: InputMaybe<StringFilter>;
  sizeInPx?: InputMaybe<IntFilter>;
  view?: InputMaybe<ViewRelationFilter>;
  viewId?: InputMaybe<StringNullableFilter>;
};

export type ViewFieldWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  workspaceId_viewId_objectName_fieldName?: InputMaybe<ViewFieldWorkspaceIdViewIdObjectNameFieldNameCompoundUniqueInput>;
};

export type ViewFieldWorkspaceIdViewIdObjectNameFieldNameCompoundUniqueInput = {
  fieldName: Scalars['String'];
  objectName: Scalars['String'];
  viewId: Scalars['String'];
};

export type ViewFilter = {
  __typename?: 'ViewFilter';
  displayValue: Scalars['String'];
  key: Scalars['String'];
  name: Scalars['String'];
  operand: ViewFilterOperand;
  value: Scalars['String'];
  view: View;
  viewId: Scalars['String'];
};

export type ViewFilterCreateManyInput = {
  displayValue: Scalars['String'];
  key: Scalars['String'];
  name: Scalars['String'];
  operand: ViewFilterOperand;
  value: Scalars['String'];
  viewId: Scalars['String'];
};

export type ViewFilterCreateNestedManyWithoutViewInput = {
  connect?: InputMaybe<Array<ViewFilterWhereUniqueInput>>;
};

export type ViewFilterListRelationFilter = {
  every?: InputMaybe<ViewFilterWhereInput>;
  none?: InputMaybe<ViewFilterWhereInput>;
  some?: InputMaybe<ViewFilterWhereInput>;
};

export enum ViewFilterOperand {
  Contains = 'Contains',
  DoesNotContain = 'DoesNotContain',
  GreaterThan = 'GreaterThan',
  Is = 'Is',
  IsNot = 'IsNot',
  LessThan = 'LessThan'
}

export type ViewFilterOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ViewFilterOrderByWithRelationInput = {
  displayValue?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  operand?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
  view?: InputMaybe<ViewOrderByWithRelationInput>;
  viewId?: InputMaybe<SortOrder>;
};

export enum ViewFilterScalarFieldEnum {
  DisplayValue = 'displayValue',
  Key = 'key',
  Name = 'name',
  Operand = 'operand',
  Value = 'value',
  ViewId = 'viewId',
  WorkspaceId = 'workspaceId'
}

export type ViewFilterUpdateInput = {
  displayValue?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  operand?: InputMaybe<ViewFilterOperand>;
  value?: InputMaybe<Scalars['String']>;
  view?: InputMaybe<ViewUpdateOneRequiredWithoutFiltersNestedInput>;
};

export type ViewFilterUpdateManyWithoutViewNestedInput = {
  connect?: InputMaybe<Array<ViewFilterWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ViewFilterWhereUniqueInput>>;
  set?: InputMaybe<Array<ViewFilterWhereUniqueInput>>;
};

export type ViewFilterUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<ViewFilterWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ViewFilterWhereUniqueInput>>;
  set?: InputMaybe<Array<ViewFilterWhereUniqueInput>>;
};

export type ViewFilterViewIdKeyCompoundUniqueInput = {
  key: Scalars['String'];
  viewId: Scalars['String'];
};

export type ViewFilterWhereInput = {
  AND?: InputMaybe<Array<ViewFilterWhereInput>>;
  NOT?: InputMaybe<Array<ViewFilterWhereInput>>;
  OR?: InputMaybe<Array<ViewFilterWhereInput>>;
  displayValue?: InputMaybe<StringFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  operand?: InputMaybe<EnumViewFilterOperandFilter>;
  value?: InputMaybe<StringFilter>;
  view?: InputMaybe<ViewRelationFilter>;
  viewId?: InputMaybe<StringFilter>;
};

export type ViewFilterWhereUniqueInput = {
  viewId_key?: InputMaybe<ViewFilterViewIdKeyCompoundUniqueInput>;
};

export type ViewOrderByWithRelationInput = {
  fields?: InputMaybe<ViewFieldOrderByRelationAggregateInput>;
  filters?: InputMaybe<ViewFilterOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  objectId?: InputMaybe<SortOrder>;
  sorts?: InputMaybe<ViewSortOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
};

export type ViewRelationFilter = {
  is?: InputMaybe<ViewWhereInput>;
  isNot?: InputMaybe<ViewWhereInput>;
};

export enum ViewScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  ObjectId = 'objectId',
  Type = 'type',
  WorkspaceId = 'workspaceId'
}

export type ViewSort = {
  __typename?: 'ViewSort';
  direction: ViewSortDirection;
  key: Scalars['String'];
  name: Scalars['String'];
  view: View;
  viewId: Scalars['String'];
};

export type ViewSortCreateManyInput = {
  direction: ViewSortDirection;
  key: Scalars['String'];
  name: Scalars['String'];
  viewId: Scalars['String'];
};

export type ViewSortCreateNestedManyWithoutViewInput = {
  connect?: InputMaybe<Array<ViewSortWhereUniqueInput>>;
};

export enum ViewSortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type ViewSortListRelationFilter = {
  every?: InputMaybe<ViewSortWhereInput>;
  none?: InputMaybe<ViewSortWhereInput>;
  some?: InputMaybe<ViewSortWhereInput>;
};

export type ViewSortOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ViewSortOrderByWithRelationInput = {
  direction?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  view?: InputMaybe<ViewOrderByWithRelationInput>;
  viewId?: InputMaybe<SortOrder>;
};

export enum ViewSortScalarFieldEnum {
  Direction = 'direction',
  Key = 'key',
  Name = 'name',
  ViewId = 'viewId',
  WorkspaceId = 'workspaceId'
}

export type ViewSortUpdateInput = {
  direction?: InputMaybe<ViewSortDirection>;
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  view?: InputMaybe<ViewUpdateOneRequiredWithoutSortsNestedInput>;
};

export type ViewSortUpdateManyWithoutViewNestedInput = {
  connect?: InputMaybe<Array<ViewSortWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ViewSortWhereUniqueInput>>;
  set?: InputMaybe<Array<ViewSortWhereUniqueInput>>;
};

export type ViewSortUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<ViewSortWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ViewSortWhereUniqueInput>>;
  set?: InputMaybe<Array<ViewSortWhereUniqueInput>>;
};

export type ViewSortViewIdKeyCompoundUniqueInput = {
  key: Scalars['String'];
  viewId: Scalars['String'];
};

export type ViewSortWhereInput = {
  AND?: InputMaybe<Array<ViewSortWhereInput>>;
  NOT?: InputMaybe<Array<ViewSortWhereInput>>;
  OR?: InputMaybe<Array<ViewSortWhereInput>>;
  direction?: InputMaybe<EnumViewSortDirectionFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  view?: InputMaybe<ViewRelationFilter>;
  viewId?: InputMaybe<StringFilter>;
};

export type ViewSortWhereUniqueInput = {
  viewId_key?: InputMaybe<ViewSortViewIdKeyCompoundUniqueInput>;
};

export enum ViewType {
  Pipeline = 'Pipeline',
  Table = 'Table'
}

export type ViewUpdateInput = {
  fields?: InputMaybe<ViewFieldUpdateManyWithoutViewNestedInput>;
  filters?: InputMaybe<ViewFilterUpdateManyWithoutViewNestedInput>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  objectId?: InputMaybe<Scalars['String']>;
  sorts?: InputMaybe<ViewSortUpdateManyWithoutViewNestedInput>;
  type?: InputMaybe<ViewType>;
};

export type ViewUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<ViewWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ViewWhereUniqueInput>>;
  set?: InputMaybe<Array<ViewWhereUniqueInput>>;
};

export type ViewUpdateOneRequiredWithoutFiltersNestedInput = {
  connect?: InputMaybe<ViewWhereUniqueInput>;
};

export type ViewUpdateOneRequiredWithoutSortsNestedInput = {
  connect?: InputMaybe<ViewWhereUniqueInput>;
};

export type ViewUpdateOneWithoutFieldsNestedInput = {
  connect?: InputMaybe<ViewWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ViewWhereInput = {
  AND?: InputMaybe<Array<ViewWhereInput>>;
  NOT?: InputMaybe<Array<ViewWhereInput>>;
  OR?: InputMaybe<Array<ViewWhereInput>>;
  fields?: InputMaybe<ViewFieldListRelationFilter>;
  filters?: InputMaybe<ViewFilterListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  objectId?: InputMaybe<StringFilter>;
  sorts?: InputMaybe<ViewSortListRelationFilter>;
  type?: InputMaybe<EnumViewTypeFilter>;
};

export type ViewWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Workspace = {
  __typename?: 'Workspace';
  Attachment?: Maybe<Array<Attachment>>;
  activities?: Maybe<Array<Activity>>;
  activityTargets?: Maybe<Array<ActivityTarget>>;
  comments?: Maybe<Array<Comment>>;
  companies?: Maybe<Array<Company>>;
  createdAt: Scalars['DateTime'];
  displayName?: Maybe<Scalars['String']>;
  domainName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inviteHash?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  people?: Maybe<Array<Person>>;
  pipelineProgresses?: Maybe<Array<PipelineProgress>>;
  pipelineStages?: Maybe<Array<PipelineStage>>;
  pipelines?: Maybe<Array<Pipeline>>;
  updatedAt: Scalars['DateTime'];
  viewFields?: Maybe<Array<ViewField>>;
  viewFilters?: Maybe<Array<ViewFilter>>;
  viewSorts?: Maybe<Array<ViewSort>>;
  views?: Maybe<Array<View>>;
  workspaceMember?: Maybe<Array<WorkspaceMember>>;
};

export type WorkspaceInviteHashValid = {
  __typename?: 'WorkspaceInviteHashValid';
  isValid: Scalars['Boolean'];
};

export type WorkspaceMember = {
  __typename?: 'WorkspaceMember';
  Favorite?: Maybe<Array<Favorite>>;
  allowImpersonation: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  workspace: Workspace;
};

export type WorkspaceMemberOrderByWithRelationInput = {
  Favorite?: InputMaybe<FavoriteOrderByRelationAggregateInput>;
  allowImpersonation?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum WorkspaceMemberScalarFieldEnum {
  AllowImpersonation = 'allowImpersonation',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  WorkspaceId = 'workspaceId'
}

export type WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<WorkspaceMemberWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<WorkspaceMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<WorkspaceMemberWhereUniqueInput>>;
};

export type WorkspaceMemberWhereInput = {
  AND?: InputMaybe<Array<WorkspaceMemberWhereInput>>;
  Favorite?: InputMaybe<FavoriteListRelationFilter>;
  NOT?: InputMaybe<Array<WorkspaceMemberWhereInput>>;
  OR?: InputMaybe<Array<WorkspaceMemberWhereInput>>;
  allowImpersonation?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type WorkspaceMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type WorkspaceUpdateInput = {
  Attachment?: InputMaybe<AttachmentUpdateManyWithoutWorkspaceNestedInput>;
  activities?: InputMaybe<ActivityUpdateManyWithoutWorkspaceNestedInput>;
  activityTargets?: InputMaybe<ActivityTargetUpdateManyWithoutWorkspaceNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutWorkspaceNestedInput>;
  companies?: InputMaybe<CompanyUpdateManyWithoutWorkspaceNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayName?: InputMaybe<Scalars['String']>;
  domainName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  inviteHash?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  people?: InputMaybe<PersonUpdateManyWithoutWorkspaceNestedInput>;
  pipelineProgresses?: InputMaybe<PipelineProgressUpdateManyWithoutWorkspaceNestedInput>;
  pipelineStages?: InputMaybe<PipelineStageUpdateManyWithoutWorkspaceNestedInput>;
  pipelines?: InputMaybe<PipelineUpdateManyWithoutWorkspaceNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewFields?: InputMaybe<ViewFieldUpdateManyWithoutWorkspaceNestedInput>;
  viewFilters?: InputMaybe<ViewFilterUpdateManyWithoutWorkspaceNestedInput>;
  viewSorts?: InputMaybe<ViewSortUpdateManyWithoutWorkspaceNestedInput>;
  views?: InputMaybe<ViewUpdateManyWithoutWorkspaceNestedInput>;
  workspaceMember?: InputMaybe<WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput>;
};

export type ActivityQueryFragmentFragment = { __typename?: 'Activity', id: string, createdAt: string, title?: string | null, body?: string | null, type: ActivityType, completedAt?: string | null, dueAt?: string | null, assignee?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, displayName: string, avatarUrl?: string | null } | null, author: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, displayName: string }, comments?: Array<{ __typename?: 'Comment', id: string, body: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', id: string, displayName: string, firstName?: string | null, lastName?: string | null, avatarUrl?: string | null } }> | null, activityTargets?: Array<{ __typename?: 'ActivityTarget', id: string, companyId?: string | null, personId?: string | null, company?: { __typename?: 'Company', id: string, name: string, domainName: string } | null, person?: { __typename?: 'Person', id: string, displayName: string, avatarUrl?: string | null } | null }> | null };

export type ActivityUpdatePartsFragment = { __typename?: 'Activity', id: string, body?: string | null, title?: string | null, type: ActivityType, completedAt?: string | null, dueAt?: string | null, assignee?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, displayName: string } | null };

export type AddActivityTargetsOnActivityMutationVariables = Exact<{
  activityId: Scalars['String'];
  activityTargetInputs: Array<ActivityTargetCreateManyActivityInput> | ActivityTargetCreateManyActivityInput;
}>;


export type AddActivityTargetsOnActivityMutation = { __typename?: 'Mutation', updateOneActivity: { __typename?: 'Activity', id: string, createdAt: string, updatedAt: string, activityTargets?: Array<{ __typename?: 'ActivityTarget', id: string, createdAt: string, updatedAt: string, companyId?: string | null, personId?: string | null }> | null } };

export type CreateActivityMutationVariables = Exact<{
  data: ActivityCreateInput;
}>;


export type CreateActivityMutation = { __typename?: 'Mutation', createOneActivity: { __typename?: 'Activity', id: string, createdAt: string, updatedAt: string, authorId: string, type: ActivityType, activityTargets?: Array<{ __typename?: 'ActivityTarget', id: string, createdAt: string, updatedAt: string, activityId: string, companyId?: string | null, personId?: string | null }> | null, comments?: Array<{ __typename?: 'Comment', id: string, createdAt: string, updatedAt: string, body: string, author: { __typename?: 'User', id: string } }> | null } };

export type CreateCommentMutationVariables = Exact<{
  commentId: Scalars['String'];
  commentText: Scalars['String'];
  authorId: Scalars['String'];
  activityId: Scalars['String'];
  createdAt: Scalars['DateTime'];
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createOneComment: { __typename?: 'Comment', id: string, createdAt: string, body: string, activityId?: string | null, author: { __typename?: 'User', id: string, displayName: string, firstName?: string | null, lastName?: string | null, avatarUrl?: string | null } } };

export type DeleteActivityMutationVariables = Exact<{
  activityId: Scalars['String'];
}>;


export type DeleteActivityMutation = { __typename?: 'Mutation', deleteManyActivities: { __typename?: 'AffectedRows', count: number } };

export type RemoveActivityTargetsOnActivityMutationVariables = Exact<{
  activityId: Scalars['String'];
  activityTargetIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type RemoveActivityTargetsOnActivityMutation = { __typename?: 'Mutation', updateOneActivity: { __typename?: 'Activity', id: string, createdAt: string, updatedAt: string, activityTargets?: Array<{ __typename?: 'ActivityTarget', id: string, createdAt: string, updatedAt: string, companyId?: string | null, personId?: string | null }> | null } };

export type UpdateActivityMutationVariables = Exact<{
  where: ActivityWhereUniqueInput;
  data: ActivityUpdateInput;
}>;


export type UpdateActivityMutation = { __typename?: 'Mutation', updateOneActivity: { __typename?: 'Activity', id: string, body?: string | null, title?: string | null, type: ActivityType, completedAt?: string | null, dueAt?: string | null, assignee?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, displayName: string } | null } };

export type UploadAttachmentMutationVariables = Exact<{
  file: Scalars['Upload'];
  activityId: Scalars['String'];
}>;


export type UploadAttachmentMutation = { __typename?: 'Mutation', uploadAttachment: string };

export type GetActivitiesQueryVariables = Exact<{
  where: ActivityWhereInput;
  orderBy?: InputMaybe<Array<ActivityOrderByWithRelationInput> | ActivityOrderByWithRelationInput>;
}>;


export type GetActivitiesQuery = { __typename?: 'Query', findManyActivities: Array<{ __typename?: 'Activity', id: string, createdAt: string, title?: string | null, body?: string | null, type: ActivityType, completedAt?: string | null, dueAt?: string | null, assignee?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, displayName: string, avatarUrl?: string | null } | null, author: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, displayName: string }, comments?: Array<{ __typename?: 'Comment', id: string, body: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', id: string, displayName: string, firstName?: string | null, lastName?: string | null, avatarUrl?: string | null } }> | null, activityTargets?: Array<{ __typename?: 'ActivityTarget', id: string, companyId?: string | null, personId?: string | null, company?: { __typename?: 'Company', id: string, name: string, domainName: string } | null, person?: { __typename?: 'Person', id: string, displayName: string, avatarUrl?: string | null } | null }> | null }> };

export type GetActivitiesByTargetsQueryVariables = Exact<{
  activityTargetIds: Array<Scalars['String']> | Scalars['String'];
  orderBy?: InputMaybe<Array<ActivityOrderByWithRelationInput> | ActivityOrderByWithRelationInput>;
}>;


export type GetActivitiesByTargetsQuery = { __typename?: 'Query', findManyActivities: Array<{ __typename?: 'Activity', id: string, createdAt: string, title?: string | null, body?: string | null, type: ActivityType, completedAt?: string | null, dueAt?: string | null, assignee?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, displayName: string, avatarUrl?: string | null } | null, author: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, displayName: string }, comments?: Array<{ __typename?: 'Comment', id: string, body: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', id: string, displayName: string, firstName?: string | null, lastName?: string | null, avatarUrl?: string | null } }> | null, activityTargets?: Array<{ __typename?: 'ActivityTarget', id: string, companyId?: string | null, personId?: string | null, company?: { __typename?: 'Company', id: string, name: string, domainName: string } | null, person?: { __typename?: 'Person', id: string, displayName: string, avatarUrl?: string | null } | null }> | null }> };

export type GetActivityQueryVariables = Exact<{
  activityId: Scalars['String'];
}>;


export type GetActivityQuery = { __typename?: 'Query', findManyActivities: Array<{ __typename?: 'Activity', id: string, createdAt: string, title?: string | null, body?: string | null, type: ActivityType, completedAt?: string | null, dueAt?: string | null, assignee?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, displayName: string, avatarUrl?: string | null } | null, author: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, displayName: string }, comments?: Array<{ __typename?: 'Comment', id: string, body: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', id: string, displayName: string, firstName?: string | null, lastName?: string | null, avatarUrl?: string | null } }> | null, activityTargets?: Array<{ __typename?: 'ActivityTarget', id: string, companyId?: string | null, personId?: string | null, company?: { __typename?: 'Company', id: string, name: string, domainName: string } | null, person?: { __typename?: 'Person', id: string, displayName: string, avatarUrl?: string | null } | null }> | null }> };

export type CreateEventMutationVariables = Exact<{
  type: Scalars['String'];
  data: Scalars['JSON'];
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Analytics', success: boolean } };

export type UserQueryFragmentFragment = { __typename?: 'User', id: string, email: string, displayName: string, firstName?: string | null, lastName?: string | null, canImpersonate: boolean, supportUserHash?: string | null, avatarUrl?: string | null, workspaceMember?: { __typename?: 'WorkspaceMember', id: string, allowImpersonation: boolean, workspace: { __typename?: 'Workspace', id: string, domainName?: string | null, displayName?: string | null, logo?: string | null, inviteHash?: string | null } } | null, settings: { __typename?: 'UserSettings', id: string, colorScheme: ColorScheme, locale: string } };

export type ChallengeMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type ChallengeMutation = { __typename?: 'Mutation', challenge: { __typename?: 'LoginToken', loginToken: { __typename?: 'AuthToken', expiresAt: string, token: string } } };

export type ImpersonateMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ImpersonateMutation = { __typename?: 'Mutation', impersonate: { __typename?: 'Verify', user: { __typename?: 'User', id: string, email: string, displayName: string, firstName?: string | null, lastName?: string | null, canImpersonate: boolean, supportUserHash?: string | null, avatarUrl?: string | null, workspaceMember?: { __typename?: 'WorkspaceMember', id: string, allowImpersonation: boolean, workspace: { __typename?: 'Workspace', id: string, domainName?: string | null, displayName?: string | null, logo?: string | null, inviteHash?: string | null } } | null, settings: { __typename?: 'UserSettings', id: string, colorScheme: ColorScheme, locale: string } }, tokens: { __typename?: 'AuthTokenPair', accessToken: { __typename?: 'AuthToken', token: string, expiresAt: string }, refreshToken: { __typename?: 'AuthToken', token: string, expiresAt: string } } } };

export type RenewTokenMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RenewTokenMutation = { __typename?: 'Mutation', renewToken: { __typename?: 'AuthTokens', tokens: { __typename?: 'AuthTokenPair', accessToken: { __typename?: 'AuthToken', expiresAt: string, token: string }, refreshToken: { __typename?: 'AuthToken', token: string, expiresAt: string } } } };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  workspaceInviteHash?: InputMaybe<Scalars['String']>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'LoginToken', loginToken: { __typename?: 'AuthToken', expiresAt: string, token: string } } };

export type VerifyMutationVariables = Exact<{
  loginToken: Scalars['String'];
}>;


export type VerifyMutation = { __typename?: 'Mutation', verify: { __typename?: 'Verify', user: { __typename?: 'User', id: string, email: string, displayName: string, firstName?: string | null, lastName?: string | null, canImpersonate: boolean, supportUserHash?: string | null, avatarUrl?: string | null, workspaceMember?: { __typename?: 'WorkspaceMember', id: string, allowImpersonation: boolean, workspace: { __typename?: 'Workspace', id: string, domainName?: string | null, displayName?: string | null, logo?: string | null, inviteHash?: string | null } } | null, settings: { __typename?: 'UserSettings', id: string, colorScheme: ColorScheme, locale: string } }, tokens: { __typename?: 'AuthTokenPair', accessToken: { __typename?: 'AuthToken', token: string, expiresAt: string }, refreshToken: { __typename?: 'AuthToken', token: string, expiresAt: string } } } };

export type CheckUserExistsQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CheckUserExistsQuery = { __typename?: 'Query', checkUserExists: { __typename?: 'UserExists', exists: boolean } };

export type GetClientConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClientConfigQuery = { __typename?: 'Query', clientConfig: { __typename?: 'ClientConfig', signInPrefilled: boolean, debugMode: boolean, authProviders: { __typename?: 'AuthProviders', google: boolean, password: boolean }, telemetry: { __typename?: 'Telemetry', enabled: boolean, anonymizationEnabled: boolean }, support: { __typename?: 'Support', supportDriver: string, supportFrontChatId?: string | null } } };

export type CompanyFieldsFragmentFragment = { __typename?: 'Company', address: string, createdAt: string, domainName: string, employees?: number | null, linkedinUrl?: string | null, xUrl?: string | null, annualRecurringRevenue?: number | null, idealCustomerProfile: boolean, id: string, name: string, accountOwner?: { __typename?: 'User', id: string, email: string, displayName: string, avatarUrl?: string | null } | null };

export type DeleteManyCompaniesMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type DeleteManyCompaniesMutation = { __typename?: 'Mutation', deleteManyCompany: { __typename?: 'AffectedRows', count: number } };

export type InsertManyCompanyMutationVariables = Exact<{
  data: Array<CompanyCreateManyInput> | CompanyCreateManyInput;
}>;


export type InsertManyCompanyMutation = { __typename?: 'Mutation', createManyCompany: { __typename?: 'AffectedRows', count: number } };

export type InsertOneCompanyMutationVariables = Exact<{
  data: CompanyCreateInput;
}>;


export type InsertOneCompanyMutation = { __typename?: 'Mutation', createOneCompany: { __typename?: 'Company', address: string, createdAt: string, domainName: string, employees?: number | null, linkedinUrl?: string | null, xUrl?: string | null, annualRecurringRevenue?: number | null, idealCustomerProfile: boolean, id: string, name: string, accountOwner?: { __typename?: 'User', id: string, email: string, displayName: string, avatarUrl?: string | null } | null } };

export type UpdateOneCompanyMutationVariables = Exact<{
  where: CompanyWhereUniqueInput;
  data: CompanyUpdateInput;
}>;


export type UpdateOneCompanyMutation = { __typename?: 'Mutation', updateOneCompany?: { __typename?: 'Company', address: string, createdAt: string, domainName: string, employees?: number | null, linkedinUrl?: string | null, xUrl?: string | null, annualRecurringRevenue?: number | null, idealCustomerProfile: boolean, id: string, name: string, accountOwner?: { __typename?: 'User', id: string, email: string, displayName: string, avatarUrl?: string | null } | null } | null };

export type GetCompaniesQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput> | CompanyOrderByWithRelationInput>;
  where?: InputMaybe<CompanyWhereInput>;
}>;


export type GetCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, domainName: string, name: string, createdAt: string, address: string, linkedinUrl?: string | null, xUrl?: string | null, annualRecurringRevenue?: number | null, idealCustomerProfile: boolean, employees?: number | null, _activityCount: number, accountOwner?: { __typename?: 'User', id: string, email: string, displayName: string, firstName?: string | null, lastName?: string | null, avatarUrl?: string | null } | null }> };

export type GetCompanyQueryVariables = Exact<{
  where: CompanyWhereUniqueInput;
}>;


export type GetCompanyQuery = { __typename?: 'Query', findUniqueCompany: { __typename?: 'Company', id: string, domainName: string, name: string, createdAt: string, address: string, linkedinUrl?: string | null, xUrl?: string | null, annualRecurringRevenue?: number | null, idealCustomerProfile: boolean, employees?: number | null, _activityCount: number, accountOwner?: { __typename?: 'User', id: string, email: string, displayName: string, avatarUrl?: string | null } | null, Favorite?: Array<{ __typename?: 'Favorite', id: string, person?: { __typename?: 'Person', id: string } | null, company?: { __typename?: 'Company', id: string } | null }> | null } };

export type DeleteFavoriteMutationVariables = Exact<{
  where: FavoriteWhereInput;
}>;


export type DeleteFavoriteMutation = { __typename?: 'Mutation', deleteFavorite: { __typename?: 'Favorite', id: string } };

export type InsertCompanyFavoriteMutationVariables = Exact<{
  data: FavoriteMutationForCompanyArgs;
}>;


export type InsertCompanyFavoriteMutation = { __typename?: 'Mutation', createFavoriteForCompany: { __typename?: 'Favorite', id: string, company?: { __typename?: 'Company', id: string, name: string, domainName: string } | null } };

export type InsertPersonFavoriteMutationVariables = Exact<{
  data: FavoriteMutationForPersonArgs;
}>;


export type InsertPersonFavoriteMutation = { __typename?: 'Mutation', createFavoriteForPerson: { __typename?: 'Favorite', id: string, person?: { __typename?: 'Person', id: string, firstName?: string | null, lastName?: string | null, displayName: string } | null } };

export type GetFavoritesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFavoritesQuery = { __typename?: 'Query', findFavorites: Array<{ __typename?: 'Favorite', id: string, person?: { __typename?: 'Person', id: string, firstName?: string | null, lastName?: string | null, avatarUrl?: string | null } | null, company?: { __typename?: 'Company', id: string, name: string, domainName: string, accountOwner?: { __typename?: 'User', id: string, displayName: string, avatarUrl?: string | null } | null } | null }> };

export type InsertPersonFragmentFragment = { __typename?: 'Person', id: string, firstName?: string | null, lastName?: string | null, displayName: string, createdAt: string };

export type DeleteManyPersonMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type DeleteManyPersonMutation = { __typename?: 'Mutation', deleteManyPerson: { __typename?: 'AffectedRows', count: number } };

export type InsertManyPersonMutationVariables = Exact<{
  data: Array<PersonCreateManyInput> | PersonCreateManyInput;
}>;


export type InsertManyPersonMutation = { __typename?: 'Mutation', createManyPerson: { __typename?: 'AffectedRows', count: number } };

export type InsertOnePersonMutationVariables = Exact<{
  data: PersonCreateInput;
}>;


export type InsertOnePersonMutation = { __typename?: 'Mutation', createOnePerson: { __typename?: 'Person', id: string, firstName?: string | null, lastName?: string | null, displayName: string, createdAt: string } };

export type RemovePersonPictureMutationVariables = Exact<{
  where: PersonWhereUniqueInput;
}>;


export type RemovePersonPictureMutation = { __typename?: 'Mutation', updateOnePerson?: { __typename?: 'Person', id: string, avatarUrl?: string | null } | null };

export type UpdateOnePersonMutationVariables = Exact<{
  where: PersonWhereUniqueInput;
  data: PersonUpdateInput;
}>;


export type UpdateOnePersonMutation = { __typename?: 'Mutation', updateOnePerson?: { __typename?: 'Person', id: string, city?: string | null, email?: string | null, jobTitle?: string | null, linkedinUrl?: string | null, xUrl?: string | null, firstName?: string | null, lastName?: string | null, displayName: string, phone?: string | null, createdAt: string, company?: { __typename?: 'Company', domainName: string, name: string, id: string } | null } | null };

export type UploadPersonPictureMutationVariables = Exact<{
  id: Scalars['String'];
  file: Scalars['Upload'];
}>;


export type UploadPersonPictureMutation = { __typename?: 'Mutation', uploadPersonPicture: string };

export type GetPeopleQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput> | PersonOrderByWithRelationInput>;
  where?: InputMaybe<PersonWhereInput>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetPeopleQuery = { __typename?: 'Query', people: Array<{ __typename?: 'Person', id: string, phone?: string | null, email?: string | null, city?: string | null, firstName?: string | null, lastName?: string | null, displayName: string, jobTitle?: string | null, linkedinUrl?: string | null, xUrl?: string | null, avatarUrl?: string | null, createdAt: string, _activityCount: number, company?: { __typename?: 'Company', id: string, name: string, domainName: string } | null }> };

export type GetPersonQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPersonQuery = { __typename?: 'Query', findUniquePerson: { __typename?: 'Person', id: string, firstName?: string | null, lastName?: string | null, displayName: string, email?: string | null, createdAt: string, city?: string | null, jobTitle?: string | null, linkedinUrl?: string | null, xUrl?: string | null, avatarUrl?: string | null, phone?: string | null, _activityCount: number, company?: { __typename?: 'Company', id: string, name: string, domainName: string } | null, Favorite?: Array<{ __typename?: 'Favorite', id: string, person?: { __typename?: 'Person', id: string } | null, company?: { __typename?: 'Company', id: string } | null }> | null } };

export type GetPersonCityByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPersonCityByIdQuery = { __typename?: 'Query', person: { __typename?: 'Person', id: string, city?: string | null } };

export type GetPersonCommentCountByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPersonCommentCountByIdQuery = { __typename?: 'Query', person: { __typename?: 'Person', id: string, _activityCount: number } };

export type GetPersonCompanyByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPersonCompanyByIdQuery = { __typename?: 'Query', person: { __typename?: 'Person', id: string, company?: { __typename?: 'Company', id: string, name: string, domainName: string } | null } };

export type GetPersonCreatedAtByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPersonCreatedAtByIdQuery = { __typename?: 'Query', person: { __typename?: 'Person', id: string, createdAt: string } };

export type GetPersonEmailByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPersonEmailByIdQuery = { __typename?: 'Query', person: { __typename?: 'Person', id: string, email?: string | null } };

export type GetPersonNamesAndCommentCountByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPersonNamesAndCommentCountByIdQuery = { __typename?: 'Query', person: { __typename?: 'Person', id: string, firstName?: string | null, lastName?: string | null, displayName: string, _activityCount: number } };

export type GetPersonPhoneByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPersonPhoneByIdQuery = { __typename?: 'Query', person: { __typename?: 'Person', id: string, phone?: string | null } };

export type CreateOneCompanyPipelineProgressMutationVariables = Exact<{
  uuid: Scalars['String'];
  companyId: Scalars['String'];
  pipelineId: Scalars['String'];
  pipelineStageId: Scalars['String'];
}>;


export type CreateOneCompanyPipelineProgressMutation = { __typename?: 'Mutation', createOnePipelineProgress: { __typename?: 'PipelineProgress', id: string } };

export type CreatePipelineStageMutationVariables = Exact<{
  data: PipelineStageCreateInput;
}>;


export type CreatePipelineStageMutation = { __typename?: 'Mutation', pipelineStage: { __typename?: 'PipelineStage', id: string, name: string, color: string } };

export type DeleteManyPipelineProgressMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type DeleteManyPipelineProgressMutation = { __typename?: 'Mutation', deleteManyPipelineProgress: { __typename?: 'AffectedRows', count: number } };

export type UpdateOnePipelineProgressMutationVariables = Exact<{
  data: PipelineProgressUpdateInput;
  where: PipelineProgressWhereUniqueInput;
}>;


export type UpdateOnePipelineProgressMutation = { __typename?: 'Mutation', updateOnePipelineProgress?: { __typename?: 'PipelineProgress', id: string, amount?: number | null, closeDate?: string | null, probability?: number | null, pointOfContact?: { __typename?: 'Person', id: string } | null } | null };

export type UpdateOnePipelineProgressStageMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  pipelineStageId?: InputMaybe<Scalars['String']>;
}>;


export type UpdateOnePipelineProgressStageMutation = { __typename?: 'Mutation', updateOnePipelineProgress?: { __typename?: 'PipelineProgress', id: string } | null };

export type UpdatePipelineStageMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  data: PipelineStageUpdateInput;
}>;


export type UpdatePipelineStageMutation = { __typename?: 'Mutation', updateOnePipelineStage?: { __typename?: 'PipelineStage', id: string, name: string, color: string } | null };

export type GetPipelineProgressQueryVariables = Exact<{
  where?: InputMaybe<PipelineProgressWhereInput>;
  orderBy?: InputMaybe<Array<PipelineProgressOrderByWithRelationInput> | PipelineProgressOrderByWithRelationInput>;
}>;


export type GetPipelineProgressQuery = { __typename?: 'Query', findManyPipelineProgress: Array<{ __typename?: 'PipelineProgress', id: string, pipelineStageId: string, companyId?: string | null, personId?: string | null, amount?: number | null, closeDate?: string | null, pointOfContactId?: string | null, probability?: number | null, pointOfContact?: { __typename?: 'Person', id: string, firstName?: string | null, lastName?: string | null, displayName: string, avatarUrl?: string | null } | null }> };

export type GetPipelinesQueryVariables = Exact<{
  where?: InputMaybe<PipelineWhereInput>;
}>;


export type GetPipelinesQuery = { __typename?: 'Query', findManyPipeline: Array<{ __typename?: 'Pipeline', id: string, name: string, pipelineProgressableType: PipelineProgressableType, pipelineStages?: Array<{ __typename?: 'PipelineStage', id: string, name: string, color: string, index?: number | null }> | null }> };

export type SearchActivityQueryVariables = Exact<{
  where?: InputMaybe<ActivityWhereInput>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ActivityOrderByWithRelationInput> | ActivityOrderByWithRelationInput>;
}>;


export type SearchActivityQuery = { __typename?: 'Query', searchResults: Array<{ __typename?: 'Activity', id: string, title?: string | null, body?: string | null }> };

export type SearchCompanyQueryVariables = Exact<{
  where?: InputMaybe<CompanyWhereInput>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput> | CompanyOrderByWithRelationInput>;
}>;


export type SearchCompanyQuery = { __typename?: 'Query', searchResults: Array<{ __typename?: 'Company', address: string, createdAt: string, domainName: string, employees?: number | null, linkedinUrl?: string | null, xUrl?: string | null, annualRecurringRevenue?: number | null, idealCustomerProfile: boolean, id: string, name: string, accountOwner?: { __typename?: 'User', id: string, email: string, displayName: string, avatarUrl?: string | null } | null }> };

export type SearchPeopleQueryVariables = Exact<{
  where?: InputMaybe<PersonWhereInput>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput> | PersonOrderByWithRelationInput>;
}>;


export type SearchPeopleQuery = { __typename?: 'Query', searchResults: Array<{ __typename?: 'Person', id: string, phone?: string | null, email?: string | null, city?: string | null, firstName?: string | null, lastName?: string | null, displayName: string, avatarUrl?: string | null, createdAt: string }> };

export type SearchUserQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
}>;


export type SearchUserQuery = { __typename?: 'Query', searchResults: Array<{ __typename?: 'User', id: string, email: string, displayName: string, firstName?: string | null, lastName?: string | null, avatarUrl?: string | null }> };

export type DeleteUserAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserAccountMutation = { __typename?: 'Mutation', deleteUserAccount: { __typename?: 'User', id: string } };

export type RemoveProfilePictureMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type RemoveProfilePictureMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, avatarUrl?: string | null } };

export type UpdateAllowImpersonationMutationVariables = Exact<{
  allowImpersonation: Scalars['Boolean'];
}>;


export type UpdateAllowImpersonationMutation = { __typename?: 'Mutation', allowImpersonation: { __typename?: 'WorkspaceMember', id: string, allowImpersonation: boolean } };

export type UploadProfilePictureMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadProfilePictureMutation = { __typename?: 'Mutation', uploadProfilePicture: string };

export type UpdateUserMutationVariables = Exact<{
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, email: string, displayName: string, firstName?: string | null, lastName?: string | null, avatarUrl?: string | null, workspaceMember?: { __typename?: 'WorkspaceMember', id: string, workspace: { __typename?: 'Workspace', id: string, domainName?: string | null, displayName?: string | null, logo?: string | null, inviteHash?: string | null } } | null, settings: { __typename?: 'UserSettings', id: string, locale: string, colorScheme: ColorScheme } } };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, email: string, displayName: string, firstName?: string | null, lastName?: string | null, avatarUrl?: string | null, canImpersonate: boolean, supportUserHash?: string | null, workspaceMember?: { __typename?: 'WorkspaceMember', id: string, allowImpersonation: boolean, workspace: { __typename?: 'Workspace', id: string, domainName?: string | null, displayName?: string | null, logo?: string | null, inviteHash?: string | null } } | null, settings: { __typename?: 'UserSettings', id: string, locale: string, colorScheme: ColorScheme } } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', findManyUser: Array<{ __typename?: 'User', id: string, email: string, displayName: string, firstName?: string | null, lastName?: string | null }> };

export type CreateViewMutationVariables = Exact<{
  data: ViewCreateInput;
}>;


export type CreateViewMutation = { __typename?: 'Mutation', view: { __typename?: 'View', id: string, name: string } };

export type CreateViewFieldsMutationVariables = Exact<{
  data: Array<ViewFieldCreateManyInput> | ViewFieldCreateManyInput;
}>;


export type CreateViewFieldsMutation = { __typename?: 'Mutation', createManyViewField: { __typename?: 'AffectedRows', count: number } };

export type CreateViewFiltersMutationVariables = Exact<{
  data: Array<ViewFilterCreateManyInput> | ViewFilterCreateManyInput;
}>;


export type CreateViewFiltersMutation = { __typename?: 'Mutation', createManyViewFilter: { __typename?: 'AffectedRows', count: number } };

export type CreateViewSortsMutationVariables = Exact<{
  data: Array<ViewSortCreateManyInput> | ViewSortCreateManyInput;
}>;


export type CreateViewSortsMutation = { __typename?: 'Mutation', createManyViewSort: { __typename?: 'AffectedRows', count: number } };

export type DeleteViewMutationVariables = Exact<{
  where: ViewWhereUniqueInput;
}>;


export type DeleteViewMutation = { __typename?: 'Mutation', view: { __typename?: 'View', id: string, name: string } };

export type DeleteViewFiltersMutationVariables = Exact<{
  where: ViewFilterWhereInput;
}>;


export type DeleteViewFiltersMutation = { __typename?: 'Mutation', deleteManyViewFilter: { __typename?: 'AffectedRows', count: number } };

export type DeleteViewSortsMutationVariables = Exact<{
  where: ViewSortWhereInput;
}>;


export type DeleteViewSortsMutation = { __typename?: 'Mutation', deleteManyViewSort: { __typename?: 'AffectedRows', count: number } };

export type UpdateViewMutationVariables = Exact<{
  data: ViewUpdateInput;
  where: ViewWhereUniqueInput;
}>;


export type UpdateViewMutation = { __typename?: 'Mutation', view: { __typename?: 'View', id: string, name: string } };

export type UpdateViewFieldMutationVariables = Exact<{
  data: ViewFieldUpdateInput;
  where: ViewFieldWhereUniqueInput;
}>;


export type UpdateViewFieldMutation = { __typename?: 'Mutation', updateOneViewField: { __typename?: 'ViewField', id: string, fieldName: string, isVisible: boolean, sizeInPx: number, index: number } };

export type UpdateViewFilterMutationVariables = Exact<{
  data: ViewFilterUpdateInput;
  where: ViewFilterWhereUniqueInput;
}>;


export type UpdateViewFilterMutation = { __typename?: 'Mutation', viewFilter: { __typename?: 'ViewFilter', displayValue: string, key: string, name: string, operand: ViewFilterOperand, value: string } };

export type UpdateViewSortMutationVariables = Exact<{
  data: ViewSortUpdateInput;
  where: ViewSortWhereUniqueInput;
}>;


export type UpdateViewSortMutation = { __typename?: 'Mutation', viewSort: { __typename?: 'ViewSort', direction: ViewSortDirection, key: string, name: string } };

export type GetViewFieldsQueryVariables = Exact<{
  where?: InputMaybe<ViewFieldWhereInput>;
  orderBy?: InputMaybe<Array<ViewFieldOrderByWithRelationInput> | ViewFieldOrderByWithRelationInput>;
}>;


export type GetViewFieldsQuery = { __typename?: 'Query', viewFields: Array<{ __typename?: 'ViewField', id: string, fieldName: string, isVisible: boolean, sizeInPx: number, index: number }> };

export type GetViewFiltersQueryVariables = Exact<{
  where?: InputMaybe<ViewFilterWhereInput>;
}>;


export type GetViewFiltersQuery = { __typename?: 'Query', viewFilters: Array<{ __typename?: 'ViewFilter', displayValue: string, key: string, name: string, operand: ViewFilterOperand, value: string }> };

export type GetViewSortsQueryVariables = Exact<{
  where?: InputMaybe<ViewSortWhereInput>;
}>;


export type GetViewSortsQuery = { __typename?: 'Query', viewSorts: Array<{ __typename?: 'ViewSort', direction: ViewSortDirection, key: string, name: string }> };

export type GetViewsQueryVariables = Exact<{
  where?: InputMaybe<ViewWhereInput>;
}>;


export type GetViewsQuery = { __typename?: 'Query', views: Array<{ __typename?: 'View', id: string, name: string }> };

export type DeleteCurrentWorkspaceMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteCurrentWorkspaceMutation = { __typename?: 'Mutation', deleteCurrentWorkspace: { __typename?: 'Workspace', id: string } };

export type RemoveWorkspaceLogoMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveWorkspaceLogoMutation = { __typename?: 'Mutation', updateWorkspace: { __typename?: 'Workspace', id: string } };

export type RemoveWorkspaceMemberMutationVariables = Exact<{
  where: WorkspaceMemberWhereUniqueInput;
}>;


export type RemoveWorkspaceMemberMutation = { __typename?: 'Mutation', deleteWorkspaceMember: { __typename?: 'WorkspaceMember', id: string } };

export type UpdateWorkspaceMutationVariables = Exact<{
  data: WorkspaceUpdateInput;
}>;


export type UpdateWorkspaceMutation = { __typename?: 'Mutation', updateWorkspace: { __typename?: 'Workspace', id: string, domainName?: string | null, displayName?: string | null, logo?: string | null } };

export type UploadWorkspaceLogoMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadWorkspaceLogoMutation = { __typename?: 'Mutation', uploadWorkspaceLogo: string };

export type GetWorkspaceFromInviteHashQueryVariables = Exact<{
  inviteHash: Scalars['String'];
}>;


export type GetWorkspaceFromInviteHashQuery = { __typename?: 'Query', findWorkspaceFromInviteHash: { __typename?: 'Workspace', id: string, displayName?: string | null, logo?: string | null } };

export type GetWorkspaceMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkspaceMembersQuery = { __typename?: 'Query', workspaceMembers: Array<{ __typename?: 'WorkspaceMember', id: string, user: { __typename?: 'User', id: string, email: string, avatarUrl?: string | null, firstName?: string | null, lastName?: string | null, displayName: string } }> };

export const ActivityQueryFragmentFragmentDoc = gql`
    fragment ActivityQueryFragment on Activity {
  id
  createdAt
  title
  body
  type
  completedAt
  dueAt
  assignee {
    id
    firstName
    lastName
    displayName
    avatarUrl
  }
  author {
    id
    firstName
    lastName
    displayName
  }
  comments {
    id
    body
    createdAt
    updatedAt
    author {
      id
      displayName
      firstName
      lastName
      avatarUrl
    }
  }
  activityTargets {
    id
    companyId
    personId
    company {
      id
      name
      domainName
    }
    person {
      id
      displayName
      avatarUrl
    }
  }
}
    `;
export const ActivityUpdatePartsFragmentDoc = gql`
    fragment ActivityUpdateParts on Activity {
  id
  body
  title
  type
  completedAt
  dueAt
  assignee {
    id
    firstName
    lastName
    displayName
  }
}
    `;
export const UserQueryFragmentFragmentDoc = gql`
    fragment UserQueryFragment on User {
  id
  email
  displayName
  firstName
  lastName
  canImpersonate
  supportUserHash
  avatarUrl
  workspaceMember {
    id
    allowImpersonation
    workspace {
      id
      domainName
      displayName
      logo
      inviteHash
    }
  }
  settings {
    id
    colorScheme
    locale
  }
}
    `;
export const CompanyFieldsFragmentFragmentDoc = gql`
    fragment CompanyFieldsFragment on Company {
  accountOwner {
    id
    email
    displayName
    avatarUrl
  }
  address
  createdAt
  domainName
  employees
  linkedinUrl
  xUrl
  annualRecurringRevenue
  idealCustomerProfile
  id
  name
}
    `;
export const InsertPersonFragmentFragmentDoc = gql`
    fragment InsertPersonFragment on Person {
  id
  firstName
  lastName
  displayName
  createdAt
}
    `;
export const AddActivityTargetsOnActivityDocument = gql`
    mutation AddActivityTargetsOnActivity($activityId: String!, $activityTargetInputs: [ActivityTargetCreateManyActivityInput!]!) {
  updateOneActivity(
    where: {id: $activityId}
    data: {activityTargets: {createMany: {data: $activityTargetInputs}}}
  ) {
    id
    createdAt
    updatedAt
    activityTargets {
      id
      createdAt
      updatedAt
      companyId
      personId
    }
  }
}
    `;
export type AddActivityTargetsOnActivityMutationFn = Apollo.MutationFunction<AddActivityTargetsOnActivityMutation, AddActivityTargetsOnActivityMutationVariables>;

/**
 * __useAddActivityTargetsOnActivityMutation__
 *
 * To run a mutation, you first call `useAddActivityTargetsOnActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddActivityTargetsOnActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addActivityTargetsOnActivityMutation, { data, loading, error }] = useAddActivityTargetsOnActivityMutation({
 *   variables: {
 *      activityId: // value for 'activityId'
 *      activityTargetInputs: // value for 'activityTargetInputs'
 *   },
 * });
 */
export function useAddActivityTargetsOnActivityMutation(baseOptions?: Apollo.MutationHookOptions<AddActivityTargetsOnActivityMutation, AddActivityTargetsOnActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddActivityTargetsOnActivityMutation, AddActivityTargetsOnActivityMutationVariables>(AddActivityTargetsOnActivityDocument, options);
      }
export type AddActivityTargetsOnActivityMutationHookResult = ReturnType<typeof useAddActivityTargetsOnActivityMutation>;
export type AddActivityTargetsOnActivityMutationResult = Apollo.MutationResult<AddActivityTargetsOnActivityMutation>;
export type AddActivityTargetsOnActivityMutationOptions = Apollo.BaseMutationOptions<AddActivityTargetsOnActivityMutation, AddActivityTargetsOnActivityMutationVariables>;
export const CreateActivityDocument = gql`
    mutation CreateActivity($data: ActivityCreateInput!) {
  createOneActivity(data: $data) {
    id
    createdAt
    updatedAt
    authorId
    type
    activityTargets {
      id
      createdAt
      updatedAt
      activityId
      companyId
      personId
    }
    comments {
      id
      createdAt
      updatedAt
      body
      author {
        id
      }
    }
  }
}
    `;
export type CreateActivityMutationFn = Apollo.MutationFunction<CreateActivityMutation, CreateActivityMutationVariables>;

/**
 * __useCreateActivityMutation__
 *
 * To run a mutation, you first call `useCreateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActivityMutation, { data, loading, error }] = useCreateActivityMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateActivityMutation(baseOptions?: Apollo.MutationHookOptions<CreateActivityMutation, CreateActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateActivityMutation, CreateActivityMutationVariables>(CreateActivityDocument, options);
      }
export type CreateActivityMutationHookResult = ReturnType<typeof useCreateActivityMutation>;
export type CreateActivityMutationResult = Apollo.MutationResult<CreateActivityMutation>;
export type CreateActivityMutationOptions = Apollo.BaseMutationOptions<CreateActivityMutation, CreateActivityMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($commentId: String!, $commentText: String!, $authorId: String!, $activityId: String!, $createdAt: DateTime!) {
  createOneComment(
    data: {id: $commentId, createdAt: $createdAt, body: $commentText, author: {connect: {id: $authorId}}, activity: {connect: {id: $activityId}}}
  ) {
    id
    createdAt
    body
    author {
      id
      displayName
      firstName
      lastName
      avatarUrl
    }
    activityId
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      commentText: // value for 'commentText'
 *      authorId: // value for 'authorId'
 *      activityId: // value for 'activityId'
 *      createdAt: // value for 'createdAt'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const DeleteActivityDocument = gql`
    mutation DeleteActivity($activityId: String!) {
  deleteManyActivities(where: {id: {equals: $activityId}}) {
    count
  }
}
    `;
export type DeleteActivityMutationFn = Apollo.MutationFunction<DeleteActivityMutation, DeleteActivityMutationVariables>;

/**
 * __useDeleteActivityMutation__
 *
 * To run a mutation, you first call `useDeleteActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteActivityMutation, { data, loading, error }] = useDeleteActivityMutation({
 *   variables: {
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useDeleteActivityMutation(baseOptions?: Apollo.MutationHookOptions<DeleteActivityMutation, DeleteActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteActivityMutation, DeleteActivityMutationVariables>(DeleteActivityDocument, options);
      }
export type DeleteActivityMutationHookResult = ReturnType<typeof useDeleteActivityMutation>;
export type DeleteActivityMutationResult = Apollo.MutationResult<DeleteActivityMutation>;
export type DeleteActivityMutationOptions = Apollo.BaseMutationOptions<DeleteActivityMutation, DeleteActivityMutationVariables>;
export const RemoveActivityTargetsOnActivityDocument = gql`
    mutation RemoveActivityTargetsOnActivity($activityId: String!, $activityTargetIds: [String!]!) {
  updateOneActivity(
    where: {id: $activityId}
    data: {activityTargets: {deleteMany: {id: {in: $activityTargetIds}}}}
  ) {
    id
    createdAt
    updatedAt
    activityTargets {
      id
      createdAt
      updatedAt
      companyId
      personId
    }
  }
}
    `;
export type RemoveActivityTargetsOnActivityMutationFn = Apollo.MutationFunction<RemoveActivityTargetsOnActivityMutation, RemoveActivityTargetsOnActivityMutationVariables>;

/**
 * __useRemoveActivityTargetsOnActivityMutation__
 *
 * To run a mutation, you first call `useRemoveActivityTargetsOnActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveActivityTargetsOnActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeActivityTargetsOnActivityMutation, { data, loading, error }] = useRemoveActivityTargetsOnActivityMutation({
 *   variables: {
 *      activityId: // value for 'activityId'
 *      activityTargetIds: // value for 'activityTargetIds'
 *   },
 * });
 */
export function useRemoveActivityTargetsOnActivityMutation(baseOptions?: Apollo.MutationHookOptions<RemoveActivityTargetsOnActivityMutation, RemoveActivityTargetsOnActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveActivityTargetsOnActivityMutation, RemoveActivityTargetsOnActivityMutationVariables>(RemoveActivityTargetsOnActivityDocument, options);
      }
export type RemoveActivityTargetsOnActivityMutationHookResult = ReturnType<typeof useRemoveActivityTargetsOnActivityMutation>;
export type RemoveActivityTargetsOnActivityMutationResult = Apollo.MutationResult<RemoveActivityTargetsOnActivityMutation>;
export type RemoveActivityTargetsOnActivityMutationOptions = Apollo.BaseMutationOptions<RemoveActivityTargetsOnActivityMutation, RemoveActivityTargetsOnActivityMutationVariables>;
export const UpdateActivityDocument = gql`
    mutation UpdateActivity($where: ActivityWhereUniqueInput!, $data: ActivityUpdateInput!) {
  updateOneActivity(where: $where, data: $data) {
    ...ActivityUpdateParts
  }
}
    ${ActivityUpdatePartsFragmentDoc}`;
export type UpdateActivityMutationFn = Apollo.MutationFunction<UpdateActivityMutation, UpdateActivityMutationVariables>;

/**
 * __useUpdateActivityMutation__
 *
 * To run a mutation, you first call `useUpdateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateActivityMutation, { data, loading, error }] = useUpdateActivityMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateActivityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateActivityMutation, UpdateActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateActivityMutation, UpdateActivityMutationVariables>(UpdateActivityDocument, options);
      }
export type UpdateActivityMutationHookResult = ReturnType<typeof useUpdateActivityMutation>;
export type UpdateActivityMutationResult = Apollo.MutationResult<UpdateActivityMutation>;
export type UpdateActivityMutationOptions = Apollo.BaseMutationOptions<UpdateActivityMutation, UpdateActivityMutationVariables>;
export const UploadAttachmentDocument = gql`
    mutation UploadAttachment($file: Upload!, $activityId: String!) {
  uploadAttachment(file: $file, activityId: $activityId)
}
    `;
export type UploadAttachmentMutationFn = Apollo.MutationFunction<UploadAttachmentMutation, UploadAttachmentMutationVariables>;

/**
 * __useUploadAttachmentMutation__
 *
 * To run a mutation, you first call `useUploadAttachmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadAttachmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadAttachmentMutation, { data, loading, error }] = useUploadAttachmentMutation({
 *   variables: {
 *      file: // value for 'file'
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useUploadAttachmentMutation(baseOptions?: Apollo.MutationHookOptions<UploadAttachmentMutation, UploadAttachmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadAttachmentMutation, UploadAttachmentMutationVariables>(UploadAttachmentDocument, options);
      }
export type UploadAttachmentMutationHookResult = ReturnType<typeof useUploadAttachmentMutation>;
export type UploadAttachmentMutationResult = Apollo.MutationResult<UploadAttachmentMutation>;
export type UploadAttachmentMutationOptions = Apollo.BaseMutationOptions<UploadAttachmentMutation, UploadAttachmentMutationVariables>;
export const GetActivitiesDocument = gql`
    query GetActivities($where: ActivityWhereInput!, $orderBy: [ActivityOrderByWithRelationInput!]) {
  findManyActivities(orderBy: $orderBy, where: $where) {
    ...ActivityQueryFragment
  }
}
    ${ActivityQueryFragmentFragmentDoc}`;

/**
 * __useGetActivitiesQuery__
 *
 * To run a query within a React component, call `useGetActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivitiesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetActivitiesQuery(baseOptions: Apollo.QueryHookOptions<GetActivitiesQuery, GetActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivitiesQuery, GetActivitiesQueryVariables>(GetActivitiesDocument, options);
      }
export function useGetActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivitiesQuery, GetActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivitiesQuery, GetActivitiesQueryVariables>(GetActivitiesDocument, options);
        }
export type GetActivitiesQueryHookResult = ReturnType<typeof useGetActivitiesQuery>;
export type GetActivitiesLazyQueryHookResult = ReturnType<typeof useGetActivitiesLazyQuery>;
export type GetActivitiesQueryResult = Apollo.QueryResult<GetActivitiesQuery, GetActivitiesQueryVariables>;
export const GetActivitiesByTargetsDocument = gql`
    query GetActivitiesByTargets($activityTargetIds: [String!]!, $orderBy: [ActivityOrderByWithRelationInput!]) {
  findManyActivities(
    orderBy: $orderBy
    where: {activityTargets: {some: {OR: [{personId: {in: $activityTargetIds}}, {companyId: {in: $activityTargetIds}}]}}}
  ) {
    ...ActivityQueryFragment
  }
}
    ${ActivityQueryFragmentFragmentDoc}`;

/**
 * __useGetActivitiesByTargetsQuery__
 *
 * To run a query within a React component, call `useGetActivitiesByTargetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivitiesByTargetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivitiesByTargetsQuery({
 *   variables: {
 *      activityTargetIds: // value for 'activityTargetIds'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetActivitiesByTargetsQuery(baseOptions: Apollo.QueryHookOptions<GetActivitiesByTargetsQuery, GetActivitiesByTargetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivitiesByTargetsQuery, GetActivitiesByTargetsQueryVariables>(GetActivitiesByTargetsDocument, options);
      }
export function useGetActivitiesByTargetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivitiesByTargetsQuery, GetActivitiesByTargetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivitiesByTargetsQuery, GetActivitiesByTargetsQueryVariables>(GetActivitiesByTargetsDocument, options);
        }
export type GetActivitiesByTargetsQueryHookResult = ReturnType<typeof useGetActivitiesByTargetsQuery>;
export type GetActivitiesByTargetsLazyQueryHookResult = ReturnType<typeof useGetActivitiesByTargetsLazyQuery>;
export type GetActivitiesByTargetsQueryResult = Apollo.QueryResult<GetActivitiesByTargetsQuery, GetActivitiesByTargetsQueryVariables>;
export const GetActivityDocument = gql`
    query GetActivity($activityId: String!) {
  findManyActivities(where: {id: {equals: $activityId}}) {
    ...ActivityQueryFragment
  }
}
    ${ActivityQueryFragmentFragmentDoc}`;

/**
 * __useGetActivityQuery__
 *
 * To run a query within a React component, call `useGetActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivityQuery({
 *   variables: {
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useGetActivityQuery(baseOptions: Apollo.QueryHookOptions<GetActivityQuery, GetActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivityQuery, GetActivityQueryVariables>(GetActivityDocument, options);
      }
export function useGetActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivityQuery, GetActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivityQuery, GetActivityQueryVariables>(GetActivityDocument, options);
        }
export type GetActivityQueryHookResult = ReturnType<typeof useGetActivityQuery>;
export type GetActivityLazyQueryHookResult = ReturnType<typeof useGetActivityLazyQuery>;
export type GetActivityQueryResult = Apollo.QueryResult<GetActivityQuery, GetActivityQueryVariables>;
export const CreateEventDocument = gql`
    mutation CreateEvent($type: String!, $data: JSON!) {
  createEvent(type: $type, data: $data) {
    success
  }
}
    `;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      type: // value for 'type'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const ChallengeDocument = gql`
    mutation Challenge($email: String!, $password: String!) {
  challenge(email: $email, password: $password) {
    loginToken {
      expiresAt
      token
    }
  }
}
    `;
export type ChallengeMutationFn = Apollo.MutationFunction<ChallengeMutation, ChallengeMutationVariables>;

/**
 * __useChallengeMutation__
 *
 * To run a mutation, you first call `useChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [challengeMutation, { data, loading, error }] = useChallengeMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChallengeMutation(baseOptions?: Apollo.MutationHookOptions<ChallengeMutation, ChallengeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChallengeMutation, ChallengeMutationVariables>(ChallengeDocument, options);
      }
export type ChallengeMutationHookResult = ReturnType<typeof useChallengeMutation>;
export type ChallengeMutationResult = Apollo.MutationResult<ChallengeMutation>;
export type ChallengeMutationOptions = Apollo.BaseMutationOptions<ChallengeMutation, ChallengeMutationVariables>;
export const ImpersonateDocument = gql`
    mutation Impersonate($userId: String!) {
  impersonate(userId: $userId) {
    user {
      ...UserQueryFragment
    }
    tokens {
      accessToken {
        token
        expiresAt
      }
      refreshToken {
        token
        expiresAt
      }
    }
  }
}
    ${UserQueryFragmentFragmentDoc}`;
export type ImpersonateMutationFn = Apollo.MutationFunction<ImpersonateMutation, ImpersonateMutationVariables>;

/**
 * __useImpersonateMutation__
 *
 * To run a mutation, you first call `useImpersonateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImpersonateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [impersonateMutation, { data, loading, error }] = useImpersonateMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useImpersonateMutation(baseOptions?: Apollo.MutationHookOptions<ImpersonateMutation, ImpersonateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImpersonateMutation, ImpersonateMutationVariables>(ImpersonateDocument, options);
      }
export type ImpersonateMutationHookResult = ReturnType<typeof useImpersonateMutation>;
export type ImpersonateMutationResult = Apollo.MutationResult<ImpersonateMutation>;
export type ImpersonateMutationOptions = Apollo.BaseMutationOptions<ImpersonateMutation, ImpersonateMutationVariables>;
export const RenewTokenDocument = gql`
    mutation RenewToken($refreshToken: String!) {
  renewToken(refreshToken: $refreshToken) {
    tokens {
      accessToken {
        expiresAt
        token
      }
      refreshToken {
        token
        expiresAt
      }
    }
  }
}
    `;
export type RenewTokenMutationFn = Apollo.MutationFunction<RenewTokenMutation, RenewTokenMutationVariables>;

/**
 * __useRenewTokenMutation__
 *
 * To run a mutation, you first call `useRenewTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRenewTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [renewTokenMutation, { data, loading, error }] = useRenewTokenMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRenewTokenMutation(baseOptions?: Apollo.MutationHookOptions<RenewTokenMutation, RenewTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RenewTokenMutation, RenewTokenMutationVariables>(RenewTokenDocument, options);
      }
export type RenewTokenMutationHookResult = ReturnType<typeof useRenewTokenMutation>;
export type RenewTokenMutationResult = Apollo.MutationResult<RenewTokenMutation>;
export type RenewTokenMutationOptions = Apollo.BaseMutationOptions<RenewTokenMutation, RenewTokenMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $password: String!, $workspaceInviteHash: String) {
  signUp(
    email: $email
    password: $password
    workspaceInviteHash: $workspaceInviteHash
  ) {
    loginToken {
      expiresAt
      token
    }
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      workspaceInviteHash: // value for 'workspaceInviteHash'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const VerifyDocument = gql`
    mutation Verify($loginToken: String!) {
  verify(loginToken: $loginToken) {
    user {
      ...UserQueryFragment
    }
    tokens {
      accessToken {
        token
        expiresAt
      }
      refreshToken {
        token
        expiresAt
      }
    }
  }
}
    ${UserQueryFragmentFragmentDoc}`;
export type VerifyMutationFn = Apollo.MutationFunction<VerifyMutation, VerifyMutationVariables>;

/**
 * __useVerifyMutation__
 *
 * To run a mutation, you first call `useVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyMutation, { data, loading, error }] = useVerifyMutation({
 *   variables: {
 *      loginToken: // value for 'loginToken'
 *   },
 * });
 */
export function useVerifyMutation(baseOptions?: Apollo.MutationHookOptions<VerifyMutation, VerifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyMutation, VerifyMutationVariables>(VerifyDocument, options);
      }
export type VerifyMutationHookResult = ReturnType<typeof useVerifyMutation>;
export type VerifyMutationResult = Apollo.MutationResult<VerifyMutation>;
export type VerifyMutationOptions = Apollo.BaseMutationOptions<VerifyMutation, VerifyMutationVariables>;
export const CheckUserExistsDocument = gql`
    query CheckUserExists($email: String!) {
  checkUserExists(email: $email) {
    exists
  }
}
    `;

/**
 * __useCheckUserExistsQuery__
 *
 * To run a query within a React component, call `useCheckUserExistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckUserExistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckUserExistsQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCheckUserExistsQuery(baseOptions: Apollo.QueryHookOptions<CheckUserExistsQuery, CheckUserExistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckUserExistsQuery, CheckUserExistsQueryVariables>(CheckUserExistsDocument, options);
      }
export function useCheckUserExistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckUserExistsQuery, CheckUserExistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckUserExistsQuery, CheckUserExistsQueryVariables>(CheckUserExistsDocument, options);
        }
export type CheckUserExistsQueryHookResult = ReturnType<typeof useCheckUserExistsQuery>;
export type CheckUserExistsLazyQueryHookResult = ReturnType<typeof useCheckUserExistsLazyQuery>;
export type CheckUserExistsQueryResult = Apollo.QueryResult<CheckUserExistsQuery, CheckUserExistsQueryVariables>;
export const GetClientConfigDocument = gql`
    query GetClientConfig {
  clientConfig {
    authProviders {
      google
      password
    }
    signInPrefilled
    debugMode
    telemetry {
      enabled
      anonymizationEnabled
    }
    support {
      supportDriver
      supportFrontChatId
    }
  }
}
    `;

/**
 * __useGetClientConfigQuery__
 *
 * To run a query within a React component, call `useGetClientConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClientConfigQuery(baseOptions?: Apollo.QueryHookOptions<GetClientConfigQuery, GetClientConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientConfigQuery, GetClientConfigQueryVariables>(GetClientConfigDocument, options);
      }
export function useGetClientConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientConfigQuery, GetClientConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientConfigQuery, GetClientConfigQueryVariables>(GetClientConfigDocument, options);
        }
export type GetClientConfigQueryHookResult = ReturnType<typeof useGetClientConfigQuery>;
export type GetClientConfigLazyQueryHookResult = ReturnType<typeof useGetClientConfigLazyQuery>;
export type GetClientConfigQueryResult = Apollo.QueryResult<GetClientConfigQuery, GetClientConfigQueryVariables>;
export const DeleteManyCompaniesDocument = gql`
    mutation DeleteManyCompanies($ids: [String!]) {
  deleteManyCompany(where: {id: {in: $ids}}) {
    count
  }
}
    `;
export type DeleteManyCompaniesMutationFn = Apollo.MutationFunction<DeleteManyCompaniesMutation, DeleteManyCompaniesMutationVariables>;

/**
 * __useDeleteManyCompaniesMutation__
 *
 * To run a mutation, you first call `useDeleteManyCompaniesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCompaniesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCompaniesMutation, { data, loading, error }] = useDeleteManyCompaniesMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteManyCompaniesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyCompaniesMutation, DeleteManyCompaniesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyCompaniesMutation, DeleteManyCompaniesMutationVariables>(DeleteManyCompaniesDocument, options);
      }
export type DeleteManyCompaniesMutationHookResult = ReturnType<typeof useDeleteManyCompaniesMutation>;
export type DeleteManyCompaniesMutationResult = Apollo.MutationResult<DeleteManyCompaniesMutation>;
export type DeleteManyCompaniesMutationOptions = Apollo.BaseMutationOptions<DeleteManyCompaniesMutation, DeleteManyCompaniesMutationVariables>;
export const InsertManyCompanyDocument = gql`
    mutation InsertManyCompany($data: [CompanyCreateManyInput!]!) {
  createManyCompany(data: $data) {
    count
  }
}
    `;
export type InsertManyCompanyMutationFn = Apollo.MutationFunction<InsertManyCompanyMutation, InsertManyCompanyMutationVariables>;

/**
 * __useInsertManyCompanyMutation__
 *
 * To run a mutation, you first call `useInsertManyCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertManyCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertManyCompanyMutation, { data, loading, error }] = useInsertManyCompanyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertManyCompanyMutation(baseOptions?: Apollo.MutationHookOptions<InsertManyCompanyMutation, InsertManyCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertManyCompanyMutation, InsertManyCompanyMutationVariables>(InsertManyCompanyDocument, options);
      }
export type InsertManyCompanyMutationHookResult = ReturnType<typeof useInsertManyCompanyMutation>;
export type InsertManyCompanyMutationResult = Apollo.MutationResult<InsertManyCompanyMutation>;
export type InsertManyCompanyMutationOptions = Apollo.BaseMutationOptions<InsertManyCompanyMutation, InsertManyCompanyMutationVariables>;
export const InsertOneCompanyDocument = gql`
    mutation InsertOneCompany($data: CompanyCreateInput!) {
  createOneCompany(data: $data) {
    ...CompanyFieldsFragment
  }
}
    ${CompanyFieldsFragmentFragmentDoc}`;
export type InsertOneCompanyMutationFn = Apollo.MutationFunction<InsertOneCompanyMutation, InsertOneCompanyMutationVariables>;

/**
 * __useInsertOneCompanyMutation__
 *
 * To run a mutation, you first call `useInsertOneCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertOneCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertOneCompanyMutation, { data, loading, error }] = useInsertOneCompanyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertOneCompanyMutation(baseOptions?: Apollo.MutationHookOptions<InsertOneCompanyMutation, InsertOneCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertOneCompanyMutation, InsertOneCompanyMutationVariables>(InsertOneCompanyDocument, options);
      }
export type InsertOneCompanyMutationHookResult = ReturnType<typeof useInsertOneCompanyMutation>;
export type InsertOneCompanyMutationResult = Apollo.MutationResult<InsertOneCompanyMutation>;
export type InsertOneCompanyMutationOptions = Apollo.BaseMutationOptions<InsertOneCompanyMutation, InsertOneCompanyMutationVariables>;
export const UpdateOneCompanyDocument = gql`
    mutation UpdateOneCompany($where: CompanyWhereUniqueInput!, $data: CompanyUpdateInput!) {
  updateOneCompany(data: $data, where: $where) {
    ...CompanyFieldsFragment
  }
}
    ${CompanyFieldsFragmentFragmentDoc}`;
export type UpdateOneCompanyMutationFn = Apollo.MutationFunction<UpdateOneCompanyMutation, UpdateOneCompanyMutationVariables>;

/**
 * __useUpdateOneCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateOneCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCompanyMutation, { data, loading, error }] = useUpdateOneCompanyMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneCompanyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneCompanyMutation, UpdateOneCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneCompanyMutation, UpdateOneCompanyMutationVariables>(UpdateOneCompanyDocument, options);
      }
export type UpdateOneCompanyMutationHookResult = ReturnType<typeof useUpdateOneCompanyMutation>;
export type UpdateOneCompanyMutationResult = Apollo.MutationResult<UpdateOneCompanyMutation>;
export type UpdateOneCompanyMutationOptions = Apollo.BaseMutationOptions<UpdateOneCompanyMutation, UpdateOneCompanyMutationVariables>;
export const GetCompaniesDocument = gql`
    query GetCompanies($orderBy: [CompanyOrderByWithRelationInput!], $where: CompanyWhereInput) {
  companies: findManyCompany(orderBy: $orderBy, where: $where) {
    id
    domainName
    name
    createdAt
    address
    linkedinUrl
    xUrl
    annualRecurringRevenue
    idealCustomerProfile
    employees
    _activityCount
    accountOwner {
      id
      email
      displayName
      firstName
      lastName
      avatarUrl
    }
  }
}
    `;

/**
 * __useGetCompaniesQuery__
 *
 * To run a query within a React component, call `useGetCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompaniesQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
      }
export function useGetCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
        }
export type GetCompaniesQueryHookResult = ReturnType<typeof useGetCompaniesQuery>;
export type GetCompaniesLazyQueryHookResult = ReturnType<typeof useGetCompaniesLazyQuery>;
export type GetCompaniesQueryResult = Apollo.QueryResult<GetCompaniesQuery, GetCompaniesQueryVariables>;
export const GetCompanyDocument = gql`
    query GetCompany($where: CompanyWhereUniqueInput!) {
  findUniqueCompany(where: $where) {
    id
    domainName
    name
    createdAt
    address
    linkedinUrl
    xUrl
    annualRecurringRevenue
    idealCustomerProfile
    employees
    _activityCount
    accountOwner {
      id
      email
      displayName
      avatarUrl
    }
    Favorite {
      id
      person {
        id
      }
      company {
        id
      }
    }
  }
}
    `;

/**
 * __useGetCompanyQuery__
 *
 * To run a query within a React component, call `useGetCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetCompanyQuery(baseOptions: Apollo.QueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
      }
export function useGetCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
        }
export type GetCompanyQueryHookResult = ReturnType<typeof useGetCompanyQuery>;
export type GetCompanyLazyQueryHookResult = ReturnType<typeof useGetCompanyLazyQuery>;
export type GetCompanyQueryResult = Apollo.QueryResult<GetCompanyQuery, GetCompanyQueryVariables>;
export const DeleteFavoriteDocument = gql`
    mutation DeleteFavorite($where: FavoriteWhereInput!) {
  deleteFavorite(where: $where) {
    id
  }
}
    `;
export type DeleteFavoriteMutationFn = Apollo.MutationFunction<DeleteFavoriteMutation, DeleteFavoriteMutationVariables>;

/**
 * __useDeleteFavoriteMutation__
 *
 * To run a mutation, you first call `useDeleteFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFavoriteMutation, { data, loading, error }] = useDeleteFavoriteMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFavoriteMutation, DeleteFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFavoriteMutation, DeleteFavoriteMutationVariables>(DeleteFavoriteDocument, options);
      }
export type DeleteFavoriteMutationHookResult = ReturnType<typeof useDeleteFavoriteMutation>;
export type DeleteFavoriteMutationResult = Apollo.MutationResult<DeleteFavoriteMutation>;
export type DeleteFavoriteMutationOptions = Apollo.BaseMutationOptions<DeleteFavoriteMutation, DeleteFavoriteMutationVariables>;
export const InsertCompanyFavoriteDocument = gql`
    mutation InsertCompanyFavorite($data: FavoriteMutationForCompanyArgs!) {
  createFavoriteForCompany(data: $data) {
    id
    company {
      id
      name
      domainName
    }
  }
}
    `;
export type InsertCompanyFavoriteMutationFn = Apollo.MutationFunction<InsertCompanyFavoriteMutation, InsertCompanyFavoriteMutationVariables>;

/**
 * __useInsertCompanyFavoriteMutation__
 *
 * To run a mutation, you first call `useInsertCompanyFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCompanyFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCompanyFavoriteMutation, { data, loading, error }] = useInsertCompanyFavoriteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertCompanyFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<InsertCompanyFavoriteMutation, InsertCompanyFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertCompanyFavoriteMutation, InsertCompanyFavoriteMutationVariables>(InsertCompanyFavoriteDocument, options);
      }
export type InsertCompanyFavoriteMutationHookResult = ReturnType<typeof useInsertCompanyFavoriteMutation>;
export type InsertCompanyFavoriteMutationResult = Apollo.MutationResult<InsertCompanyFavoriteMutation>;
export type InsertCompanyFavoriteMutationOptions = Apollo.BaseMutationOptions<InsertCompanyFavoriteMutation, InsertCompanyFavoriteMutationVariables>;
export const InsertPersonFavoriteDocument = gql`
    mutation InsertPersonFavorite($data: FavoriteMutationForPersonArgs!) {
  createFavoriteForPerson(data: $data) {
    id
    person {
      id
      firstName
      lastName
      displayName
    }
  }
}
    `;
export type InsertPersonFavoriteMutationFn = Apollo.MutationFunction<InsertPersonFavoriteMutation, InsertPersonFavoriteMutationVariables>;

/**
 * __useInsertPersonFavoriteMutation__
 *
 * To run a mutation, you first call `useInsertPersonFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPersonFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPersonFavoriteMutation, { data, loading, error }] = useInsertPersonFavoriteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertPersonFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<InsertPersonFavoriteMutation, InsertPersonFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPersonFavoriteMutation, InsertPersonFavoriteMutationVariables>(InsertPersonFavoriteDocument, options);
      }
export type InsertPersonFavoriteMutationHookResult = ReturnType<typeof useInsertPersonFavoriteMutation>;
export type InsertPersonFavoriteMutationResult = Apollo.MutationResult<InsertPersonFavoriteMutation>;
export type InsertPersonFavoriteMutationOptions = Apollo.BaseMutationOptions<InsertPersonFavoriteMutation, InsertPersonFavoriteMutationVariables>;
export const GetFavoritesDocument = gql`
    query GetFavorites {
  findFavorites {
    id
    person {
      id
      firstName
      lastName
      avatarUrl
    }
    company {
      id
      name
      domainName
      accountOwner {
        id
        displayName
        avatarUrl
      }
    }
  }
}
    `;

/**
 * __useGetFavoritesQuery__
 *
 * To run a query within a React component, call `useGetFavoritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavoritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavoritesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFavoritesQuery(baseOptions?: Apollo.QueryHookOptions<GetFavoritesQuery, GetFavoritesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFavoritesQuery, GetFavoritesQueryVariables>(GetFavoritesDocument, options);
      }
export function useGetFavoritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavoritesQuery, GetFavoritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFavoritesQuery, GetFavoritesQueryVariables>(GetFavoritesDocument, options);
        }
export type GetFavoritesQueryHookResult = ReturnType<typeof useGetFavoritesQuery>;
export type GetFavoritesLazyQueryHookResult = ReturnType<typeof useGetFavoritesLazyQuery>;
export type GetFavoritesQueryResult = Apollo.QueryResult<GetFavoritesQuery, GetFavoritesQueryVariables>;
export const DeleteManyPersonDocument = gql`
    mutation DeleteManyPerson($ids: [String!]) {
  deleteManyPerson(where: {id: {in: $ids}}) {
    count
  }
}
    `;
export type DeleteManyPersonMutationFn = Apollo.MutationFunction<DeleteManyPersonMutation, DeleteManyPersonMutationVariables>;

/**
 * __useDeleteManyPersonMutation__
 *
 * To run a mutation, you first call `useDeleteManyPersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyPersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyPersonMutation, { data, loading, error }] = useDeleteManyPersonMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteManyPersonMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyPersonMutation, DeleteManyPersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyPersonMutation, DeleteManyPersonMutationVariables>(DeleteManyPersonDocument, options);
      }
export type DeleteManyPersonMutationHookResult = ReturnType<typeof useDeleteManyPersonMutation>;
export type DeleteManyPersonMutationResult = Apollo.MutationResult<DeleteManyPersonMutation>;
export type DeleteManyPersonMutationOptions = Apollo.BaseMutationOptions<DeleteManyPersonMutation, DeleteManyPersonMutationVariables>;
export const InsertManyPersonDocument = gql`
    mutation InsertManyPerson($data: [PersonCreateManyInput!]!) {
  createManyPerson(data: $data) {
    count
  }
}
    `;
export type InsertManyPersonMutationFn = Apollo.MutationFunction<InsertManyPersonMutation, InsertManyPersonMutationVariables>;

/**
 * __useInsertManyPersonMutation__
 *
 * To run a mutation, you first call `useInsertManyPersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertManyPersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertManyPersonMutation, { data, loading, error }] = useInsertManyPersonMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertManyPersonMutation(baseOptions?: Apollo.MutationHookOptions<InsertManyPersonMutation, InsertManyPersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertManyPersonMutation, InsertManyPersonMutationVariables>(InsertManyPersonDocument, options);
      }
export type InsertManyPersonMutationHookResult = ReturnType<typeof useInsertManyPersonMutation>;
export type InsertManyPersonMutationResult = Apollo.MutationResult<InsertManyPersonMutation>;
export type InsertManyPersonMutationOptions = Apollo.BaseMutationOptions<InsertManyPersonMutation, InsertManyPersonMutationVariables>;
export const InsertOnePersonDocument = gql`
    mutation InsertOnePerson($data: PersonCreateInput!) {
  createOnePerson(data: $data) {
    ...InsertPersonFragment
  }
}
    ${InsertPersonFragmentFragmentDoc}`;
export type InsertOnePersonMutationFn = Apollo.MutationFunction<InsertOnePersonMutation, InsertOnePersonMutationVariables>;

/**
 * __useInsertOnePersonMutation__
 *
 * To run a mutation, you first call `useInsertOnePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertOnePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertOnePersonMutation, { data, loading, error }] = useInsertOnePersonMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertOnePersonMutation(baseOptions?: Apollo.MutationHookOptions<InsertOnePersonMutation, InsertOnePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertOnePersonMutation, InsertOnePersonMutationVariables>(InsertOnePersonDocument, options);
      }
export type InsertOnePersonMutationHookResult = ReturnType<typeof useInsertOnePersonMutation>;
export type InsertOnePersonMutationResult = Apollo.MutationResult<InsertOnePersonMutation>;
export type InsertOnePersonMutationOptions = Apollo.BaseMutationOptions<InsertOnePersonMutation, InsertOnePersonMutationVariables>;
export const RemovePersonPictureDocument = gql`
    mutation RemovePersonPicture($where: PersonWhereUniqueInput!) {
  updateOnePerson(data: {avatarUrl: null}, where: $where) {
    id
    avatarUrl
  }
}
    `;
export type RemovePersonPictureMutationFn = Apollo.MutationFunction<RemovePersonPictureMutation, RemovePersonPictureMutationVariables>;

/**
 * __useRemovePersonPictureMutation__
 *
 * To run a mutation, you first call `useRemovePersonPictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePersonPictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePersonPictureMutation, { data, loading, error }] = useRemovePersonPictureMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemovePersonPictureMutation(baseOptions?: Apollo.MutationHookOptions<RemovePersonPictureMutation, RemovePersonPictureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemovePersonPictureMutation, RemovePersonPictureMutationVariables>(RemovePersonPictureDocument, options);
      }
export type RemovePersonPictureMutationHookResult = ReturnType<typeof useRemovePersonPictureMutation>;
export type RemovePersonPictureMutationResult = Apollo.MutationResult<RemovePersonPictureMutation>;
export type RemovePersonPictureMutationOptions = Apollo.BaseMutationOptions<RemovePersonPictureMutation, RemovePersonPictureMutationVariables>;
export const UpdateOnePersonDocument = gql`
    mutation UpdateOnePerson($where: PersonWhereUniqueInput!, $data: PersonUpdateInput!) {
  updateOnePerson(data: $data, where: $where) {
    id
    city
    company {
      domainName
      name
      id
    }
    email
    jobTitle
    linkedinUrl
    xUrl
    firstName
    lastName
    displayName
    phone
    createdAt
  }
}
    `;
export type UpdateOnePersonMutationFn = Apollo.MutationFunction<UpdateOnePersonMutation, UpdateOnePersonMutationVariables>;

/**
 * __useUpdateOnePersonMutation__
 *
 * To run a mutation, you first call `useUpdateOnePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOnePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOnePersonMutation, { data, loading, error }] = useUpdateOnePersonMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOnePersonMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOnePersonMutation, UpdateOnePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOnePersonMutation, UpdateOnePersonMutationVariables>(UpdateOnePersonDocument, options);
      }
export type UpdateOnePersonMutationHookResult = ReturnType<typeof useUpdateOnePersonMutation>;
export type UpdateOnePersonMutationResult = Apollo.MutationResult<UpdateOnePersonMutation>;
export type UpdateOnePersonMutationOptions = Apollo.BaseMutationOptions<UpdateOnePersonMutation, UpdateOnePersonMutationVariables>;
export const UploadPersonPictureDocument = gql`
    mutation UploadPersonPicture($id: String!, $file: Upload!) {
  uploadPersonPicture(id: $id, file: $file)
}
    `;
export type UploadPersonPictureMutationFn = Apollo.MutationFunction<UploadPersonPictureMutation, UploadPersonPictureMutationVariables>;

/**
 * __useUploadPersonPictureMutation__
 *
 * To run a mutation, you first call `useUploadPersonPictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPersonPictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPersonPictureMutation, { data, loading, error }] = useUploadPersonPictureMutation({
 *   variables: {
 *      id: // value for 'id'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadPersonPictureMutation(baseOptions?: Apollo.MutationHookOptions<UploadPersonPictureMutation, UploadPersonPictureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadPersonPictureMutation, UploadPersonPictureMutationVariables>(UploadPersonPictureDocument, options);
      }
export type UploadPersonPictureMutationHookResult = ReturnType<typeof useUploadPersonPictureMutation>;
export type UploadPersonPictureMutationResult = Apollo.MutationResult<UploadPersonPictureMutation>;
export type UploadPersonPictureMutationOptions = Apollo.BaseMutationOptions<UploadPersonPictureMutation, UploadPersonPictureMutationVariables>;
export const GetPeopleDocument = gql`
    query GetPeople($orderBy: [PersonOrderByWithRelationInput!], $where: PersonWhereInput, $limit: Int) {
  people: findManyPerson(orderBy: $orderBy, where: $where, take: $limit) {
    id
    phone
    email
    city
    firstName
    lastName
    displayName
    jobTitle
    linkedinUrl
    xUrl
    avatarUrl
    createdAt
    _activityCount
    company {
      id
      name
      domainName
    }
  }
}
    `;

/**
 * __useGetPeopleQuery__
 *
 * To run a query within a React component, call `useGetPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPeopleQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetPeopleQuery(baseOptions?: Apollo.QueryHookOptions<GetPeopleQuery, GetPeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPeopleQuery, GetPeopleQueryVariables>(GetPeopleDocument, options);
      }
export function useGetPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPeopleQuery, GetPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPeopleQuery, GetPeopleQueryVariables>(GetPeopleDocument, options);
        }
export type GetPeopleQueryHookResult = ReturnType<typeof useGetPeopleQuery>;
export type GetPeopleLazyQueryHookResult = ReturnType<typeof useGetPeopleLazyQuery>;
export type GetPeopleQueryResult = Apollo.QueryResult<GetPeopleQuery, GetPeopleQueryVariables>;
export const GetPersonDocument = gql`
    query GetPerson($id: String!) {
  findUniquePerson(id: $id) {
    id
    firstName
    lastName
    displayName
    email
    createdAt
    city
    jobTitle
    linkedinUrl
    xUrl
    avatarUrl
    phone
    _activityCount
    company {
      id
      name
      domainName
    }
    Favorite {
      id
      person {
        id
      }
      company {
        id
      }
    }
  }
}
    `;

/**
 * __useGetPersonQuery__
 *
 * To run a query within a React component, call `useGetPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPersonQuery(baseOptions: Apollo.QueryHookOptions<GetPersonQuery, GetPersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonQuery, GetPersonQueryVariables>(GetPersonDocument, options);
      }
export function useGetPersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonQuery, GetPersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonQuery, GetPersonQueryVariables>(GetPersonDocument, options);
        }
export type GetPersonQueryHookResult = ReturnType<typeof useGetPersonQuery>;
export type GetPersonLazyQueryHookResult = ReturnType<typeof useGetPersonLazyQuery>;
export type GetPersonQueryResult = Apollo.QueryResult<GetPersonQuery, GetPersonQueryVariables>;
export const GetPersonCityByIdDocument = gql`
    query GetPersonCityById($id: String!) {
  person: findUniquePerson(id: $id) {
    id
    city
  }
}
    `;

/**
 * __useGetPersonCityByIdQuery__
 *
 * To run a query within a React component, call `useGetPersonCityByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonCityByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonCityByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPersonCityByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPersonCityByIdQuery, GetPersonCityByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonCityByIdQuery, GetPersonCityByIdQueryVariables>(GetPersonCityByIdDocument, options);
      }
export function useGetPersonCityByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonCityByIdQuery, GetPersonCityByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonCityByIdQuery, GetPersonCityByIdQueryVariables>(GetPersonCityByIdDocument, options);
        }
export type GetPersonCityByIdQueryHookResult = ReturnType<typeof useGetPersonCityByIdQuery>;
export type GetPersonCityByIdLazyQueryHookResult = ReturnType<typeof useGetPersonCityByIdLazyQuery>;
export type GetPersonCityByIdQueryResult = Apollo.QueryResult<GetPersonCityByIdQuery, GetPersonCityByIdQueryVariables>;
export const GetPersonCommentCountByIdDocument = gql`
    query GetPersonCommentCountById($id: String!) {
  person: findUniquePerson(id: $id) {
    id
    _activityCount
  }
}
    `;

/**
 * __useGetPersonCommentCountByIdQuery__
 *
 * To run a query within a React component, call `useGetPersonCommentCountByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonCommentCountByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonCommentCountByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPersonCommentCountByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPersonCommentCountByIdQuery, GetPersonCommentCountByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonCommentCountByIdQuery, GetPersonCommentCountByIdQueryVariables>(GetPersonCommentCountByIdDocument, options);
      }
export function useGetPersonCommentCountByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonCommentCountByIdQuery, GetPersonCommentCountByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonCommentCountByIdQuery, GetPersonCommentCountByIdQueryVariables>(GetPersonCommentCountByIdDocument, options);
        }
export type GetPersonCommentCountByIdQueryHookResult = ReturnType<typeof useGetPersonCommentCountByIdQuery>;
export type GetPersonCommentCountByIdLazyQueryHookResult = ReturnType<typeof useGetPersonCommentCountByIdLazyQuery>;
export type GetPersonCommentCountByIdQueryResult = Apollo.QueryResult<GetPersonCommentCountByIdQuery, GetPersonCommentCountByIdQueryVariables>;
export const GetPersonCompanyByIdDocument = gql`
    query GetPersonCompanyById($id: String!) {
  person: findUniquePerson(id: $id) {
    id
    company {
      id
      name
      domainName
    }
  }
}
    `;

/**
 * __useGetPersonCompanyByIdQuery__
 *
 * To run a query within a React component, call `useGetPersonCompanyByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonCompanyByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonCompanyByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPersonCompanyByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPersonCompanyByIdQuery, GetPersonCompanyByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonCompanyByIdQuery, GetPersonCompanyByIdQueryVariables>(GetPersonCompanyByIdDocument, options);
      }
export function useGetPersonCompanyByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonCompanyByIdQuery, GetPersonCompanyByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonCompanyByIdQuery, GetPersonCompanyByIdQueryVariables>(GetPersonCompanyByIdDocument, options);
        }
export type GetPersonCompanyByIdQueryHookResult = ReturnType<typeof useGetPersonCompanyByIdQuery>;
export type GetPersonCompanyByIdLazyQueryHookResult = ReturnType<typeof useGetPersonCompanyByIdLazyQuery>;
export type GetPersonCompanyByIdQueryResult = Apollo.QueryResult<GetPersonCompanyByIdQuery, GetPersonCompanyByIdQueryVariables>;
export const GetPersonCreatedAtByIdDocument = gql`
    query GetPersonCreatedAtById($id: String!) {
  person: findUniquePerson(id: $id) {
    id
    createdAt
  }
}
    `;

/**
 * __useGetPersonCreatedAtByIdQuery__
 *
 * To run a query within a React component, call `useGetPersonCreatedAtByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonCreatedAtByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonCreatedAtByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPersonCreatedAtByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPersonCreatedAtByIdQuery, GetPersonCreatedAtByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonCreatedAtByIdQuery, GetPersonCreatedAtByIdQueryVariables>(GetPersonCreatedAtByIdDocument, options);
      }
export function useGetPersonCreatedAtByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonCreatedAtByIdQuery, GetPersonCreatedAtByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonCreatedAtByIdQuery, GetPersonCreatedAtByIdQueryVariables>(GetPersonCreatedAtByIdDocument, options);
        }
export type GetPersonCreatedAtByIdQueryHookResult = ReturnType<typeof useGetPersonCreatedAtByIdQuery>;
export type GetPersonCreatedAtByIdLazyQueryHookResult = ReturnType<typeof useGetPersonCreatedAtByIdLazyQuery>;
export type GetPersonCreatedAtByIdQueryResult = Apollo.QueryResult<GetPersonCreatedAtByIdQuery, GetPersonCreatedAtByIdQueryVariables>;
export const GetPersonEmailByIdDocument = gql`
    query GetPersonEmailById($id: String!) {
  person: findUniquePerson(id: $id) {
    id
    email
  }
}
    `;

/**
 * __useGetPersonEmailByIdQuery__
 *
 * To run a query within a React component, call `useGetPersonEmailByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonEmailByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonEmailByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPersonEmailByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPersonEmailByIdQuery, GetPersonEmailByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonEmailByIdQuery, GetPersonEmailByIdQueryVariables>(GetPersonEmailByIdDocument, options);
      }
export function useGetPersonEmailByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonEmailByIdQuery, GetPersonEmailByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonEmailByIdQuery, GetPersonEmailByIdQueryVariables>(GetPersonEmailByIdDocument, options);
        }
export type GetPersonEmailByIdQueryHookResult = ReturnType<typeof useGetPersonEmailByIdQuery>;
export type GetPersonEmailByIdLazyQueryHookResult = ReturnType<typeof useGetPersonEmailByIdLazyQuery>;
export type GetPersonEmailByIdQueryResult = Apollo.QueryResult<GetPersonEmailByIdQuery, GetPersonEmailByIdQueryVariables>;
export const GetPersonNamesAndCommentCountByIdDocument = gql`
    query GetPersonNamesAndCommentCountById($id: String!) {
  person: findUniquePerson(id: $id) {
    id
    firstName
    lastName
    displayName
    _activityCount
  }
}
    `;

/**
 * __useGetPersonNamesAndCommentCountByIdQuery__
 *
 * To run a query within a React component, call `useGetPersonNamesAndCommentCountByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonNamesAndCommentCountByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonNamesAndCommentCountByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPersonNamesAndCommentCountByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPersonNamesAndCommentCountByIdQuery, GetPersonNamesAndCommentCountByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonNamesAndCommentCountByIdQuery, GetPersonNamesAndCommentCountByIdQueryVariables>(GetPersonNamesAndCommentCountByIdDocument, options);
      }
export function useGetPersonNamesAndCommentCountByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonNamesAndCommentCountByIdQuery, GetPersonNamesAndCommentCountByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonNamesAndCommentCountByIdQuery, GetPersonNamesAndCommentCountByIdQueryVariables>(GetPersonNamesAndCommentCountByIdDocument, options);
        }
export type GetPersonNamesAndCommentCountByIdQueryHookResult = ReturnType<typeof useGetPersonNamesAndCommentCountByIdQuery>;
export type GetPersonNamesAndCommentCountByIdLazyQueryHookResult = ReturnType<typeof useGetPersonNamesAndCommentCountByIdLazyQuery>;
export type GetPersonNamesAndCommentCountByIdQueryResult = Apollo.QueryResult<GetPersonNamesAndCommentCountByIdQuery, GetPersonNamesAndCommentCountByIdQueryVariables>;
export const GetPersonPhoneByIdDocument = gql`
    query GetPersonPhoneById($id: String!) {
  person: findUniquePerson(id: $id) {
    id
    phone
  }
}
    `;

/**
 * __useGetPersonPhoneByIdQuery__
 *
 * To run a query within a React component, call `useGetPersonPhoneByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonPhoneByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonPhoneByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPersonPhoneByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPersonPhoneByIdQuery, GetPersonPhoneByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonPhoneByIdQuery, GetPersonPhoneByIdQueryVariables>(GetPersonPhoneByIdDocument, options);
      }
export function useGetPersonPhoneByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonPhoneByIdQuery, GetPersonPhoneByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonPhoneByIdQuery, GetPersonPhoneByIdQueryVariables>(GetPersonPhoneByIdDocument, options);
        }
export type GetPersonPhoneByIdQueryHookResult = ReturnType<typeof useGetPersonPhoneByIdQuery>;
export type GetPersonPhoneByIdLazyQueryHookResult = ReturnType<typeof useGetPersonPhoneByIdLazyQuery>;
export type GetPersonPhoneByIdQueryResult = Apollo.QueryResult<GetPersonPhoneByIdQuery, GetPersonPhoneByIdQueryVariables>;
export const CreateOneCompanyPipelineProgressDocument = gql`
    mutation CreateOneCompanyPipelineProgress($uuid: String!, $companyId: String!, $pipelineId: String!, $pipelineStageId: String!) {
  createOnePipelineProgress(
    data: {id: $uuid, company: {connect: {id: $companyId}}, pipeline: {connect: {id: $pipelineId}}, pipelineStage: {connect: {id: $pipelineStageId}}}
  ) {
    id
  }
}
    `;
export type CreateOneCompanyPipelineProgressMutationFn = Apollo.MutationFunction<CreateOneCompanyPipelineProgressMutation, CreateOneCompanyPipelineProgressMutationVariables>;

/**
 * __useCreateOneCompanyPipelineProgressMutation__
 *
 * To run a mutation, you first call `useCreateOneCompanyPipelineProgressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCompanyPipelineProgressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCompanyPipelineProgressMutation, { data, loading, error }] = useCreateOneCompanyPipelineProgressMutation({
 *   variables: {
 *      uuid: // value for 'uuid'
 *      companyId: // value for 'companyId'
 *      pipelineId: // value for 'pipelineId'
 *      pipelineStageId: // value for 'pipelineStageId'
 *   },
 * });
 */
export function useCreateOneCompanyPipelineProgressMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneCompanyPipelineProgressMutation, CreateOneCompanyPipelineProgressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneCompanyPipelineProgressMutation, CreateOneCompanyPipelineProgressMutationVariables>(CreateOneCompanyPipelineProgressDocument, options);
      }
export type CreateOneCompanyPipelineProgressMutationHookResult = ReturnType<typeof useCreateOneCompanyPipelineProgressMutation>;
export type CreateOneCompanyPipelineProgressMutationResult = Apollo.MutationResult<CreateOneCompanyPipelineProgressMutation>;
export type CreateOneCompanyPipelineProgressMutationOptions = Apollo.BaseMutationOptions<CreateOneCompanyPipelineProgressMutation, CreateOneCompanyPipelineProgressMutationVariables>;
export const CreatePipelineStageDocument = gql`
    mutation CreatePipelineStage($data: PipelineStageCreateInput!) {
  pipelineStage: createOnePipelineStage(data: $data) {
    id
    name
    color
  }
}
    `;
export type CreatePipelineStageMutationFn = Apollo.MutationFunction<CreatePipelineStageMutation, CreatePipelineStageMutationVariables>;

/**
 * __useCreatePipelineStageMutation__
 *
 * To run a mutation, you first call `useCreatePipelineStageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePipelineStageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPipelineStageMutation, { data, loading, error }] = useCreatePipelineStageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePipelineStageMutation(baseOptions?: Apollo.MutationHookOptions<CreatePipelineStageMutation, CreatePipelineStageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePipelineStageMutation, CreatePipelineStageMutationVariables>(CreatePipelineStageDocument, options);
      }
export type CreatePipelineStageMutationHookResult = ReturnType<typeof useCreatePipelineStageMutation>;
export type CreatePipelineStageMutationResult = Apollo.MutationResult<CreatePipelineStageMutation>;
export type CreatePipelineStageMutationOptions = Apollo.BaseMutationOptions<CreatePipelineStageMutation, CreatePipelineStageMutationVariables>;
export const DeleteManyPipelineProgressDocument = gql`
    mutation DeleteManyPipelineProgress($ids: [String!]) {
  deleteManyPipelineProgress(where: {id: {in: $ids}}) {
    count
  }
}
    `;
export type DeleteManyPipelineProgressMutationFn = Apollo.MutationFunction<DeleteManyPipelineProgressMutation, DeleteManyPipelineProgressMutationVariables>;

/**
 * __useDeleteManyPipelineProgressMutation__
 *
 * To run a mutation, you first call `useDeleteManyPipelineProgressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyPipelineProgressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyPipelineProgressMutation, { data, loading, error }] = useDeleteManyPipelineProgressMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteManyPipelineProgressMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyPipelineProgressMutation, DeleteManyPipelineProgressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyPipelineProgressMutation, DeleteManyPipelineProgressMutationVariables>(DeleteManyPipelineProgressDocument, options);
      }
export type DeleteManyPipelineProgressMutationHookResult = ReturnType<typeof useDeleteManyPipelineProgressMutation>;
export type DeleteManyPipelineProgressMutationResult = Apollo.MutationResult<DeleteManyPipelineProgressMutation>;
export type DeleteManyPipelineProgressMutationOptions = Apollo.BaseMutationOptions<DeleteManyPipelineProgressMutation, DeleteManyPipelineProgressMutationVariables>;
export const UpdateOnePipelineProgressDocument = gql`
    mutation UpdateOnePipelineProgress($data: PipelineProgressUpdateInput!, $where: PipelineProgressWhereUniqueInput!) {
  updateOnePipelineProgress(where: $where, data: $data) {
    id
    amount
    closeDate
    probability
    pointOfContact {
      id
    }
  }
}
    `;
export type UpdateOnePipelineProgressMutationFn = Apollo.MutationFunction<UpdateOnePipelineProgressMutation, UpdateOnePipelineProgressMutationVariables>;

/**
 * __useUpdateOnePipelineProgressMutation__
 *
 * To run a mutation, you first call `useUpdateOnePipelineProgressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOnePipelineProgressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOnePipelineProgressMutation, { data, loading, error }] = useUpdateOnePipelineProgressMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOnePipelineProgressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOnePipelineProgressMutation, UpdateOnePipelineProgressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOnePipelineProgressMutation, UpdateOnePipelineProgressMutationVariables>(UpdateOnePipelineProgressDocument, options);
      }
export type UpdateOnePipelineProgressMutationHookResult = ReturnType<typeof useUpdateOnePipelineProgressMutation>;
export type UpdateOnePipelineProgressMutationResult = Apollo.MutationResult<UpdateOnePipelineProgressMutation>;
export type UpdateOnePipelineProgressMutationOptions = Apollo.BaseMutationOptions<UpdateOnePipelineProgressMutation, UpdateOnePipelineProgressMutationVariables>;
export const UpdateOnePipelineProgressStageDocument = gql`
    mutation UpdateOnePipelineProgressStage($id: String, $pipelineStageId: String) {
  updateOnePipelineProgress(
    where: {id: $id}
    data: {pipelineStage: {connect: {id: $pipelineStageId}}}
  ) {
    id
  }
}
    `;
export type UpdateOnePipelineProgressStageMutationFn = Apollo.MutationFunction<UpdateOnePipelineProgressStageMutation, UpdateOnePipelineProgressStageMutationVariables>;

/**
 * __useUpdateOnePipelineProgressStageMutation__
 *
 * To run a mutation, you first call `useUpdateOnePipelineProgressStageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOnePipelineProgressStageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOnePipelineProgressStageMutation, { data, loading, error }] = useUpdateOnePipelineProgressStageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      pipelineStageId: // value for 'pipelineStageId'
 *   },
 * });
 */
export function useUpdateOnePipelineProgressStageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOnePipelineProgressStageMutation, UpdateOnePipelineProgressStageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOnePipelineProgressStageMutation, UpdateOnePipelineProgressStageMutationVariables>(UpdateOnePipelineProgressStageDocument, options);
      }
export type UpdateOnePipelineProgressStageMutationHookResult = ReturnType<typeof useUpdateOnePipelineProgressStageMutation>;
export type UpdateOnePipelineProgressStageMutationResult = Apollo.MutationResult<UpdateOnePipelineProgressStageMutation>;
export type UpdateOnePipelineProgressStageMutationOptions = Apollo.BaseMutationOptions<UpdateOnePipelineProgressStageMutation, UpdateOnePipelineProgressStageMutationVariables>;
export const UpdatePipelineStageDocument = gql`
    mutation UpdatePipelineStage($id: String, $data: PipelineStageUpdateInput!) {
  updateOnePipelineStage(where: {id: $id}, data: $data) {
    id
    name
    color
  }
}
    `;
export type UpdatePipelineStageMutationFn = Apollo.MutationFunction<UpdatePipelineStageMutation, UpdatePipelineStageMutationVariables>;

/**
 * __useUpdatePipelineStageMutation__
 *
 * To run a mutation, you first call `useUpdatePipelineStageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePipelineStageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePipelineStageMutation, { data, loading, error }] = useUpdatePipelineStageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePipelineStageMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePipelineStageMutation, UpdatePipelineStageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePipelineStageMutation, UpdatePipelineStageMutationVariables>(UpdatePipelineStageDocument, options);
      }
export type UpdatePipelineStageMutationHookResult = ReturnType<typeof useUpdatePipelineStageMutation>;
export type UpdatePipelineStageMutationResult = Apollo.MutationResult<UpdatePipelineStageMutation>;
export type UpdatePipelineStageMutationOptions = Apollo.BaseMutationOptions<UpdatePipelineStageMutation, UpdatePipelineStageMutationVariables>;
export const GetPipelineProgressDocument = gql`
    query GetPipelineProgress($where: PipelineProgressWhereInput, $orderBy: [PipelineProgressOrderByWithRelationInput!]) {
  findManyPipelineProgress(where: $where, orderBy: $orderBy) {
    id
    pipelineStageId
    companyId
    personId
    amount
    closeDate
    pointOfContactId
    pointOfContact {
      id
      firstName
      lastName
      displayName
      avatarUrl
    }
    probability
  }
}
    `;

/**
 * __useGetPipelineProgressQuery__
 *
 * To run a query within a React component, call `useGetPipelineProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPipelineProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPipelineProgressQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetPipelineProgressQuery(baseOptions?: Apollo.QueryHookOptions<GetPipelineProgressQuery, GetPipelineProgressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPipelineProgressQuery, GetPipelineProgressQueryVariables>(GetPipelineProgressDocument, options);
      }
export function useGetPipelineProgressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPipelineProgressQuery, GetPipelineProgressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPipelineProgressQuery, GetPipelineProgressQueryVariables>(GetPipelineProgressDocument, options);
        }
export type GetPipelineProgressQueryHookResult = ReturnType<typeof useGetPipelineProgressQuery>;
export type GetPipelineProgressLazyQueryHookResult = ReturnType<typeof useGetPipelineProgressLazyQuery>;
export type GetPipelineProgressQueryResult = Apollo.QueryResult<GetPipelineProgressQuery, GetPipelineProgressQueryVariables>;
export const GetPipelinesDocument = gql`
    query GetPipelines($where: PipelineWhereInput) {
  findManyPipeline(where: $where) {
    id
    name
    pipelineProgressableType
    pipelineStages {
      id
      name
      color
      index
    }
  }
}
    `;

/**
 * __useGetPipelinesQuery__
 *
 * To run a query within a React component, call `useGetPipelinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPipelinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPipelinesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetPipelinesQuery(baseOptions?: Apollo.QueryHookOptions<GetPipelinesQuery, GetPipelinesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPipelinesQuery, GetPipelinesQueryVariables>(GetPipelinesDocument, options);
      }
export function useGetPipelinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPipelinesQuery, GetPipelinesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPipelinesQuery, GetPipelinesQueryVariables>(GetPipelinesDocument, options);
        }
export type GetPipelinesQueryHookResult = ReturnType<typeof useGetPipelinesQuery>;
export type GetPipelinesLazyQueryHookResult = ReturnType<typeof useGetPipelinesLazyQuery>;
export type GetPipelinesQueryResult = Apollo.QueryResult<GetPipelinesQuery, GetPipelinesQueryVariables>;
export const SearchActivityDocument = gql`
    query SearchActivity($where: ActivityWhereInput, $limit: Int, $orderBy: [ActivityOrderByWithRelationInput!]) {
  searchResults: findManyActivities(
    where: $where
    take: $limit
    orderBy: $orderBy
  ) {
    id
    title
    body
  }
}
    `;

/**
 * __useSearchActivityQuery__
 *
 * To run a query within a React component, call `useSearchActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchActivityQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSearchActivityQuery(baseOptions?: Apollo.QueryHookOptions<SearchActivityQuery, SearchActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchActivityQuery, SearchActivityQueryVariables>(SearchActivityDocument, options);
      }
export function useSearchActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchActivityQuery, SearchActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchActivityQuery, SearchActivityQueryVariables>(SearchActivityDocument, options);
        }
export type SearchActivityQueryHookResult = ReturnType<typeof useSearchActivityQuery>;
export type SearchActivityLazyQueryHookResult = ReturnType<typeof useSearchActivityLazyQuery>;
export type SearchActivityQueryResult = Apollo.QueryResult<SearchActivityQuery, SearchActivityQueryVariables>;
export const SearchCompanyDocument = gql`
    query SearchCompany($where: CompanyWhereInput, $limit: Int, $orderBy: [CompanyOrderByWithRelationInput!]) {
  searchResults: findManyCompany(where: $where, take: $limit, orderBy: $orderBy) {
    ...CompanyFieldsFragment
  }
}
    ${CompanyFieldsFragmentFragmentDoc}`;

/**
 * __useSearchCompanyQuery__
 *
 * To run a query within a React component, call `useSearchCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCompanyQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSearchCompanyQuery(baseOptions?: Apollo.QueryHookOptions<SearchCompanyQuery, SearchCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCompanyQuery, SearchCompanyQueryVariables>(SearchCompanyDocument, options);
      }
export function useSearchCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCompanyQuery, SearchCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCompanyQuery, SearchCompanyQueryVariables>(SearchCompanyDocument, options);
        }
export type SearchCompanyQueryHookResult = ReturnType<typeof useSearchCompanyQuery>;
export type SearchCompanyLazyQueryHookResult = ReturnType<typeof useSearchCompanyLazyQuery>;
export type SearchCompanyQueryResult = Apollo.QueryResult<SearchCompanyQuery, SearchCompanyQueryVariables>;
export const SearchPeopleDocument = gql`
    query SearchPeople($where: PersonWhereInput, $limit: Int, $orderBy: [PersonOrderByWithRelationInput!]) {
  searchResults: findManyPerson(where: $where, take: $limit, orderBy: $orderBy) {
    id
    phone
    email
    city
    firstName
    lastName
    displayName
    avatarUrl
    createdAt
  }
}
    `;

/**
 * __useSearchPeopleQuery__
 *
 * To run a query within a React component, call `useSearchPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPeopleQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSearchPeopleQuery(baseOptions?: Apollo.QueryHookOptions<SearchPeopleQuery, SearchPeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPeopleQuery, SearchPeopleQueryVariables>(SearchPeopleDocument, options);
      }
export function useSearchPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPeopleQuery, SearchPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPeopleQuery, SearchPeopleQueryVariables>(SearchPeopleDocument, options);
        }
export type SearchPeopleQueryHookResult = ReturnType<typeof useSearchPeopleQuery>;
export type SearchPeopleLazyQueryHookResult = ReturnType<typeof useSearchPeopleLazyQuery>;
export type SearchPeopleQueryResult = Apollo.QueryResult<SearchPeopleQuery, SearchPeopleQueryVariables>;
export const SearchUserDocument = gql`
    query SearchUser($where: UserWhereInput, $limit: Int, $orderBy: [UserOrderByWithRelationInput!]) {
  searchResults: findManyUser(where: $where, take: $limit, orderBy: $orderBy) {
    id
    email
    displayName
    firstName
    lastName
    avatarUrl
  }
}
    `;

/**
 * __useSearchUserQuery__
 *
 * To run a query within a React component, call `useSearchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSearchUserQuery(baseOptions?: Apollo.QueryHookOptions<SearchUserQuery, SearchUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, options);
      }
export function useSearchUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUserQuery, SearchUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, options);
        }
export type SearchUserQueryHookResult = ReturnType<typeof useSearchUserQuery>;
export type SearchUserLazyQueryHookResult = ReturnType<typeof useSearchUserLazyQuery>;
export type SearchUserQueryResult = Apollo.QueryResult<SearchUserQuery, SearchUserQueryVariables>;
export const DeleteUserAccountDocument = gql`
    mutation DeleteUserAccount {
  deleteUserAccount {
    id
  }
}
    `;
export type DeleteUserAccountMutationFn = Apollo.MutationFunction<DeleteUserAccountMutation, DeleteUserAccountMutationVariables>;

/**
 * __useDeleteUserAccountMutation__
 *
 * To run a mutation, you first call `useDeleteUserAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserAccountMutation, { data, loading, error }] = useDeleteUserAccountMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteUserAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserAccountMutation, DeleteUserAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserAccountMutation, DeleteUserAccountMutationVariables>(DeleteUserAccountDocument, options);
      }
export type DeleteUserAccountMutationHookResult = ReturnType<typeof useDeleteUserAccountMutation>;
export type DeleteUserAccountMutationResult = Apollo.MutationResult<DeleteUserAccountMutation>;
export type DeleteUserAccountMutationOptions = Apollo.BaseMutationOptions<DeleteUserAccountMutation, DeleteUserAccountMutationVariables>;
export const RemoveProfilePictureDocument = gql`
    mutation RemoveProfilePicture($where: UserWhereUniqueInput!) {
  updateUser(data: {avatarUrl: null}, where: $where) {
    id
    avatarUrl
  }
}
    `;
export type RemoveProfilePictureMutationFn = Apollo.MutationFunction<RemoveProfilePictureMutation, RemoveProfilePictureMutationVariables>;

/**
 * __useRemoveProfilePictureMutation__
 *
 * To run a mutation, you first call `useRemoveProfilePictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProfilePictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProfilePictureMutation, { data, loading, error }] = useRemoveProfilePictureMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemoveProfilePictureMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProfilePictureMutation, RemoveProfilePictureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProfilePictureMutation, RemoveProfilePictureMutationVariables>(RemoveProfilePictureDocument, options);
      }
export type RemoveProfilePictureMutationHookResult = ReturnType<typeof useRemoveProfilePictureMutation>;
export type RemoveProfilePictureMutationResult = Apollo.MutationResult<RemoveProfilePictureMutation>;
export type RemoveProfilePictureMutationOptions = Apollo.BaseMutationOptions<RemoveProfilePictureMutation, RemoveProfilePictureMutationVariables>;
export const UpdateAllowImpersonationDocument = gql`
    mutation UpdateAllowImpersonation($allowImpersonation: Boolean!) {
  allowImpersonation(allowImpersonation: $allowImpersonation) {
    id
    allowImpersonation
  }
}
    `;
export type UpdateAllowImpersonationMutationFn = Apollo.MutationFunction<UpdateAllowImpersonationMutation, UpdateAllowImpersonationMutationVariables>;

/**
 * __useUpdateAllowImpersonationMutation__
 *
 * To run a mutation, you first call `useUpdateAllowImpersonationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAllowImpersonationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAllowImpersonationMutation, { data, loading, error }] = useUpdateAllowImpersonationMutation({
 *   variables: {
 *      allowImpersonation: // value for 'allowImpersonation'
 *   },
 * });
 */
export function useUpdateAllowImpersonationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAllowImpersonationMutation, UpdateAllowImpersonationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAllowImpersonationMutation, UpdateAllowImpersonationMutationVariables>(UpdateAllowImpersonationDocument, options);
      }
export type UpdateAllowImpersonationMutationHookResult = ReturnType<typeof useUpdateAllowImpersonationMutation>;
export type UpdateAllowImpersonationMutationResult = Apollo.MutationResult<UpdateAllowImpersonationMutation>;
export type UpdateAllowImpersonationMutationOptions = Apollo.BaseMutationOptions<UpdateAllowImpersonationMutation, UpdateAllowImpersonationMutationVariables>;
export const UploadProfilePictureDocument = gql`
    mutation UploadProfilePicture($file: Upload!) {
  uploadProfilePicture(file: $file)
}
    `;
export type UploadProfilePictureMutationFn = Apollo.MutationFunction<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>;

/**
 * __useUploadProfilePictureMutation__
 *
 * To run a mutation, you first call `useUploadProfilePictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadProfilePictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadProfilePictureMutation, { data, loading, error }] = useUploadProfilePictureMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadProfilePictureMutation(baseOptions?: Apollo.MutationHookOptions<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>(UploadProfilePictureDocument, options);
      }
export type UploadProfilePictureMutationHookResult = ReturnType<typeof useUploadProfilePictureMutation>;
export type UploadProfilePictureMutationResult = Apollo.MutationResult<UploadProfilePictureMutation>;
export type UploadProfilePictureMutationOptions = Apollo.BaseMutationOptions<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
    email
    displayName
    firstName
    lastName
    avatarUrl
    workspaceMember {
      id
      workspace {
        id
        domainName
        displayName
        logo
        inviteHash
      }
    }
    settings {
      id
      locale
      colorScheme
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  currentUser {
    id
    email
    displayName
    firstName
    lastName
    avatarUrl
    canImpersonate
    workspaceMember {
      id
      allowImpersonation
      workspace {
        id
        domainName
        displayName
        logo
        inviteHash
      }
    }
    settings {
      id
      locale
      colorScheme
    }
    supportUserHash
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  findManyUser {
    id
    email
    displayName
    firstName
    lastName
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const CreateViewDocument = gql`
    mutation CreateView($data: ViewCreateInput!) {
  view: createOneView(data: $data) {
    id
    name
  }
}
    `;
export type CreateViewMutationFn = Apollo.MutationFunction<CreateViewMutation, CreateViewMutationVariables>;

/**
 * __useCreateViewMutation__
 *
 * To run a mutation, you first call `useCreateViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createViewMutation, { data, loading, error }] = useCreateViewMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateViewMutation(baseOptions?: Apollo.MutationHookOptions<CreateViewMutation, CreateViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateViewMutation, CreateViewMutationVariables>(CreateViewDocument, options);
      }
export type CreateViewMutationHookResult = ReturnType<typeof useCreateViewMutation>;
export type CreateViewMutationResult = Apollo.MutationResult<CreateViewMutation>;
export type CreateViewMutationOptions = Apollo.BaseMutationOptions<CreateViewMutation, CreateViewMutationVariables>;
export const CreateViewFieldsDocument = gql`
    mutation CreateViewFields($data: [ViewFieldCreateManyInput!]!) {
  createManyViewField(data: $data) {
    count
  }
}
    `;
export type CreateViewFieldsMutationFn = Apollo.MutationFunction<CreateViewFieldsMutation, CreateViewFieldsMutationVariables>;

/**
 * __useCreateViewFieldsMutation__
 *
 * To run a mutation, you first call `useCreateViewFieldsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateViewFieldsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createViewFieldsMutation, { data, loading, error }] = useCreateViewFieldsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateViewFieldsMutation(baseOptions?: Apollo.MutationHookOptions<CreateViewFieldsMutation, CreateViewFieldsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateViewFieldsMutation, CreateViewFieldsMutationVariables>(CreateViewFieldsDocument, options);
      }
export type CreateViewFieldsMutationHookResult = ReturnType<typeof useCreateViewFieldsMutation>;
export type CreateViewFieldsMutationResult = Apollo.MutationResult<CreateViewFieldsMutation>;
export type CreateViewFieldsMutationOptions = Apollo.BaseMutationOptions<CreateViewFieldsMutation, CreateViewFieldsMutationVariables>;
export const CreateViewFiltersDocument = gql`
    mutation CreateViewFilters($data: [ViewFilterCreateManyInput!]!) {
  createManyViewFilter(data: $data) {
    count
  }
}
    `;
export type CreateViewFiltersMutationFn = Apollo.MutationFunction<CreateViewFiltersMutation, CreateViewFiltersMutationVariables>;

/**
 * __useCreateViewFiltersMutation__
 *
 * To run a mutation, you first call `useCreateViewFiltersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateViewFiltersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createViewFiltersMutation, { data, loading, error }] = useCreateViewFiltersMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateViewFiltersMutation(baseOptions?: Apollo.MutationHookOptions<CreateViewFiltersMutation, CreateViewFiltersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateViewFiltersMutation, CreateViewFiltersMutationVariables>(CreateViewFiltersDocument, options);
      }
export type CreateViewFiltersMutationHookResult = ReturnType<typeof useCreateViewFiltersMutation>;
export type CreateViewFiltersMutationResult = Apollo.MutationResult<CreateViewFiltersMutation>;
export type CreateViewFiltersMutationOptions = Apollo.BaseMutationOptions<CreateViewFiltersMutation, CreateViewFiltersMutationVariables>;
export const CreateViewSortsDocument = gql`
    mutation CreateViewSorts($data: [ViewSortCreateManyInput!]!) {
  createManyViewSort(data: $data) {
    count
  }
}
    `;
export type CreateViewSortsMutationFn = Apollo.MutationFunction<CreateViewSortsMutation, CreateViewSortsMutationVariables>;

/**
 * __useCreateViewSortsMutation__
 *
 * To run a mutation, you first call `useCreateViewSortsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateViewSortsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createViewSortsMutation, { data, loading, error }] = useCreateViewSortsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateViewSortsMutation(baseOptions?: Apollo.MutationHookOptions<CreateViewSortsMutation, CreateViewSortsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateViewSortsMutation, CreateViewSortsMutationVariables>(CreateViewSortsDocument, options);
      }
export type CreateViewSortsMutationHookResult = ReturnType<typeof useCreateViewSortsMutation>;
export type CreateViewSortsMutationResult = Apollo.MutationResult<CreateViewSortsMutation>;
export type CreateViewSortsMutationOptions = Apollo.BaseMutationOptions<CreateViewSortsMutation, CreateViewSortsMutationVariables>;
export const DeleteViewDocument = gql`
    mutation DeleteView($where: ViewWhereUniqueInput!) {
  view: deleteOneView(where: $where) {
    id
    name
  }
}
    `;
export type DeleteViewMutationFn = Apollo.MutationFunction<DeleteViewMutation, DeleteViewMutationVariables>;

/**
 * __useDeleteViewMutation__
 *
 * To run a mutation, you first call `useDeleteViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteViewMutation, { data, loading, error }] = useDeleteViewMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteViewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteViewMutation, DeleteViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteViewMutation, DeleteViewMutationVariables>(DeleteViewDocument, options);
      }
export type DeleteViewMutationHookResult = ReturnType<typeof useDeleteViewMutation>;
export type DeleteViewMutationResult = Apollo.MutationResult<DeleteViewMutation>;
export type DeleteViewMutationOptions = Apollo.BaseMutationOptions<DeleteViewMutation, DeleteViewMutationVariables>;
export const DeleteViewFiltersDocument = gql`
    mutation DeleteViewFilters($where: ViewFilterWhereInput!) {
  deleteManyViewFilter(where: $where) {
    count
  }
}
    `;
export type DeleteViewFiltersMutationFn = Apollo.MutationFunction<DeleteViewFiltersMutation, DeleteViewFiltersMutationVariables>;

/**
 * __useDeleteViewFiltersMutation__
 *
 * To run a mutation, you first call `useDeleteViewFiltersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteViewFiltersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteViewFiltersMutation, { data, loading, error }] = useDeleteViewFiltersMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteViewFiltersMutation(baseOptions?: Apollo.MutationHookOptions<DeleteViewFiltersMutation, DeleteViewFiltersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteViewFiltersMutation, DeleteViewFiltersMutationVariables>(DeleteViewFiltersDocument, options);
      }
export type DeleteViewFiltersMutationHookResult = ReturnType<typeof useDeleteViewFiltersMutation>;
export type DeleteViewFiltersMutationResult = Apollo.MutationResult<DeleteViewFiltersMutation>;
export type DeleteViewFiltersMutationOptions = Apollo.BaseMutationOptions<DeleteViewFiltersMutation, DeleteViewFiltersMutationVariables>;
export const DeleteViewSortsDocument = gql`
    mutation DeleteViewSorts($where: ViewSortWhereInput!) {
  deleteManyViewSort(where: $where) {
    count
  }
}
    `;
export type DeleteViewSortsMutationFn = Apollo.MutationFunction<DeleteViewSortsMutation, DeleteViewSortsMutationVariables>;

/**
 * __useDeleteViewSortsMutation__
 *
 * To run a mutation, you first call `useDeleteViewSortsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteViewSortsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteViewSortsMutation, { data, loading, error }] = useDeleteViewSortsMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteViewSortsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteViewSortsMutation, DeleteViewSortsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteViewSortsMutation, DeleteViewSortsMutationVariables>(DeleteViewSortsDocument, options);
      }
export type DeleteViewSortsMutationHookResult = ReturnType<typeof useDeleteViewSortsMutation>;
export type DeleteViewSortsMutationResult = Apollo.MutationResult<DeleteViewSortsMutation>;
export type DeleteViewSortsMutationOptions = Apollo.BaseMutationOptions<DeleteViewSortsMutation, DeleteViewSortsMutationVariables>;
export const UpdateViewDocument = gql`
    mutation UpdateView($data: ViewUpdateInput!, $where: ViewWhereUniqueInput!) {
  view: updateOneView(data: $data, where: $where) {
    id
    name
  }
}
    `;
export type UpdateViewMutationFn = Apollo.MutationFunction<UpdateViewMutation, UpdateViewMutationVariables>;

/**
 * __useUpdateViewMutation__
 *
 * To run a mutation, you first call `useUpdateViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateViewMutation, { data, loading, error }] = useUpdateViewMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateViewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateViewMutation, UpdateViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateViewMutation, UpdateViewMutationVariables>(UpdateViewDocument, options);
      }
export type UpdateViewMutationHookResult = ReturnType<typeof useUpdateViewMutation>;
export type UpdateViewMutationResult = Apollo.MutationResult<UpdateViewMutation>;
export type UpdateViewMutationOptions = Apollo.BaseMutationOptions<UpdateViewMutation, UpdateViewMutationVariables>;
export const UpdateViewFieldDocument = gql`
    mutation UpdateViewField($data: ViewFieldUpdateInput!, $where: ViewFieldWhereUniqueInput!) {
  updateOneViewField(data: $data, where: $where) {
    id
    fieldName
    isVisible
    sizeInPx
    index
  }
}
    `;
export type UpdateViewFieldMutationFn = Apollo.MutationFunction<UpdateViewFieldMutation, UpdateViewFieldMutationVariables>;

/**
 * __useUpdateViewFieldMutation__
 *
 * To run a mutation, you first call `useUpdateViewFieldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateViewFieldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateViewFieldMutation, { data, loading, error }] = useUpdateViewFieldMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateViewFieldMutation(baseOptions?: Apollo.MutationHookOptions<UpdateViewFieldMutation, UpdateViewFieldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateViewFieldMutation, UpdateViewFieldMutationVariables>(UpdateViewFieldDocument, options);
      }
export type UpdateViewFieldMutationHookResult = ReturnType<typeof useUpdateViewFieldMutation>;
export type UpdateViewFieldMutationResult = Apollo.MutationResult<UpdateViewFieldMutation>;
export type UpdateViewFieldMutationOptions = Apollo.BaseMutationOptions<UpdateViewFieldMutation, UpdateViewFieldMutationVariables>;
export const UpdateViewFilterDocument = gql`
    mutation UpdateViewFilter($data: ViewFilterUpdateInput!, $where: ViewFilterWhereUniqueInput!) {
  viewFilter: updateOneViewFilter(data: $data, where: $where) {
    displayValue
    key
    name
    operand
    value
  }
}
    `;
export type UpdateViewFilterMutationFn = Apollo.MutationFunction<UpdateViewFilterMutation, UpdateViewFilterMutationVariables>;

/**
 * __useUpdateViewFilterMutation__
 *
 * To run a mutation, you first call `useUpdateViewFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateViewFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateViewFilterMutation, { data, loading, error }] = useUpdateViewFilterMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateViewFilterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateViewFilterMutation, UpdateViewFilterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateViewFilterMutation, UpdateViewFilterMutationVariables>(UpdateViewFilterDocument, options);
      }
export type UpdateViewFilterMutationHookResult = ReturnType<typeof useUpdateViewFilterMutation>;
export type UpdateViewFilterMutationResult = Apollo.MutationResult<UpdateViewFilterMutation>;
export type UpdateViewFilterMutationOptions = Apollo.BaseMutationOptions<UpdateViewFilterMutation, UpdateViewFilterMutationVariables>;
export const UpdateViewSortDocument = gql`
    mutation UpdateViewSort($data: ViewSortUpdateInput!, $where: ViewSortWhereUniqueInput!) {
  viewSort: updateOneViewSort(data: $data, where: $where) {
    direction
    key
    name
  }
}
    `;
export type UpdateViewSortMutationFn = Apollo.MutationFunction<UpdateViewSortMutation, UpdateViewSortMutationVariables>;

/**
 * __useUpdateViewSortMutation__
 *
 * To run a mutation, you first call `useUpdateViewSortMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateViewSortMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateViewSortMutation, { data, loading, error }] = useUpdateViewSortMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateViewSortMutation(baseOptions?: Apollo.MutationHookOptions<UpdateViewSortMutation, UpdateViewSortMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateViewSortMutation, UpdateViewSortMutationVariables>(UpdateViewSortDocument, options);
      }
export type UpdateViewSortMutationHookResult = ReturnType<typeof useUpdateViewSortMutation>;
export type UpdateViewSortMutationResult = Apollo.MutationResult<UpdateViewSortMutation>;
export type UpdateViewSortMutationOptions = Apollo.BaseMutationOptions<UpdateViewSortMutation, UpdateViewSortMutationVariables>;
export const GetViewFieldsDocument = gql`
    query GetViewFields($where: ViewFieldWhereInput, $orderBy: [ViewFieldOrderByWithRelationInput!]) {
  viewFields: findManyViewField(where: $where, orderBy: $orderBy) {
    id
    fieldName
    isVisible
    sizeInPx
    index
  }
}
    `;

/**
 * __useGetViewFieldsQuery__
 *
 * To run a query within a React component, call `useGetViewFieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewFieldsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetViewFieldsQuery(baseOptions?: Apollo.QueryHookOptions<GetViewFieldsQuery, GetViewFieldsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetViewFieldsQuery, GetViewFieldsQueryVariables>(GetViewFieldsDocument, options);
      }
export function useGetViewFieldsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetViewFieldsQuery, GetViewFieldsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetViewFieldsQuery, GetViewFieldsQueryVariables>(GetViewFieldsDocument, options);
        }
export type GetViewFieldsQueryHookResult = ReturnType<typeof useGetViewFieldsQuery>;
export type GetViewFieldsLazyQueryHookResult = ReturnType<typeof useGetViewFieldsLazyQuery>;
export type GetViewFieldsQueryResult = Apollo.QueryResult<GetViewFieldsQuery, GetViewFieldsQueryVariables>;
export const GetViewFiltersDocument = gql`
    query GetViewFilters($where: ViewFilterWhereInput) {
  viewFilters: findManyViewFilter(where: $where) {
    displayValue
    key
    name
    operand
    value
  }
}
    `;

/**
 * __useGetViewFiltersQuery__
 *
 * To run a query within a React component, call `useGetViewFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewFiltersQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetViewFiltersQuery(baseOptions?: Apollo.QueryHookOptions<GetViewFiltersQuery, GetViewFiltersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetViewFiltersQuery, GetViewFiltersQueryVariables>(GetViewFiltersDocument, options);
      }
export function useGetViewFiltersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetViewFiltersQuery, GetViewFiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetViewFiltersQuery, GetViewFiltersQueryVariables>(GetViewFiltersDocument, options);
        }
export type GetViewFiltersQueryHookResult = ReturnType<typeof useGetViewFiltersQuery>;
export type GetViewFiltersLazyQueryHookResult = ReturnType<typeof useGetViewFiltersLazyQuery>;
export type GetViewFiltersQueryResult = Apollo.QueryResult<GetViewFiltersQuery, GetViewFiltersQueryVariables>;
export const GetViewSortsDocument = gql`
    query GetViewSorts($where: ViewSortWhereInput) {
  viewSorts: findManyViewSort(where: $where) {
    direction
    key
    name
  }
}
    `;

/**
 * __useGetViewSortsQuery__
 *
 * To run a query within a React component, call `useGetViewSortsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewSortsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewSortsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetViewSortsQuery(baseOptions?: Apollo.QueryHookOptions<GetViewSortsQuery, GetViewSortsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetViewSortsQuery, GetViewSortsQueryVariables>(GetViewSortsDocument, options);
      }
export function useGetViewSortsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetViewSortsQuery, GetViewSortsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetViewSortsQuery, GetViewSortsQueryVariables>(GetViewSortsDocument, options);
        }
export type GetViewSortsQueryHookResult = ReturnType<typeof useGetViewSortsQuery>;
export type GetViewSortsLazyQueryHookResult = ReturnType<typeof useGetViewSortsLazyQuery>;
export type GetViewSortsQueryResult = Apollo.QueryResult<GetViewSortsQuery, GetViewSortsQueryVariables>;
export const GetViewsDocument = gql`
    query GetViews($where: ViewWhereInput) {
  views: findManyView(where: $where) {
    id
    name
  }
}
    `;

/**
 * __useGetViewsQuery__
 *
 * To run a query within a React component, call `useGetViewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetViewsQuery(baseOptions?: Apollo.QueryHookOptions<GetViewsQuery, GetViewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetViewsQuery, GetViewsQueryVariables>(GetViewsDocument, options);
      }
export function useGetViewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetViewsQuery, GetViewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetViewsQuery, GetViewsQueryVariables>(GetViewsDocument, options);
        }
export type GetViewsQueryHookResult = ReturnType<typeof useGetViewsQuery>;
export type GetViewsLazyQueryHookResult = ReturnType<typeof useGetViewsLazyQuery>;
export type GetViewsQueryResult = Apollo.QueryResult<GetViewsQuery, GetViewsQueryVariables>;
export const DeleteCurrentWorkspaceDocument = gql`
    mutation DeleteCurrentWorkspace {
  deleteCurrentWorkspace {
    id
  }
}
    `;
export type DeleteCurrentWorkspaceMutationFn = Apollo.MutationFunction<DeleteCurrentWorkspaceMutation, DeleteCurrentWorkspaceMutationVariables>;

/**
 * __useDeleteCurrentWorkspaceMutation__
 *
 * To run a mutation, you first call `useDeleteCurrentWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCurrentWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCurrentWorkspaceMutation, { data, loading, error }] = useDeleteCurrentWorkspaceMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteCurrentWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCurrentWorkspaceMutation, DeleteCurrentWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCurrentWorkspaceMutation, DeleteCurrentWorkspaceMutationVariables>(DeleteCurrentWorkspaceDocument, options);
      }
export type DeleteCurrentWorkspaceMutationHookResult = ReturnType<typeof useDeleteCurrentWorkspaceMutation>;
export type DeleteCurrentWorkspaceMutationResult = Apollo.MutationResult<DeleteCurrentWorkspaceMutation>;
export type DeleteCurrentWorkspaceMutationOptions = Apollo.BaseMutationOptions<DeleteCurrentWorkspaceMutation, DeleteCurrentWorkspaceMutationVariables>;
export const RemoveWorkspaceLogoDocument = gql`
    mutation RemoveWorkspaceLogo {
  updateWorkspace(data: {logo: null}) {
    id
  }
}
    `;
export type RemoveWorkspaceLogoMutationFn = Apollo.MutationFunction<RemoveWorkspaceLogoMutation, RemoveWorkspaceLogoMutationVariables>;

/**
 * __useRemoveWorkspaceLogoMutation__
 *
 * To run a mutation, you first call `useRemoveWorkspaceLogoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveWorkspaceLogoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeWorkspaceLogoMutation, { data, loading, error }] = useRemoveWorkspaceLogoMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveWorkspaceLogoMutation(baseOptions?: Apollo.MutationHookOptions<RemoveWorkspaceLogoMutation, RemoveWorkspaceLogoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveWorkspaceLogoMutation, RemoveWorkspaceLogoMutationVariables>(RemoveWorkspaceLogoDocument, options);
      }
export type RemoveWorkspaceLogoMutationHookResult = ReturnType<typeof useRemoveWorkspaceLogoMutation>;
export type RemoveWorkspaceLogoMutationResult = Apollo.MutationResult<RemoveWorkspaceLogoMutation>;
export type RemoveWorkspaceLogoMutationOptions = Apollo.BaseMutationOptions<RemoveWorkspaceLogoMutation, RemoveWorkspaceLogoMutationVariables>;
export const RemoveWorkspaceMemberDocument = gql`
    mutation RemoveWorkspaceMember($where: WorkspaceMemberWhereUniqueInput!) {
  deleteWorkspaceMember(where: $where) {
    id
  }
}
    `;
export type RemoveWorkspaceMemberMutationFn = Apollo.MutationFunction<RemoveWorkspaceMemberMutation, RemoveWorkspaceMemberMutationVariables>;

/**
 * __useRemoveWorkspaceMemberMutation__
 *
 * To run a mutation, you first call `useRemoveWorkspaceMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveWorkspaceMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeWorkspaceMemberMutation, { data, loading, error }] = useRemoveWorkspaceMemberMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemoveWorkspaceMemberMutation(baseOptions?: Apollo.MutationHookOptions<RemoveWorkspaceMemberMutation, RemoveWorkspaceMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveWorkspaceMemberMutation, RemoveWorkspaceMemberMutationVariables>(RemoveWorkspaceMemberDocument, options);
      }
export type RemoveWorkspaceMemberMutationHookResult = ReturnType<typeof useRemoveWorkspaceMemberMutation>;
export type RemoveWorkspaceMemberMutationResult = Apollo.MutationResult<RemoveWorkspaceMemberMutation>;
export type RemoveWorkspaceMemberMutationOptions = Apollo.BaseMutationOptions<RemoveWorkspaceMemberMutation, RemoveWorkspaceMemberMutationVariables>;
export const UpdateWorkspaceDocument = gql`
    mutation UpdateWorkspace($data: WorkspaceUpdateInput!) {
  updateWorkspace(data: $data) {
    id
    domainName
    displayName
    logo
  }
}
    `;
export type UpdateWorkspaceMutationFn = Apollo.MutationFunction<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>;

/**
 * __useUpdateWorkspaceMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceMutation, { data, loading, error }] = useUpdateWorkspaceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>(UpdateWorkspaceDocument, options);
      }
export type UpdateWorkspaceMutationHookResult = ReturnType<typeof useUpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationResult = Apollo.MutationResult<UpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationOptions = Apollo.BaseMutationOptions<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>;
export const UploadWorkspaceLogoDocument = gql`
    mutation UploadWorkspaceLogo($file: Upload!) {
  uploadWorkspaceLogo(file: $file)
}
    `;
export type UploadWorkspaceLogoMutationFn = Apollo.MutationFunction<UploadWorkspaceLogoMutation, UploadWorkspaceLogoMutationVariables>;

/**
 * __useUploadWorkspaceLogoMutation__
 *
 * To run a mutation, you first call `useUploadWorkspaceLogoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadWorkspaceLogoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadWorkspaceLogoMutation, { data, loading, error }] = useUploadWorkspaceLogoMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadWorkspaceLogoMutation(baseOptions?: Apollo.MutationHookOptions<UploadWorkspaceLogoMutation, UploadWorkspaceLogoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadWorkspaceLogoMutation, UploadWorkspaceLogoMutationVariables>(UploadWorkspaceLogoDocument, options);
      }
export type UploadWorkspaceLogoMutationHookResult = ReturnType<typeof useUploadWorkspaceLogoMutation>;
export type UploadWorkspaceLogoMutationResult = Apollo.MutationResult<UploadWorkspaceLogoMutation>;
export type UploadWorkspaceLogoMutationOptions = Apollo.BaseMutationOptions<UploadWorkspaceLogoMutation, UploadWorkspaceLogoMutationVariables>;
export const GetWorkspaceFromInviteHashDocument = gql`
    query GetWorkspaceFromInviteHash($inviteHash: String!) {
  findWorkspaceFromInviteHash(inviteHash: $inviteHash) {
    id
    displayName
    logo
  }
}
    `;

/**
 * __useGetWorkspaceFromInviteHashQuery__
 *
 * To run a query within a React component, call `useGetWorkspaceFromInviteHashQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspaceFromInviteHashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspaceFromInviteHashQuery({
 *   variables: {
 *      inviteHash: // value for 'inviteHash'
 *   },
 * });
 */
export function useGetWorkspaceFromInviteHashQuery(baseOptions: Apollo.QueryHookOptions<GetWorkspaceFromInviteHashQuery, GetWorkspaceFromInviteHashQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkspaceFromInviteHashQuery, GetWorkspaceFromInviteHashQueryVariables>(GetWorkspaceFromInviteHashDocument, options);
      }
export function useGetWorkspaceFromInviteHashLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkspaceFromInviteHashQuery, GetWorkspaceFromInviteHashQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkspaceFromInviteHashQuery, GetWorkspaceFromInviteHashQueryVariables>(GetWorkspaceFromInviteHashDocument, options);
        }
export type GetWorkspaceFromInviteHashQueryHookResult = ReturnType<typeof useGetWorkspaceFromInviteHashQuery>;
export type GetWorkspaceFromInviteHashLazyQueryHookResult = ReturnType<typeof useGetWorkspaceFromInviteHashLazyQuery>;
export type GetWorkspaceFromInviteHashQueryResult = Apollo.QueryResult<GetWorkspaceFromInviteHashQuery, GetWorkspaceFromInviteHashQueryVariables>;
export const GetWorkspaceMembersDocument = gql`
    query GetWorkspaceMembers {
  workspaceMembers: findManyWorkspaceMember {
    id
    user {
      id
      email
      avatarUrl
      firstName
      lastName
      displayName
    }
  }
}
    `;

/**
 * __useGetWorkspaceMembersQuery__
 *
 * To run a query within a React component, call `useGetWorkspaceMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspaceMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspaceMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWorkspaceMembersQuery(baseOptions?: Apollo.QueryHookOptions<GetWorkspaceMembersQuery, GetWorkspaceMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkspaceMembersQuery, GetWorkspaceMembersQueryVariables>(GetWorkspaceMembersDocument, options);
      }
export function useGetWorkspaceMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkspaceMembersQuery, GetWorkspaceMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkspaceMembersQuery, GetWorkspaceMembersQueryVariables>(GetWorkspaceMembersDocument, options);
        }
export type GetWorkspaceMembersQueryHookResult = ReturnType<typeof useGetWorkspaceMembersQuery>;
export type GetWorkspaceMembersLazyQueryHookResult = ReturnType<typeof useGetWorkspaceMembersLazyQuery>;
export type GetWorkspaceMembersQueryResult = Apollo.QueryResult<GetWorkspaceMembersQuery, GetWorkspaceMembersQueryVariables>;