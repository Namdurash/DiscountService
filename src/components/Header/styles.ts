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
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 160,
    elevation: 25,
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
