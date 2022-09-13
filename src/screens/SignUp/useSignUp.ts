import * as React from 'react';
import {CREATE_USER, useGetAllUsers, useRemoveUser} from '@api/user';
import {useMutation} from '@apollo/client';

export const useSignUp = () => {
  const [newUser] = useMutation(CREATE_USER);
  const [username, setUsername] = React.useState('');
  const [age, setAge] = React.useState(0);
  const {users, loadingUsers} = useGetAllUsers();
  const {removedUserData, removeUser, loadingRemoveUser} = useRemoveUser('1');

  const addUser = () => {
    console.log(username, age);
    newUser({
      variables: {
        input: {
          username,
          age,
        },
      },
    }).then(({data}) => {
      console.log(data);
    });
  };

  const onChangeUsername = (inputUsername: string) => {
    setUsername(inputUsername);
  };

  const onChangeAge = React.useCallback((inputAge: string) => {
    setAge(+inputAge);
  }, []);

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
  };
};
