import * as React from 'react';
import {ScrollView} from 'react-native';

import {styles} from './styles';

import {Header} from '../../components/Header/Header';
import {DiscountCard} from './components/DiscountCard/DiscountCard';
import {Footer} from '../../components/Footer/Footer';

export const Home: React.FC = () => {
  return (
    <>
      <Header headerHeight={112} isSearchInput={true} />
      <ScrollView
        contentContainerStyle={styles.wrapper}
        style={styles.container}>
        <DiscountCard
          title="Online English courses with..."
          discountPercentage="15%"
          amount={8}
          price="299UAH"
        />
        <DiscountCard
          title="Xiaomi Mi Smart Band 6"
          discountPercentage="5%"
          amount={15}
          price="600UAH"
        />
        <DiscountCard
          title="Настольное крепление для..."
          discountPercentage="35%"
          amount={4}
          price="764UAH"
        />
        <DiscountCard
          title="Ноутбук ASUS Laptop X415..."
          discountPercentage="15%"
          amount={10}
          price="16 499UAH"
        />
        <DiscountCard
          title="Mонитор 31.5 Samsung Odyssey..."
          discountPercentage="4%"
          amount={23}
          price="10 599UAH"
        />
        <DiscountCard
          title="Ноутбук Apple MacBook Pro..."
          discountPercentage="2%"
          amount={2}
          price="100 999UAH"
        />
      </ScrollView>
      <Footer />
    </>
  );
};
