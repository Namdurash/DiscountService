import * as React from 'react';
import {View, Text} from 'react-native';
import {Header} from '../../components';
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
      <Header />
      <Text>{title}</Text>
    </View>
  );
};
