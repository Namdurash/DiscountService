import {useProductListingStore} from '../../store/productListing/hooks';

export const useHome = () => {
  const {products} = useProductListingStore();

  return {
    products: products,
  };
};
