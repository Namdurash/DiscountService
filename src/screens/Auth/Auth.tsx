import * as React from 'react';
import {Text, TextInput, View} from 'react-native';

import {styles} from './styles';

import {Header} from '../../components';
import {Button} from '../../components';
import {useAuth} from './useAuth';

export const Auth: React.FC = () => {
  const {onGoHome} = useAuth();
  return (
    <>
      <Header headerHeight={70} />
      <View style={styles.container}>
        <Text style={styles.titleText}>Authentification</Text>
        <View style={styles.formWrapper}>
          <TextInput style={styles.input} placeholder="Your email" />
          <TextInput style={styles.input} placeholder="Your password" />
        </View>
        <Button title="SIGN IN" type="secondary" onPress={onGoHome} />
      </View>
    </>
  );
};
