import * as React from 'react';
import {GET_ALL_USERS} from '../user';
import {useQuery} from '@apollo/client';

interface User {
  username: string;
  age: number;
  discounts: Array<any>;
}

interface UserData {
  getAllUsers: User[];
}

export const useGetAllUsers = () => {
  const {data, loading, error} = useQuery<UserData>(GET_ALL_USERS);
  const [users, setUsers] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    if (!loading) {
      setUsers(data?.getAllUsers || []);
      console.log('Check after loading', data?.getAllUsers);
    }
    if (error) {
      console.log('Error: ', JSON.stringify(error, null, 2));
    }
  }, [data, error, loading]);

  return {
    users,
    loadingUsers: loading,
  };
};
