import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Routes} from '../../navigation/routes.types';

import {styles} from './styles';
import {Icon} from '@rneui/themed';

interface FooterProps {
  navigation: any;
}

export class Footer extends React.Component<FooterProps> {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Home)}>
          <Icon name="home" type="fontisto" color="#FFCCBB" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Basket)}>
          <Icon name="nav-icon-list-a" type="fontisto" color="#FFCCBB" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.UserProfile)}>
          <Icon name="move-h-a" type="fontisto" color="#FFCCBB" />
        </TouchableOpacity>
      </View>
    );
  }
}
