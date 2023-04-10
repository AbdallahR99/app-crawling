import { Data, Item } from '@models/data.model';
import { Product } from '@models/product/product.model';
import { baseUrl, city, currency, productCategory } from '../config';
import {
  toFormattedJsonString,
  urlToBase64,
  writeJsonToFilePromise,
} from './utils';
import * as catsBeds from '@data/priced/data_dubaipetfood_Cats-Beds_1680841121912_priced.json';
import * as catsFoodsTreats from '@data/priced/data_dubaipetfood_Cats-Foods_treats_1680840220763_priced.json';
import * as catsOthersAccessories from '@data/priced/data_dubaipetfood_Cats-Others_accessories_1680802515504_priced.json';
import * as catsOthers from '@data/priced/data_dubaipetfood_Cats-Others_1680790107509_priced.json';
import * as catsToiletriesTrainingCleaning from '@data/priced/data_dubaipetfood_Cats-Toiletries_training-cleaning_1680803087367_priced.json';
import * as catsToys from '@data/priced/data_dubaipetfood_Cats-Toys_1680803813933_priced.json';
import { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } from 'node-html-markdown';

export async function dataItemToProduct(
  item: Item,
  price: number,
): Promise<Product> {
  const product = new Product();
  product.id = 0;
  product.dataId = item.id;
  product.productName = item.displayName;
  product.productDescription =
    item.description ??
    (() => {
      const description = NodeHtmlMarkdown.translate(
        /* html */ `${item.longDescription}`,
      );
      return description;
    })();
  product.productPrice = price;
  product.cityId = city.id;
  product.categoryId = 0;
  product.productCategoryId = productCategory.id;
  product.currencyId = currency.id;
  product.productImageFiles = [];
  for (const image of item.fullImageURLs) {
    const base64 = await urlToBase64(`${baseUrl}${image}`);
    product.productImageFiles.push(base64);
  }
  product.originalData = JSON.stringify(item);
  return product;
}

export async function dataToProducts(data: Data): Promise<Product[]> {
  const products = [];

  try {
    for (const item of data.items) {
      const price =
        item.salePrice ??
        (() => {
          if (item.childSKUs?.length === 0) {
            return item.listPrice;
          }
          return item.childSKUs[0].salePrice;
        })();
      const product = await dataItemToProduct(item, price);
      const index = data.items?.indexOf(item);
      products.push(product);
      console.log(
        `Product: ${product.productName} - ${index + 1}/${
          data.items?.length ?? 0
        }`,
      );
      // if (item.childSKUs) {
      //   for (const childItem of item.childSKUs) {
      //     const childProduct = await dataItemToProduct(childItem as Item);
      //     products.push(childProduct);
      //   }
      //   console.log(`Product: ${product.productName}`);
      // }
    }
    // await data.items?.forEach(async (item, index) => {
    //   const product = await dataItemToProduct(item);
    //   products.push(product);
    //   console.log(
    //     `Product: ${product.productName} - ${index + 1}/${
    //       data.items?.length ?? 0
    //     }`,
    //   );
    // });
  } catch (error) {
    console.error(error);
    return products;
  }

  // for (const item of data.items!) {
  //   const product = await dataItemToProduct(item);
  //   products.push(product);
  //   console.log(`Product: ${product.productName}`);
  //   // if (item.childSKUs) {
  //   //   for (const childItem of item.childSKUs) {
  //   //     const childProduct = await dataItemToProduct(childItem as Item);
  //   //     products.push(childProduct);
  //   //   }
  //   //   console.log(`Product: ${product.productName}`);
  //   // }
  // }
  return products;
}

export async function mapOldData(): Promise<string> {
  // return `${(catsBeds as Product[]).length}`
  // const fileName =
  //   'data_dubaipetfood_Cats-Foods_treats_1680840220763.json';
  // const data: Product[] = catsFoodsTreats as Product[];

  const allData: Product[] = [
    ...(catsOthersAccessories as Product[]),
    ...(catsOthers as Product[]),
    ...(catsToys as Product[]),
  ];

  // remove duplicates
  const uniqueData = allData.filter(
    (v, i, a) => a.findIndex((t) => t.dataId === v.dataId) === i,
  );

  // split array into chunks
  const chunkSize = 50;
  const chunks = [];
  for (let i = 0; i < uniqueData.length; i += chunkSize) {
    const data = uniqueData.slice(i, i + chunkSize);
    const dataString = toFormattedJsonString(data);
    chunks.push(dataString);
  }

  for (const chunk of chunks) {
    const index = chunks.indexOf(chunk);
    await writeJsonToFilePromise(
      'data/chinked',
      `data_priced_new_${index}.json`,
      chunk,
    );
  }
  return 'done new';

  for (const d of [
    // {
    //   data: catsBeds as Product[],
    //   fileName: 'data_dubaipetfood_Cats-Beds_1680841121912.json',
    // },
    // {
    //   data: catsFoodsTreats as Product[],
    //   fileName: 'data_dubaipetfood_Cats-Foods_treats_1680840220763.json',
    // },
    {
      data: catsOthersAccessories as Product[],
      fileName: 'data_dubaipetfood_Cats-Others_accessories_1680802515504.json',
    },
    {
      data: catsOthers as Product[],
      fileName: 'data_dubaipetfood_Cats-Others_1680790107509.json',
    },
    // {
    //   data: catsToiletriesTrainingCleaning as Product[],
    //   fileName:
    //     'data_dubaipetfood_Cats-Toiletries_training-cleaning_1680803087367.json',
    // },
    {
      data: catsToys as Product[],
      fileName: 'data_dubaipetfood_Cats-Toys_1680803813933.json',
    },
  ]) {
    // split array into chunks
    const chunkSize = 65;
    const chunks = [];
    for (let i = 0; i < d.data.length; i += chunkSize) {
      const data = d.data.slice(i, i + chunkSize);
      const dataString = toFormattedJsonString(data);
      chunks.push(dataString);
    }

    for (const chunk of chunks) {
      const index = chunks.indexOf(chunk);
      await writeJsonToFilePromise(
        'data/chinked',
        `${d.fileName.replace('.json', `_priced_new_${index}.json`)}`,
        chunk,
      );
    }

    // for (const product of d.data) {
    // //   const originalData: Item = JSON.parse(product.originalData);
    // //   product.productPrice =
    // //     originalData.salePrice ??
    // //     (() => {
    // //       if (originalData.childSKUs?.length === 0) {
    // //         return originalData.listPrice;
    // //       }
    // //       return (
    // //         originalData.childSKUs[0].salePrice ??
    // //         originalData.listPrice ??
    // //         originalData.childSKUs[0].listPrice
    // //       );
    // //     })();
    // // }
    // // const data = d.data?.filter((p) => p.productPrice);
    // // const dataString = toFormattedJsonString(data);
    // await writeJsonToFilePromise(
    //   'data',
    //   `${d.fileName.replace('.json', '_priced_new.json')}`,
    //   dataString,
    // );
  }

  return 'done';
  // for (const product of data) {
  //   product.originalData = product.adminNote;
  //   const orginalData: Item = JSON.parse(product.originalData);
  //   product.dataId = orginalData.id;
  //   product.productPrice =
  //     orginalData.salePrice ??
  //     (() => {
  //       if (orginalData.childSKUs?.length === 0) {
  //         return orginalData.listPrice;
  //       }
  //       return orginalData.childSKUs[0].salePrice;
  //     })();
  //   product.productDescription =
  //     orginalData.description ??
  //     (() => {
  //       const description = NodeHtmlMarkdown.translate(
  //         /* html */ `${orginalData.longDescription}`,
  //       );
  //       return description;
  //     })();
  //   product.adminNote = null;
  //   // product.productCategoryId = 6;
  //   product.isWhatsApp = false;
  //   product.isMobile = false;
  //   product.isEmail = false;
  //   console.log(orginalData.displayName);
  // }
  // const dataString = toFormattedJsonString(data);
  // await writeJsonToFilePromise('data', `${fileName}`, dataString);
  // return dataString;
  // return import(`@data/${fileName}`).then(async (data: Product[]) => {
  //   for (const product of jsonData as Product[]) {
  //     product.originalData = product.adminNote;
  //     const orginalData: Item = JSON.parse(product.adminNote);
  //     product.dataId = orginalData.id;
  //     product.productPrice =
  //       orginalData.salePrice ??
  //       (() => {
  //         if (orginalData.childSKUs?.length === 0) {
  //           return orginalData.listPrice;
  //         }
  //         return orginalData.childSKUs[0].salePrice;
  //       })();
  //     product.adminNote = null;
  //     product.productCategoryId = 11;
  //     console.log(orginalData.displayName);
  //   }
  //   const dataString = toFormattedJsonString(data);
  //   await writeJsonToFilePromise(
  //     'data',
  //     fileName?.replace('Cats-Cats', 'Cats-Others'),
  //     dataString,
  //   );
  //   return dataString;
  // });
  // const data = require('../../data/data.json');
  // const products = await dataToProducts(data);
  // console.log(products);
}
