import * as React from 'react';
import {useAppDispatch} from '../../hooks';
import {getProducts} from '../actionCreator';

export const useGetProductListing = () => {
  const dispatch = useAppDispatch();

  return dispatch(getProducts());
};
