import * as React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';

import {useDiscountCard} from './useDiscountCard';

import {styles} from './styles';
import {Button} from '@components/Button';

interface ProductCardProps {
  product: ProductEntity.Product;
}

export const DiscountCard: React.FC<ProductCardProps> = ({product}) => {
  const {stock, price, images, id} = product;
  const {
    onGoToProductDetails,
    priceWithDiscount,
    formattedTitle,
    addProductToBasket,
  } = useDiscountCard({id, product});
  const formattedPrice = `$${price}`;
  const formattedStock = `${stock} in stock`;
  const formattedDiscountPrice = `$${priceWithDiscount}`;

  return (
    <TouchableWithoutFeedback onPress={onGoToProductDetails}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={{uri: images[0]}} style={styles.image} />
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.textTitle}>{formattedTitle}</Text>
          <Text>
            <Text style={styles.textStock}>{formattedStock}</Text>
          </Text>
        </View>
        <View style={styles.percentageWrapper}>
          <Text style={styles.textPercentage}>{formattedDiscountPrice}</Text>
          <Text style={styles.textPrice}>{formattedPrice}</Text>
        </View>
        <Button
          title="TAKE A DISCOUNT"
          type="secondary"
          onPress={addProductToBasket}
          style={styles.button}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
