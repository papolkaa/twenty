import { createReadStream, existsSync } from 'fs';
import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { Readable } from 'stream';

import { StorageDriver } from './interfaces/storage-driver.interface';

export interface LocalDriverOptions {
  storagePath: string;
}

export class LocalDriver implements StorageDriver {
  private options: LocalDriverOptions;

  constructor(options: LocalDriverOptions) {
    this.options = options;
  }

  async createFolder(path: string) {
    if (existsSync(path)) {
      return;
    }

    return fs.mkdir(path, { recursive: true });
  }

  async write(params: {
    file: Buffer | Uint8Array | string;
    name: string;
    folder: string;
    mimeType: string | undefined;
  }): Promise<void> {
    const filePath = join(
      `${this.options.storagePath}/`,
      params.folder,
      params.name,
    );
    const folderPath = dirname(filePath);

    await this.createFolder(folderPath);

    await fs.writeFile(filePath, params.file);
  }

  async delete(params: {
    folderPath: string;
    filename?: string;
  }): Promise<void> {
    const filePath = join(
      `${this.options.storagePath}/`,
      params.folderPath,
      params.filename || '',
    );

    await fs.rm(filePath, { recursive: true });
  }

  async read(params: {
    folderPath: string;
    filename: string;
  }): Promise<Readable> {
    const filePath = join(
      `${this.options.storagePath}/`,
      params.folderPath,
      params.filename,
    );

    return createReadStream(filePath);
  }

  async move(params: {
    from: { folderPath: string; filename: string };
    to: { folderPath: string; filename: string };
  }): Promise<void> {
    const fromPath = join(
      `${this.options.storagePath}/`,
      params.from.folderPath,
      params.from.filename,
    );

    const toPath = join(
      `${this.options.storagePath}/`,
      params.to.folderPath,
      params.to.filename,
    );

    await this.createFolder(dirname(toPath));

    await fs.rename(fromPath, toPath);
  }
}
