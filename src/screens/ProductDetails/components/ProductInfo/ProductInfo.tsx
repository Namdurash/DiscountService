import * as React from 'react';
import {View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {Text} from '@ui/Text';
import {colors} from '@ui/color';
import {styles} from './styles';
import {Button} from '@components/Button';

interface ProductInfoProps {
  title: string;
  price: string;
  description: string;
  brand: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  priceWithDiscount: number;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  price,
  description,
  discountPercentage,
  rating,
  stock,
  priceWithDiscount,
}) => {
  return (
    <>
      <View style={styles.contentTop}>
        <Text family="ptSans" type="Bold" size={38} style={styles.title}>
          {title}
        </Text>
        <Text
          family="ptSans"
          type="Bold"
          size={28}
          style={styles.priceWithDiscount}>
          {`$${priceWithDiscount}`}
        </Text>
      </View>
      <View style={styles.ratingRow}>
        <Rating
          imageSize={32}
          ratingCount={5}
          type="custom"
          startingValue={rating}
          ratingColor={colors.middleOrange}
          tintColor={colors.mistyRose}
          ratingBackgroundColor={colors.lightBrown}
          readonly
          fractions={20}
        />
        <Text family="ptSans" type="Bold" size={16} style={styles.price}>
          {price}
        </Text>
      </View>
      <Text family="ptSans" type="Bold" size={16} style={styles.description}>
        {description}
      </Text>
      <View style={styles.contentBottom}>
        <Text family="ptSans" type="Bold" size={18}>
          In stock: &nbsp;
          <Text family="ptSans" type="Bold" size={18}>
            {stock}
          </Text>
        </Text>
        <Text family="ptSans" type="Bold" size={18}>
          Discount: &nbsp;
          <Text family="ptSans" type="Bold" size={18}>
            {`${discountPercentage}%`}
          </Text>
        </Text>
      </View>
      <Button
        title="Add discount to your profile"
        type="primary"
        style={styles.button}
      />
    </>
  );
};
