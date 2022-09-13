const {buildSchema} = require('graphql');

export const schema = buildSchema(`
  type User {
      id: ID
      username: String
      age: Int
      discounts: [Discount]
  }

  type Discount {
      id: ID
      title: String
      description: String
  }

  input UserInput {
      id: ID
      username: String
      age: Int
      discounts: [DiscountInput]
  }

  input DiscountInput {
      id: ID
      title: String!
      description: String!
  }

  type Query {
      getAllUsers: [User]
      getUser(id: ID): User
  }

  type RemovedUser {
    username: String
    hasUserRemoved: Boolean
  }

  type Mutation {
    createUser(input: UserInput): User
    deleteUser(id: ID): RemovedUser
  }
`);
