import * as React from 'react';
import {Text, TextInput, View} from 'react-native';

import {styles} from './styles';

import {Header} from '../../components';
import {Button} from '../../components';
import {useAuth} from './useAuth';

export const Auth: React.FC = () => {
  const {onGoHome, onGoSignUp} = useAuth();
  return (
    <>
      <Header headerHeight={70} />
      <View style={styles.container}>
        <Text style={styles.titleText}>Authentification</Text>
        <View style={styles.formWrapper}>
          <TextInput style={styles.input} placeholder="Your email" />
          <TextInput style={styles.input} placeholder="Your password" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="SIGN IN"
            type="secondary"
            onPress={onGoHome}
            style={styles.button}
          />
          {/* <Button
            title="SIGN UP"
            type="secondary"
            onPress={onGoSignUp}
            style={styles.button}
          /> */}
        </View>
      </View>
    </>
  );
};
