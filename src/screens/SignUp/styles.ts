import {colors} from '@ui/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.lightOrange,
  },
  input: {
    backgroundColor: '#C6BABA',
    width: 250,
    borderRadius: 25,
    paddingLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 40,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 160,
    elevation: 25,
  },
});
