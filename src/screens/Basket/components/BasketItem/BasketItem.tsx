import * as React from 'react';
import {Text, View} from 'react-native';

import {Icon} from '@rneui/themed';

import {styles} from './styles';

interface BasketItemProps {
  title: string;
}

export const BasketItem: React.FC<BasketItemProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Icon name="angle-right" type="fontisto" />
    </View>
  );
};
