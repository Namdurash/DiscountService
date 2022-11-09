import {useAppSelector} from '../../hooks';

export const useProductListingStore = () => {
  return useAppSelector(state => state.productListingSlice.products);
};
