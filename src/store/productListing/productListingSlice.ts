import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../rootStore';

interface ProductListingState {
  products: Array<ProductEntity.Product>;
}

const initialState: ProductListingState = {
  products: [],
};

export const productListingSlice = createSlice({
  name: 'productListing',
  initialState,
  reducers: {
    getProductSuccess: (state, action: PayloadAction<ProductListingState>) => {
      state.products = action.payload.products;
    },
  },
});

export const {getProductSuccess} = productListingSlice.actions;
export const selectCount = (state: RootState) => state.productListingSlice;
export default productListingSlice.reducer;
