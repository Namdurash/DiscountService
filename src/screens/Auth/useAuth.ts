import * as React from 'react';
import {useGetProductListing} from '../../store/productListing/hooks';
import {Routes} from '../../navigation/routes.types';
import * as Navigation from '@react-navigation/native';

export const useAuth = () => {
  const navigation = Navigation.useNavigation();
  useGetProductListing();

  const handleGoHome = React.useCallback(() => {
    navigation.navigate(Routes.Home);
  }, []);

  return {
    onGoHome: handleGoHome,
  };
};
