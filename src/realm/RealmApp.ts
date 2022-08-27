import Realm, {Configuration} from 'realm';
import {DiscountSchema} from '../api/Schemas/DiscountSchema';
// import {loginUser} from './loginedUser';

export const app = async () => {
  console.log(Realm.defaultPath);
  try {
    // const user = await loginUser();
    const config: Configuration = {
      schema: [DiscountSchema],
    };
    const realm = await Realm.open(config);
    return realm;
  } catch (error) {
    throw `Error opening realm: ${JSON.stringify(error, null, 2)}`;
  }
};
