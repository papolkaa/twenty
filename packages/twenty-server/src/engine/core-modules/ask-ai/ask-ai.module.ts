import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkspaceDataSourceModule } from 'src/engine/workspace-datasource/workspace-datasource.module';
import { UserModule } from 'src/engine/core-modules/user/user.module';
import { AskAIResolver } from 'src/engine/core-modules/ask-ai/ask-ai.resolver';
import { AskAIService } from 'src/engine/core-modules/ask-ai/ask-ai.service';
import { FeatureFlagEntity } from 'src/engine/core-modules/feature-flag/feature-flag.entity';
import { WorkspaceQueryRunnerModule } from 'src/engine/api/graphql/workspace-query-runner/workspace-query-runner.module';
import { LLMChatModelModule } from 'src/engine/integrations/llm-chat-model/llm-chat-model.module';
import { EnvironmentModule } from 'src/engine/integrations/environment/environment.module';
import { LLMTracingModule } from 'src/engine/integrations/llm-tracing/llm-tracing.module';
import { ObjectMetadataModule } from 'src/engine/metadata-modules/object-metadata/object-metadata.module';
import { WorkspaceSyncMetadataModule } from 'src/engine/workspace-manager/workspace-sync-metadata/workspace-sync-metadata.module';
import { TwentyORMModule } from 'src/engine/twenty-orm/twenty-orm.module';
@Module({
  imports: [
    WorkspaceDataSourceModule,
    WorkspaceQueryRunnerModule,
    UserModule,
    TypeOrmModule.forFeature([FeatureFlagEntity], 'core'),
    LLMChatModelModule,
    LLMTracingModule,
    EnvironmentModule,
    ObjectMetadataModule,
    WorkspaceSyncMetadataModule,
    TwentyORMModule, // Or TwentyORMManager?
  ],
  exports: [],
  providers: [AskAIResolver, AskAIService],
})
export class AskAIModule {}
