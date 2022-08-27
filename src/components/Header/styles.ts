import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#433413',
    height: 112,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'RalewayBold',
    color: '#907878',
    fontSize: 34,
    shadowColor: '#000',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 3},
    textShadowRadius: 7,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#C6BABA',
    alignItems: 'center',
    height: 41,
    width: 320,
    marginTop: 15,
    paddingLeft: 10,
    borderRadius: 50,
  },
});
