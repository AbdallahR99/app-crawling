import { Product } from '@models/product/product.model';
import { suffixName } from 'src/core/config';
import { data } from 'src/core/data/data';
import { dataToProducts } from 'src/core/util/map-data';
import {
  toFormattedJsonString,
  writeJsonToFilePromise,
} from 'src/core/util/utils';

export async function getData(): Promise<Product[]> {
  return await dataToProducts(data);
}

export async function saveData(data: Product[]): Promise<void> {
  const path = 'data';
  const fileName = `data_${suffixName}.json`;
  const dataString = toFormattedJsonString(data);
  return await writeJsonToFilePromise(path, fileName, dataString);
}

export async function generateData(): Promise<string> {
  const data = await getData();
  await saveData(data);
  return toFormattedJsonString(data);
}
