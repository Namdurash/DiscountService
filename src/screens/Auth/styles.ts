import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCCBB',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 35,
    letterSpacing: 2,
    marginTop: 40,
    fontFamily: 'RalewayRegular',
  },
  formWrapper: {
    marginTop: 120,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',

    width: '60%',
    height: 150,
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
  button: {
    marginTop: 15,

    width: 120,
    height: 40,
  },
  buttonWrapper: {
    width: '70%',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
