import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { CompanyModule } from './company/company.module';
import { PersonModule } from './person/person.module';
import { PipelineModule } from './pipeline/pipeline.module';
import { AuthModule } from './auth/auth.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { FileModule } from './file/file.module';
import { EnvironmentService } from 'src/integrations/environment/environment.service';

@Module({
  imports: [
    AuthModule.forRoot(),
    UserModule,
    CommentModule,
    CompanyModule,
    PersonModule,
    PipelineModule,
    WorkspaceModule,
    AnalyticsModule,
    FileModule,
  ],
  exports: [
    AuthModule.forRoot(),
    UserModule,
    CommentModule,
    CompanyModule,
    PersonModule,
    PipelineModule,
    WorkspaceModule,
    AnalyticsModule,
  ],
})
export class CoreModule {}
