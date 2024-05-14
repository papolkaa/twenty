import { Controller, Get, Delete, Post, Put, Req, Res } from '@nestjs/common';

import { Request, Response } from 'express';

import { MetadataService } from 'src/engine/api/rest/services/metadata.service';
import { cleanGraphQLResponse } from 'src/engine/api/rest/utils/clean-graphql-response.utils';

@Controller('rest/metadata/*')
export class ApiRestMetadataController {
  constructor(private readonly apiRestService: MetadataService) {}

  @Get()
  async handleApiGet(@Req() request: Request, @Res() res: Response) {
    const result = await this.apiRestService.get(request);

    res.send(cleanGraphQLResponse(result.data));
  }

  @Delete()
  async handleApiDelete(@Req() request: Request, @Res() res: Response) {
    const result = await this.apiRestService.delete(request);

    res.send(cleanGraphQLResponse(result.data));
  }

  @Post()
  async handleApiPost(@Req() request: Request, @Res() res: Response) {
    const result = await this.apiRestService.create(request);

    res.send(cleanGraphQLResponse(result.data));
  }

  @Put()
  async handleApiPut(@Req() request: Request, @Res() res: Response) {
    const result = await this.apiRestService.update(request);

    res.send(cleanGraphQLResponse(result.data));
  }
}
