import {StyleSheet} from 'react-native';
import {colors} from '../../ui/color';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    width: 209,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperPrimary: {
    backgroundColor: colors.orange,
  },
  wrapperSecondary: {
    opacity: 1,
    borderColor: colors.orange,
    borderWidth: 1,
    backgroundColor: '#FFFFFF50',
  },
  textPrimary: {
    fontSize: 16,
    fontFamily: 'RalewayBold',
    color: colors.white,
  },
  textSecondary: {
    fontSize: 16,
    fontFamily: 'RalewayBold',
    color: colors.black,
  },
});
