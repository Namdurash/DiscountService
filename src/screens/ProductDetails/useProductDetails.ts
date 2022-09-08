import * as React from 'react';
import {useProductListingStore} from '../../store/productListing/hooks';
import * as Navigation from '@react-navigation/native';
import {Animated} from 'react-native';
import {TextManager} from '@managers/TextManager';

interface ProductDetailsRoute {
  key: string;
  name: string;
  params: {
    id: string;
  };
}

const SHOW_CURRENT_PRODUCT = 1;

export const useProductDetails = () => {
  const route = Navigation.useRoute<ProductDetailsRoute>();
  const {id = ''} = route.params || {};
  const {products} = useProductListingStore();
  const productId = Number(id);
  const product: ProductEntity.Product =
    products[productId - SHOW_CURRENT_PRODUCT];
  const liftAnim = React.useRef(new Animated.Value(400)).current;
  const priceWithDiscount = Math.round(
    product.price - (product.price / 100) * product.discountPercentage,
  );

  Animated.timing(liftAnim, {
    toValue: 0,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  return {
    title: product.title,
    description: product.description,
    price: TextManager.formatPrice(product.price),
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    stock: product.stock,
    brand: product.brand,
    category: product.category,
    thumbnail: product.thumbnail,
    images: product.images,
    liftAnim,
    priceWithDiscount,
  };
};
