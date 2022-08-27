import Realm from 'realm';
import {DiscountInterface} from './Schemas/DiscountSchema';
import {app} from '../realm/RealmApp';

export const useGetUser = async () => {
  // const realm = await Realm.open({
  //   path: 'discountapp-eybcd',
  //   schema: [DiscountSchema],
  // });
  const realm = await app();

  // realm.write(() => {
  //   let discount1 = realm.create<DiscountInterface>('Discount', {
  //     _id: 3,
  //     name: 'Monitor',
  //     description: 'Cool desc',
  //     quantity: 10,
  //     price: 10.1,
  //   });

  //   let discount2 = realm.create<DiscountInterface>('Discount', {
  //     _id: 4,
  //     name: 'Keyboard',
  //     description: 'Not cool desc',
  //     quantity: 10,
  //     price: 10.1,
  //   });
  //   console.log(`created two tasks: ${discount1.name} & ${discount2.name}`);
  // });

  const discounts = realm.objects<DiscountInterface>('Discount');
  console.log(
    `The lists of tasks are: ${discounts.map(discount => discount.name)}`,
  );
  console.log(Realm.defaultPath);
};
