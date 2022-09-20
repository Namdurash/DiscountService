import Axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export interface ProductListingResponse {
  products: Array<ProductEntity.Product>;
}

export const fetchProducts: any = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await Axios.get<ProductListingResponse>(
      'https://dummyjson.com/products',
    );

    return response;
  },
);
