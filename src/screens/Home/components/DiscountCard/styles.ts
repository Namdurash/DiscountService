import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C6BABA',
    width: 340,
    height: 97,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 25,
  },
  imageWrapper: {
    marginLeft: 10,
    marginRight: 5,
  },
  image: {
    borderRadius: 10,
    width: 70,
    height: 70,
  },
  detailsWrapper: {
    width: 170,
    height: 75,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  textTitle: {
    fontSize: 24,
    fontFamily: 'PTSansBold',
    color: '#433413',
  },
  textStock: {
    fontSize: 16,
    fontFamily: 'PTSansBold',
    color: '#907878',
  },
  percentageWrapper: {
    width: 55,
    height: '70%',
  },
  textPercentage: {
    fontSize: 24,
    fontFamily: 'PTSansBold',
    color: '#907878',
  },
  textPrice: {
    fontSize: 15,
    fontFamily: 'PTSansBold',
    color: '#907878',
    opacity: 0.6,
    textAlign: 'right',
  },
});
