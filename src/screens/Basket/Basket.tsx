import * as React from 'react';
import {ScrollView} from 'react-native';

import {styles} from './styles';

import {Header} from '../../components/Header/Header';
import {BasketItem} from './components/BasketItem/BasketItem';
import {Footer} from '../../components/Footer/Footer';

export const Basket: React.FC = ({navigation}: any) => {
  return (
    <>
      <Header headerHeight={60} />
      <ScrollView
        contentContainerStyle={styles.wrapper}
        style={styles.container}>
        <BasketItem title="Online English courses with..." />
        <BasketItem title="Xiaomi Mi Smart Band 6" />
        <BasketItem title="Настольное крепление для..." />
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
};
