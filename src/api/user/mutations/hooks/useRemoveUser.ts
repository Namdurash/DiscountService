import {useMutation} from '@apollo/client';
import {REMOVE_USER, GET_ALL_USERS} from '@api/user';

export const useRemoveUser = (userId: string) => {
  const [removeUserGQL, {data, loading}] = useMutation(REMOVE_USER, {
    refetchQueries: [{query: GET_ALL_USERS}],
  });

  const removeUser = () => {
    removeUserGQL({
      variables: {
        id: userId,
      },
    });
  };

  return {
    removedUserData: data,
    removeUser,
    loadingRemoveUser: loading,
  };
};
