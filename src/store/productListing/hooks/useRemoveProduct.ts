import * as React from 'react';
import {useAppDispatch} from '../../hooks';
import {removeProduct} from '../removeProduct';

export const useRemoveProduct = (id: number) => {
  const dispatch = useAppDispatch();

  return React.useCallback(() => {
    dispatch(removeProduct(id));
  }, [dispatch, id]);
};
