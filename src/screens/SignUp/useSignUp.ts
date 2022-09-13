import * as React from 'react';
import {useCreateUser, useGetAllUsers, useRemoveUser} from '@api/user';

export const useSignUp = () => {
  const [username, setUsername] = React.useState('');
  const [age, setAge] = React.useState(0);
  const [userId, setUserId] = React.useState('1');
  const {users, loadingUsers} = useGetAllUsers();
  const {removedUserData, removeUser, loadingRemoveUser} = useRemoveUser(userId);
  const {addUser} = useCreateUser({username, age});

  const onChangeUsername = (inputUsername: string) => {
    setUsername(inputUsername);
  };

  const onChangeAge = React.useCallback((inputAge: string) => {
    setAge(+inputAge);
  }, []);

  const onChangeUserId = (inputUserId: string) => {
    setUserId(inputUserId);
  };

  React.useEffect(() => {
    console.log(loadingRemoveUser);
    if (!loadingRemoveUser) {
      console.log('Remove user', removedUserData);
    }
  }, [loadingRemoveUser, removedUserData]);

  return {
    users,
    loadingUsers,
    addUser,
    onChangeUsername,
    onChangeAge,
    removeUser,
    removedUserData,
    loadingRemoveUser,
    onChangeUserId,
  };
};
