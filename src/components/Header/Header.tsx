import * as React from 'react';
import {Text, TextInput, View} from 'react-native';
import {Icon} from '@rneui/themed';

import {styles} from './styles';

interface HeaderProps {
  headerHeight?: number;
  isSearchInput?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  headerHeight,
  isSearchInput,
}) => {
  const headerHeightStyle = {
    height: headerHeight,
  };

  return (
    <View style={[styles.container, headerHeightStyle]}>
      <Text style={styles.text}>Discount App</Text>
      {isSearchInput && (
        <View style={styles.searchBar}>
          <Icon name="search" type="fontisto" />
          <TextInput placeholder="What are you looking for?" />
        </View>
      )}
    </View>
  );
};
