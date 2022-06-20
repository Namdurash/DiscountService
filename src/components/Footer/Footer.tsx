import * as React from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {Icon} from '@rneui/themed';

export const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="home" type="fontisto" color="#FFCCBB" />
      <Icon name="nav-icon-list-a" type="fontisto" color="#FFCCBB" />
      <Icon name="move-h-a" type="fontisto" color="#FFCCBB" />
    </View>
  );
};
