import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ScreenStack} from './src/navigation';
import {RootProvider} from './src/store/createRootProvider';

const ConnectedApp: React.FC = () => {
  const navigationRef = React.useRef<any>();

  return (
    <NavigationContainer ref={navigationRef}>
      <ScreenStack navigation={navigationRef.current} />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <RootProvider>
      <SafeAreaProvider>
        <ConnectedApp />
      </SafeAreaProvider>
    </RootProvider>
  );
};

export default App;
