import {StyleSheet} from 'react-native';
import {colors} from '@ui/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FFCCBB',
  },
  imageWrapper: {
    width: '100%',
    height: 262,

    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 240,

    borderRadius: 20,
  },
  contentWrapper: {
    width: '100%',
    height: '100%',

    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    backgroundColor: colors.mistyRose,
  },
});
