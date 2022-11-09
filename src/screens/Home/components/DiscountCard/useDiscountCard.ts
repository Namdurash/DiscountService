import * as React from 'react';
import * as Navigation from '@react-navigation/native';
import {Routes} from '../../../../navigation/routes.types';
import {useRemoveProduct} from '@store/productListing/hooks';

interface DiscountCardProps {
  id: string;
  product: ProductEntity.Product;
}

export const useDiscountCard = ({id, product}: DiscountCardProps) => {
  const navigation = Navigation.useNavigation();
  const removeProduct = useRemoveProduct(+id);
  const navigateToProductDetails = React.useCallback(() => {
    navigation.navigate(Routes.ProductDetails, {
      id,
    });
  }, [id, navigation]);
  const {price, discountPercentage, title} = product;
  const priceWithDiscount = Math.round(
    price - (price / 100) * discountPercentage,
  );
  const formattedTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;

  return {
    onGoToProductDetails: navigateToProductDetails,
    addProductToBasket: removeProduct,
    priceWithDiscount,
    formattedTitle,
  };
};
