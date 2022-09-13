import {Text} from '@ui/Text';
import * as React from 'react';
import {TextInput, View} from 'react-native';

import {useSignUp} from './useSignUp';
import {styles} from './styles';
import {Button} from '@components/Button';

export const SignUp: React.FC = () => {
  const {
    users,
    loadingUsers,
    onChangeUsername,
    onChangeAge,
    addUser,
    removeUser,
  } = useSignUp();

  return (
    <View style={styles.wrapper}>
      <Text family="raleway" type="Bold" size={34}>
        Sign Up screen
      </Text>
      <TextInput
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
      <Button title="Submit" type="primary" onPress={addUser} />
      <Button title="Remove User" type="primary" onPress={removeUser} />
      {!loadingUsers && (
        <Text family="raleway" type="Bold" size={34}>
          {users.map(user => user.username)}
        </Text>
      )}
    </View>
  );
};
