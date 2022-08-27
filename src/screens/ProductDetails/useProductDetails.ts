import {useProductListingStore} from '../../store/productListing/hooks';
import * as Navigation from '@react-navigation/native';

interface ProductDetailsRoute {
  key: string;
  name: string;
  params: {
    id: string;
  };
}

const SHOW_CURRENT_PRODUCT = 1;

export const useProductDetails = () => {
  const route = Navigation.useRoute<ProductDetailsRoute>();
  const {id = ''} = route.params || {};
  const {products} = useProductListingStore();
  const productId = Number(id);
  const currentProduct: ProductEntity.Product =
    products[productId - SHOW_CURRENT_PRODUCT];

  return {
    title: currentProduct.title,
    description: currentProduct.description,
    price: currentProduct.price,
    discountPercentage: currentProduct.discountPercentage,
    rating: currentProduct.rating,
    stock: currentProduct.stock,
    brand: currentProduct.brand,
    category: currentProduct.category,
    thumbnail: currentProduct.thumbnail,
    images: currentProduct.images,
  };
};
