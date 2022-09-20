import {useAppDispatch} from '../../hooks';
import {fetchProducts} from '../fetchProducts';

export const useGetProductListing = () => {
  const dispatch = useAppDispatch();

  return dispatch(fetchProducts());
};
