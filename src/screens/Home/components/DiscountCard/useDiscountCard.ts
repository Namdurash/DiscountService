import * as React from 'react';
import * as Navigation from '@react-navigation/native';
import {Routes} from '../../../../navigation/routes.types';

interface DiscountCardProps {
  id: string;
  product: ProductEntity.Product;
}

export const useDiscountCard = ({id, product}: DiscountCardProps) => {
  const navigation = Navigation.useNavigation();
  console.log(id);
  const navigateToProductDetails = React.useCallback(() => {
    console.log('Work');
    navigation.navigate(Routes.ProductDetails, {
      id,
    });
  }, []);
  const {price, discountPercentage, title} = product;
  const priceWithDiscount = Math.round(
    price - (price / 100) * discountPercentage,
  );
  const formattedTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;

  return {
    onGoToProductDetails: navigateToProductDetails,
    priceWithDiscount,
    formattedTitle,
  };
};
