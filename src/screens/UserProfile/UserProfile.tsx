import * as React from 'react';
import {View, Text} from 'react-native';

import {Icon} from '@rneui/themed';

import {styles} from './styles';

import {Footer} from '../../components/Footer/Footer';

export const UserProfile: React.FC = () => {
  return (
    <>
      <View style={styles.header}>
        <Icon
          name="close-a"
          type="fontisto"
          size={20}
          style={styles.closeIcon}
        />
        <Text style={styles.textHeader}>Kyrylo Korotych</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>My Discounts</Text>
          <Icon name="angle-right" type="fontisto" size={20} />
        </View>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Help</Text>
          <Icon name="angle-right" type="fontisto" size={20} />
        </View>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Terms and Conditions</Text>
          <Icon name="angle-right" type="fontisto" size={20} />
        </View>
      </View>
      <Text style={styles.signOutText}>Sign me out</Text>
      <Footer />
    </>
  );
};
