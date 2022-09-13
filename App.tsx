import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ScreenStack} from './src/navigation';
import {RootProvider} from './src/store/createRootProvider';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://10.0.2.2:4000/graphql',
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
      <RootProvider>
        <SafeAreaProvider>
          <ConnectedApp />
        </SafeAreaProvider>
      </RootProvider>
    </ApolloProvider>
  );
};

export default App;
