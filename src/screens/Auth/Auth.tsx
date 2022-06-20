import * as React from 'react';
import {Text, TextInput, View} from 'react-native';

import {Button} from '@rneui/base';

import {styles} from './styles';

import {Header} from '../../components/Header/Header';

export const Auth: React.FC = () => {
  return (
    <>
      <Header headerHeight={70} />
      <View style={styles.container}>
        <Text style={styles.titleText}>Authentification</Text>
        <View style={styles.formWrapper}>
          <TextInput style={styles.input} placeholder="Your email" />
          <TextInput style={styles.input} placeholder="Your password" />
        </View>
        <Button title="SIGN IN" style={styles.button} />
      </View>
    </>
  );
};
