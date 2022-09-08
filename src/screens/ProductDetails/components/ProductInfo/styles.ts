import {colors} from '@ui/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginLeft: 32,
    marginTop: 20,
    marginRight: 20,
  },
  title: {
    color: colors.swampBrown,
  },
  price: {
    textDecorationLine: 'line-through',
    alignSelf: 'center',

    color: colors.lightBrown,

    opacity: 0.7,
  },
  priceWithDiscount: {
    color: colors.lightBrown,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 27,
    marginRight: 22,
  },
  description: {
    marginLeft: 30,
    marginTop: 26,
    marginRight: 29,
  },
  contentBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginLeft: 30,
    marginTop: 26,
    marginRight: 29,
  },
  button: {
    width: 249,
    height: 62,
    marginTop: 44,
    marginLeft: 80,
  },
});
