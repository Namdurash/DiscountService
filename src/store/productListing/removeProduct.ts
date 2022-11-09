import Axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export interface ProductListingResponse {
  products: Array<ProductEntity.Product>;
}

export const removeProduct: any = createAsyncThunk(
  'products/removeProduct',
  async (id: number) => {
    const response = await Axios.delete(`https://dummyjson.com/products/${id}`);

    return response;
  },
);
