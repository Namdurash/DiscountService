import {colors} from '@ui/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.lightOrange,
  },
  title: {
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#C6BABA',
    width: 250,
    borderRadius: 25,
    paddingLeft: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 40,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 160,
    elevation: 25,
  },
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 10,
    marginHorizontal: 40,
  },
  button: {
    width: 150,
    height: 40,
  },
  usersList: {
    marginLeft: 15,
  },
});
