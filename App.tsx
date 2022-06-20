/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {Auth} from './src/screens/Auth';
import {Basket} from './src/screens/Basket/Basket';
import {Home} from './src/screens/Home/Home';
import {UserProfile} from './src/screens/UserProfile/UserProfile';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <UserProfile />
      {/* <Basket /> */}
      {/* <Home /> */}
      {/* <Auth /> */}
    </SafeAreaProvider>
  );
};

export default App;
