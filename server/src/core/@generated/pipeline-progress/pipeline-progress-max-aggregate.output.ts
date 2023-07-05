import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PipelineProgressableType } from '../prisma/pipeline-progressable-type.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class PipelineProgressMaxAggregate {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @Field(() => String, {nullable:true})
    pipelineId?: string;

    @Field(() => String, {nullable:true})
    pipelineStageId?: string;

    @Field(() => PipelineProgressableType, {nullable:true})
    progressableType?: keyof typeof PipelineProgressableType;

    @Field(() => String, {nullable:true})
    progressableId?: string;

    @HideField()
    workspaceId?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
