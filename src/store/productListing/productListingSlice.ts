import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../rootStore';
import {fetchProducts} from './fetchProducts';
import {removeProduct} from './removeProduct';

interface ProductListingState {
  products: Array<ProductEntity.Product>;
  basketProducts: Array<ProductEntity.Product | undefined>;
}

const initialState: ProductListingState = {
  products: [],
  basketProducts: [],
};

export const productListingSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload.data.products;
    },
    [removeProduct.fulfilled]: (state, action) => {
      const itemId = action.payload.data.id;
      state.basketProducts.push(
        state.products.find(item => item.id === itemId),
      );
      state.products = state.products.filter(item => item.id !== itemId);
    },
  },
});

export const selectCount = (state: RootState) => state.productListingSlice;
export default productListingSlice.reducer;
