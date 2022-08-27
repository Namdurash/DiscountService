import * as React from 'react';
import {FlatList} from 'react-native';

import {styles} from './styles';

import {Header} from '../../components/Header/Header';
import {DiscountCard} from './components/DiscountCard/DiscountCard';
import {Footer} from '../../components/Footer/Footer';
import {useHome} from './useHome';

interface ProductListItem {
  item: ProductEntity.Product;
}

const renderDiscountCards = ({item}: ProductListItem) => {
  return <DiscountCard product={item} />;
};

export const Home: React.FC = ({navigation}: any) => {
  const {products} = useHome();
  console.log(products);
  return (
    <>
      <Header headerHeight={112} isSearchInput={true} />
      <FlatList
        data={products}
        renderItem={renderDiscountCards}
        contentContainerStyle={styles.wrapper}
        keyExtractor={item => item.id}
        style={styles.container}
      />
      <Footer navigation={navigation} />
    </>
  );
};
