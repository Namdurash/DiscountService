import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {useDiscountCard} from './useDiscountCard';

import {styles} from './styles';

interface ProductCardProps {
  product: ProductEntity.Product;
}

export const DiscountCard: React.FC<ProductCardProps> = ({product}) => {
  const {title, stock, price, discountPercentage, images, id} = product;
  const {onGoToProductDetails} = useDiscountCard(id);
  const formattedPrice = `$${price}`;
  const formattedStock = `${stock} in stock`;
  const priceWithDiscount = Math.round((price * discountPercentage) / 100);
  const formattedDiscountPrice = `$${priceWithDiscount}`;

  return (
    <TouchableOpacity onPress={onGoToProductDetails}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={{uri: images[0]}} style={styles.image} />
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text>
            <Text style={styles.textStock}>{formattedStock}</Text>
          </Text>
        </View>
        <View style={styles.percentageWrapper}>
          <Text style={styles.textPercentage}>{formattedDiscountPrice}</Text>
          <Text style={styles.textPrice}>{formattedPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
