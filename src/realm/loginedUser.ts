import Realm from 'realm';

const appId = 'discountapp-eybcd';
const appConfig = {
  id: appId,
  timeout: 10000,
};

export const loginUser = async (): Promise<
  Realm.User<
    Realm.DefaultFunctionsFactory,
    SimpleObject,
    Realm.DefaultUserProfileData
  >
> => {
  try {
    const app = new Realm.App(appConfig);
    const credentials = Realm.Credentials.emailPassword(
      'mshelper757@gmail.com',
      'Pe4enbkaGame',
    );
    const user = await app.logIn(credentials);
    return user;
  } catch (error) {
    throw `Error logging in anonymously: ${JSON.stringify(error, null, 2)}`;
  }
};
