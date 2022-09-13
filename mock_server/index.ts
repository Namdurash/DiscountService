import {schema} from './schema';
const express = require('express');
const {graphqlHTTP} = require('express-graphql');

interface User {
  input: {
    username: string;
    age: number;
    discounts?: Array<any>;
  };
}

const users = [
  {
    id: '1',
    username: 'Namdurash',
    age: 21,
    discounts: [{id: 1, title: 'iPhone 13', description: 'Cool phone'}],
  },
  {
    id: '2',
    username: 'Michael',
    age: 19,
    discounts: [{id: 1, title: 'iPhone 13', description: 'Cool phone'}],
  },
];

const app = express();

const root = {
  getAllUsers: () => {
    return users;
  },
  getUser: ({id}: {id: string}) => {
    console.log(users.find(user => user.id === id));
    return users.find(user => user.id === id);
  },
  createUser: ({input}: User) => {
    const id = `${Date.now()}`;
    const user = {
      id,
      ...input,
      discounts: [{id: 1, title: 'iPhone 13', description: 'Cool phone'}],
    };
    users.push(user);
    return user;
  },
  deleteUser: ({id}: {id: string}) => {
    const currentUser = users.findIndex(user => user.id === id);
    const username = users.find(user => user.id === id)?.username;
    let hasUserRemoved = false;
    const amountUsersBeforeRemove = users.length;
    users.splice(currentUser, 1);
    if (users.length < amountUsersBeforeRemove) {
      hasUserRemoved = true;
    }
    return {
      username,
      hasUserRemoved,
    };
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root,
  }),
);

app.listen(4000, () => console.log('I AM ALIVE! Port: 4000'));

export default app;
