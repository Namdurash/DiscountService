import Axios from 'axios';
import {AppDispatch} from '../rootStore';
import {productListingSlice} from './productListingSlice';

interface ProductListingResponse {
  products: Array<ProductEntity.Product>;
}

const getProducts = () => async (dispatch: AppDispatch) => {
  try {
    const products = await Axios.get<ProductListingResponse>(
      'https://dummyjson.com/products',
    );
    dispatch(productListingSlice.actions.getProductSuccess(products.data));
  } catch (e) {}
};
