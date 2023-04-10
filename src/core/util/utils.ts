import * as fs from 'fs';
import { promisify } from 'util';
import fetch from 'node-fetch';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path/posix';
import { fromBuffer } from 'file-type';

export async function urlToBase64(url) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  const mime = (await fromBuffer(buffer)).mime;
  const base64 = buffer.toString('base64');

  return `data:${mime};base64,${base64}`;
}

export function toFormattedJsonString(obj: any): string {
  return JSON.stringify(obj, null, 4);
}

export function writeJsonToFile(
  filePath = 'data',
  fileName: string,
  data: any,
): void {
  const fullPath = `${filePath}/${fileName}`;
  fs.writeFile(fullPath, data, function (err) {
    if (err) {
      console.log(`Error writing file ${fileName}: `, err);
    } else {
      console.log(`Successfully wrote file ${fileName}`);
    }
  });
}
const writeFileAsync = promisify(fs.writeFile);

export async function writeJsonToFilePromise(
  filePath = 'data',
  fileName: string,
  data: string,
): Promise<void> {
  try {
    await writeFile(join(process.cwd(), filePath, fileName), data);
    // await writeFileAsync(filePath, fileName, data);
    console.log('File written successfully');
  } catch (error) {
    console.error(error);
  }
}
