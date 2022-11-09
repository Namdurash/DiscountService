import {useAppSelector} from '../../hooks';

export const useBasketProductsStore = () => {
  return useAppSelector(state => state.productListingSlice.basketProducts);
};
