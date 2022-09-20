import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../rootStore';
import {fetchProducts} from './fetchProducts';

interface ProductListingState {
  products: Array<ProductEntity.Product>;
}

const initialState: ProductListingState = {
  products: [],
};

export const productListingSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload.data.products;
    },
  },
});

export const selectCount = (state: RootState) => state.productListingSlice;
export default productListingSlice.reducer;
