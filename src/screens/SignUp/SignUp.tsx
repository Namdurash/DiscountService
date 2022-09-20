import {Text} from '@ui/Text';
import * as React from 'react';
import {TextInput, View} from 'react-native';

import {styles} from './styles';
import {Button} from '@components/Button';
import {Header} from '@components/Header';

export const SignUp: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <Header headerHeight={60} />
      <Text family="raleway" type="Light" size={34} style={styles.title}>
        Sign Up
      </Text>
      <View style={styles.inputWrapper}>
        {/* <TextInput
          onChangeText={onChangeUsername}
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          onChangeText={onChangeAge}
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
        />
        <TextInput
          onChangeText={onChangeUserId}
          style={styles.input}
          placeholder="Remove user by user id"
          keyboardType="numeric"
        /> */}
      </View>
      <View style={styles.buttonWrapper}>
        {/* <Button
          title="Submit"
          type="primary"
          onPress={addUser}
          style={styles.button}
        />
        <Button
          title="Remove User"
          type="primary"
          onPress={removeUser}
          style={styles.button}
        /> */}
      </View>
    </View>
  );
};
