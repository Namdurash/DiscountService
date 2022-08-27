import * as React from 'react';
import {View, Text} from 'react-native';
import {useProductDetails} from './useProductDetails';

export const ProductDetails: React.FC = () => {
  const {
    title,
    price,
    description,
    brand,
    discountPercentage,
    rating,
    stock,
    category,
    images,
  } = useProductDetails();

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
