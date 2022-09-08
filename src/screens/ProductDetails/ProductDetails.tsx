import * as React from 'react';
import {View, Image, Animated} from 'react-native';
import {Header} from '../../components';
import {styles} from './styles';
import {useProductDetails} from './useProductDetails';
import {ProductInfo} from './components';

export const ProductDetails: React.FC = () => {
  const {
    title,
    price,
    description,
    brand,
    discountPercentage,
    rating,
    stock,
    category,
    images,
    liftAnim,
    priceWithDiscount,
  } = useProductDetails();
  console.log(liftAnim);
  return (
    <View style={styles.container}>
      <Header headerHeight={68} />
      <View style={styles.imageWrapper}>
        <Image source={{uri: images[0]}} style={styles.image} />
      </View>
      <Animated.View
        style={[
          styles.contentWrapper,
          {
            transform: [
              {
                translateY: liftAnim,
              },
            ],
          },
        ]}>
        <ProductInfo
          title={title}
          price={price}
          description={description}
          brand={brand}
          discountPercentage={discountPercentage}
          rating={rating}
          stock={stock}
          category={category}
          priceWithDiscount={priceWithDiscount}
        />
      </Animated.View>
    </View>
  );
};
