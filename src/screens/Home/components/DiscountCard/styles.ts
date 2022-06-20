import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C6BABA',
    width: 340,
    height: 112,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 25,
  },
  amountWrapper: {
    backgroundColor: '#575757',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
  },
  textAmount: {
    fontSize: 30,
    color: '#DBDBDB',
    fontFamily: 'RalewayBold',
    marginBottom: 10,
  },
  detailsWrapper: {
    width: 170,
    height: 75,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  textTitle: {
    fontSize: 14,
    fontFamily: 'RalewayBold',
    paddingLeft: 5,
    color: '#DBDBDB',
    backgroundColor: '#907878',
    borderRadius: 5,
  },
  percentageWrapper: {
    backgroundColor: '#433413',
    borderRadius: 10,
    width: 46,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPercentage: {
    fontSize: 18,
    fontFamily: 'RalewayBold',
    paddingLeft: 5,
    color: '#DBDBDB',
  },
  text: {
    fontSize: 16,
    fontFamily: 'RalewayBold',
  },
});
