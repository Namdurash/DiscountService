import {gql} from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      id
      username
      age
    }
  }
`;

export const REMOVE_USER = gql`
  mutation deleteUser($id: ID) {
    deleteUser(id: $id) {
      username
      hasUserRemoved
    }
  }
`;
