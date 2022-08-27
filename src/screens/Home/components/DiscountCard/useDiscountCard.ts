import * as React from 'react';
import * as Navigation from '@react-navigation/native';
import {Routes} from '../../../../navigation/routes.types';

export const useDiscountCard = (id: string) => {
  const navigation = Navigation.useNavigation();
  console.log(id);
  const navigateToProductDetails = React.useCallback(() => {
    console.log('Work');
    navigation.navigate(Routes.ProductDetails, {
      id,
    });
  }, []);

  return {
    onGoToProductDetails: navigateToProductDetails,
  };
};
