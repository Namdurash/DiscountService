import Axios from 'axios';

// export interface ProductListingResponse {
//   products: Array<ProductEntity.Product>;
// }

export const getProductListing = (): Promise<ProductListingResponse> => {
  return Axios.get('https://dummyjson.com/products');
};
