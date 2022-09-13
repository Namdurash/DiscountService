import {Text} from '@ui/Text';
import * as React from 'react';
import {FlatList, TextInput, View} from 'react-native';

import {useSignUp} from './useSignUp';
import {styles} from './styles';
import {Button} from '@components/Button';
import {Header} from '@components/Header';

interface RenderUsers {
  item: {
    id: string;
    username: string;
  };
}

const renderUsers = ({item}: RenderUsers) => {
  return (
    <Text family="raleway" type="Bold" size={34}>
      {`${item.username}: ${item.id}`}
    </Text>
  );
};

export const SignUp: React.FC = () => {
  const {
    users,
    loadingUsers,
    onChangeUsername,
    onChangeAge,
    addUser,
    removeUser,
    onChangeUserId,
  } = useSignUp();

  return (
    <View style={styles.wrapper}>
      <Header headerHeight={60} />
      <Text family="raleway" type="Light" size={34} style={styles.title}>
        Sign Up
      </Text>
      <View style={styles.inputWrapper}>
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
        <TextInput
          onChangeText={onChangeUserId}
          style={styles.input}
          placeholder="Remove user by user id"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
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
        />
      </View>
      {!loadingUsers && (
        <FlatList
          data={users}
          renderItem={renderUsers}
          style={styles.usersList}
        />
      )}
    </View>
  );
};
