import { ModuleMetadata, FactoryProvider } from '@nestjs/common';

export enum LLMChatModelDriver {
  OpenAI = 'openai',
}

export interface LLMChatModelModuleOptions {
  type: LLMChatModelDriver;
}

export type LLMChatModelModuleAsyncOptions = {
  useFactory: (...args: any[]) => LLMChatModelModuleOptions;
} & Pick<ModuleMetadata, 'imports'> &
  Pick<FactoryProvider, 'inject'>;
