import * as React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

interface DiscountCardProps {
  title: string;
  discountPercentage: string;
  amount: number;
  price: string;
}

export const DiscountCard: React.FC<DiscountCardProps> = ({
  title,
  discountPercentage,
  amount,
  price,
}) => {
  const amoutProducts = `${amount} amount`;

  return (
    <View style={styles.container}>
      <View style={styles.amountWrapper}>
        <Text style={styles.textAmount}>{amount}</Text>
      </View>
      <View style={styles.detailsWrapper}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.text}>{price}</Text>
      </View>
      <View style={styles.percentageWrapper}>
        <Text style={styles.textPercentage}>{discountPercentage}</Text>
      </View>
    </View>
  );
};
