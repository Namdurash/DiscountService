import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCCBB',
    height: '100%',
  },
  header: {
    backgroundColor: '#907878',
    flexDirection: 'row',
    height: 53,
    width: '100%',
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    flexGrow: 0,
    marginLeft: 10,
    marginTop: 10,
  },
  textHeader: {
    fontSize: 26,
    fontFamily: 'RalewayBold',
    color: '#433413',
    marginLeft: 75,
    flexGrow: 1,
  },
  buttonWrapper: {
    width: 342,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginLeft: 15,
  },
  buttonText: {
    fontFamily: 'RalewayBold',
    fontSize: 18,
    color: 'black',
  },
  signOutText: {
    fontSize: 14,
    fontFamily: 'RalewayBold',
    textDecorationLine: 'underline',
    position: 'absolute',
    left: 155,
    bottom: 70,
    color: 'black',
  },
});
