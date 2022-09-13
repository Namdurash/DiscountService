import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainerRef, ParamListBase} from '@react-navigation/native';

import {Auth} from '../screens/Auth';
import {Basket} from '../screens/Basket/Basket';
import {Home} from '../screens/Home/Home';
import {UserProfile} from '../screens/UserProfile/UserProfile';
import {ProductDetails} from '../screens/ProductDetails';
import {RootStackParamList} from './types';
import {Routes} from './routes.types';
import {SignUp} from '@screens/SignUp';

const Stack = createStackNavigator<RootStackParamList>();

interface Props {
  navigation?: NavigationContainerRef<ParamListBase>;
}

export const ScreenStack: React.FC<Props> = () => (
  <Stack.Navigator
    initialRouteName={Routes.Auth}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={Routes.Auth} component={Auth} />
    <Stack.Screen name={Routes.Home} component={Home} />
    <Stack.Screen name={Routes.Basket} component={Basket} />
    <Stack.Screen name={Routes.UserProfile} component={UserProfile} />
    <Stack.Screen name={Routes.ProductDetails} component={ProductDetails} />
    <Stack.Screen name={Routes.SignUp} component={SignUp} />
  </Stack.Navigator>
);
