import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productListingSlice from './productListing/productListingSlice';

const rootReducer = combineReducers({
  productListingSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
