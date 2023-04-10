// To parse this data:
//
//   import { Convert, Data } from "./file";
//
//   const data = Convert.toData(json);

export interface Data {
  totalResults?: number;
  offset?:       number;
  limit?:        number;
  links?:        Link[];
  category?:     Category;
  items?:        Item[];
}

export interface Category {
  longDescription?: null;
  route?:           string;
  categoryImages?:  any[];
  displayName?:     string;
  repositoryId?:    ID;
  active?:          boolean;
  description?:     null;
  id?:              ID;
}

export enum ID {
  Blog = "blog",
  Cat10001 = "cat10001",
  Health = "health",
  UaeArticleCat00001 = "UAE-ARTICLE-CAT00001",
  UaeArticles = "UAE-ARTICLES",
}

export interface Item {
  x_para10?:                     null | string;
  x_promotion_details?:          null;
  x_para9Position?:              Position;
  x_image4Position?:             Position;
  orderLimit?:                   null;
  listPrices?:                   ListPrices;
  type?:                         Type;
  x_isPriceGuaranteed?:          boolean | null;
  shippable?:                    boolean;
  primaryImageAltText?:          string;
  x_para5Position?:              Position;
  id?:                           string;
  x_articleAuthor?:              XArticleAuthor | null;
  brand?:                        null;
  parentCategories?:             ParentCategory[];
  height?:                       null;
  defaultProductListingSku?:     null;
  assetable?:                    boolean;
  unitOfMeasure?:                null;
  targetAddOnProducts?:          any[];
  x_additionalDocsUrl?:          null;
  seoUrlSlugDerived?:            string;
  active?:                       boolean;
  thumbImageURLs?:               string[];
  x_noOfReviews?:                number;
  x_productOnSale?:              XDeal | null;
  route?:                        string;
  relatedArticles?:              any[];
  mediumImageURLs?:              string[];
  primarySourceImageURL?:        string;
  sourceImageURLs?:              string[];
  x_paratitle6?:                 null | string;
  x_paratitle5?:                 null | string;
  primaryThumbImageURL?:         string;
  x_paratitle8?:                 null | string;
  x_paratitle7?:                 null | string;
  x_paratitle2?:                 null | string;
  x_paratitle1?:                 null | string;
  directCatalogs?:               any[];
  nonreturnable?:                boolean;
  x_paratitle4?:                 null | string;
  displayName?:                  string;
  x_paratitle3?:                 null | string;
  x_image1Position?:             Position;
  x_paratitle10?:                null | string;
  primaryFullImageURL?:          string;
  x_para6Position?:              Position;
  x_breedSize?:                  XLifeStage | null;
  productVariantOptions?:        any[];
  x_paratitle9?:                 null | string;
  primaryLargeImageURL?:         string;
  x_isExclusive?:                boolean | null;
  x_dpfBrand?:                   null;
  x_para2Position?:              Position;
  x_image5Position?:             Position;
  x_specifications?:             null;
  saleVolumePrices?:             ListPrices;
  x_mainImage?:                  null | string;
  childSKUs?:                    ChildSKUs[];
  x_para10Position?:             Position;
  salePrice?:                    null;
  x_FAQ?:                        null;
  x_image10?:                    null;
  x_image8Position?:             Position;
  x_sortPriority?:               number;
  x_petType?:                    string;
  notForIndividualSale?:         boolean;
  width?:                        null;
  derivedListPriceFrom?:         DerivedEFrom;
  defaultParentCategory?:        null;
  listPrice?:                    null;
  x_product_stockStatus?:        boolean;
  x_articleCreationDate?:        Date | null;
  x_image2Position?:             Position;
  listVolumePrice?:              null;
  excludeFromSitemap?:           boolean;
  relatedProducts?:              null;
  x_petBreed?:                   null | string;
  x_image3?:                     null;
  onlineOnly?:                   boolean;
  x_image2?:                     null | string;
  x_image1?:                     null;
  x_fishType?:                   null;
  x_neverOutOfStock?:            boolean;
  largeImageURLs?:               string[];
  x_para7Position?:              Position;
  x_para3Position?:              Position;
  listVolumePrices?:             ListPrices;
  addOnProducts?:                any[];
  x_installDocUrl?:              null;
  derivedSalePriceFrom?:         DerivedEFrom;
  x_image6Position?:             Position;
  primaryMediumImageURL?:        string;
  x_videoURL?:                   null;
  weight?:                       null;
  x_image9Position?:             Position;
  x_para1?:                      null | string;
  x_para2?:                      null | string;
  creationDate?:                 Date;
  x_para3?:                      null | string;
  parentCategoryIdPath?:         ParentCategoryIDPath;
  x_para4?:                      null | string;
  x_para5?:                      null | string;
  x_para6?:                      null | string;
  x_para7?:                      null | string;
  x_para8?:                      null | string;
  x_image9?:                     null;
  x_para9?:                      null | string;
  x_image8?:                     null;
  x_image7?:                     null;
  x_image6?:                     null;
  x_image5?:                     null;
  x_image4?:                     null | string;
  x_googleProductCategory?:      null;
  parentCategory?:               ParentCategory;
  primarySmallImageURL?:         string;
  x_feedSizeSystem?:             null;
  avgCustRating?:                null;
  x_para8Position?:              Position;
  longDescription?:              null | string;
  x_image3Position?:             Position;
  x_videoDescription?:           null;
  description?:                  string;
  salePrices?:                   ListPrices;
  x_lifeStage?:                  XLifeStage;
  smallImageURLs?:               string[];
  derivedShippingSurchargeFrom?: DerivedEFrom;
  x_promotiondetails?:           null;
  x_image7Position?:             Position;
  shippingSurcharges?:           ListPrices;
  x_autoShipEligible?:           boolean | null;
  x_para4Position?:              Position;
  saleVolumePrice?:              null;
  primaryImageTitle?:            string;
  relatedMediaContent?:          any[];
  x_image10Position?:            Position;
  x_averageRating?:              number;
  fullImageURLs?:                string[];
  length?:                       null;
  x_para1Position?:              Position;
  derivedDirectCatalogs?:        any[];
  x_onSale?:                     boolean;
  variantValuesOrder?:           ProductImagesMetadatum | null;
  repositoryId?:                 string;
  shippingSurcharge?:            null;
  productImagesMetadata?:        ProductImagesMetadatum[];
  x_deal?:                       XDeal | null;
  configurable?:                 boolean;
}

export interface ChildSKUs {
  dynamicPropertyMapLong?:       DynamicPropertyMapLong;
  bundleLinks?:                  any[];
  largeImage?:                   null;
  smallImage?:                   null;
  listVolumePrice?:              null;
  onlineOnly?:                   boolean;
  listPrices?:                   ListPrices;
  configurationMetadata?:        any[];
  largeImageURLs?:               any[];
  x_skuCreationDate?:            null;
  productLine?:                  null;
  listVolumePrices?:             ListPrices;
  derivedSalePriceFrom?:         DerivedEFrom;
  model?:                        null;
  barcode?:                      null;
  salePriceEndDate?:             null;
  images?:                       any[];
  unitOfMeasure?:                null;
  primaryMediumImageURL?:        null;
  dynamicPropertyMapBigString?:  ProductImagesMetadatum;
  active?:                       boolean;
  x_promotionDetails?:           null;
  thumbImageURLs?:               any[];
  mediumImageURLs?:              any[];
  primarySourceImageURL?:        null;
  x_description?:                null;
  sourceImageURLs?:              any[];
  primarySmallImageURL?:         null;
  x_autoShipPrice?:              number;
  x_overridePromotionalMessage?: null;
  productFamily?:                null;
  primaryThumbImageURL?:         null;
  nonreturnable?:                boolean;
  x_loyaltyLevel?:               XLoyaltyLevel;
  displayName?:                  string;
  x_promotionOverrideRedLabel?:  null;
  salePrices?:                   ListPrices;
  primaryFullImageURL?:          null;
  productListingSku?:            null;
  x_minimumPurchase?:            null;
  primaryLargeImageURL?:         null;
  derivedOnlineOnly?:            boolean;
  smallImageURLs?:               any[];
  derivedShippingSurchargeFrom?: DerivedEFrom;
  shippingSurcharges?:           ListPrices;
  thumbnailImage?:               null;
  saleVolumePrices?:             ListPrices;
  saleVolumePrice?:              null;
  salePriceStartDate?:           null;
  quantity?:                     null;
  salePrice?:                    null;
  fullImageURLs?:                any[];
  x_stockStatus?:                boolean;
  x_isonSale?:                   XDeal;
  variantValuesOrder?:           ProductImagesMetadatum;
  soldAsPackage?:                boolean;
  listingSKUId?:                 null;
  repositoryId?:                 string;
  derivedListPriceFrom?:         DerivedEFrom;
  shippingSurcharge?:            null;
  x_costPrice?:                  null;
  configurable?:                 boolean;
  listPrice?:                    null;
}

export enum DerivedEFrom {
  Aed = "aed",
}

export interface ProductImagesMetadatum {
}

export interface DynamicPropertyMapLong {
  sku_x_stockStatus?: number;
}

export interface ListPrices {
  aed?:            null;
  loyaltyProgram?: number | null;
}

export enum XDeal {
  N = "N",
}

export enum XLoyaltyLevel {
  Level2 = "LEVEL2",
}

export interface ParentCategory {
  repositoryId?:          ID;
  fixedParentCategories?: ParentCategory[];
}

export enum ParentCategoryIDPath {
  Cat10001BlogHealth = "cat10001>blog>health",
  Cat10001UAEARTICLESUAEARTICLECAT00001 = "cat10001>UAE-ARTICLES>UAE-ARTICLE-CAT00001",
}

export enum Type {
  Article = "Article",
}

export enum XArticleAuthor {
  DubaiPetFood = "DubaiPetFood",
  ThePetShop = "The Pet Shop",
}

export enum XLifeStage {
  All = "All",
  Kitten = "Kitten",
  Senior = "Senior",
}

export enum Position {
  Center = "Center",
}

export interface Link {
  rel?:  string;
  href?: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toData(json: string): Data {
      return JSON.parse(json);
  }

  public static dataToJson(value: Data): string {
      return JSON.stringify(value);
  }
}
