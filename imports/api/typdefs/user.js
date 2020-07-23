import { gql } from 'apollo-server-express'

const userDefs = gql`

  type Mutation {
    register(
      email: String!
      password: String!
      gender: String!
      grade: String!
      phone: String!
      name: String!
     
    ): User!
    login(email: String!, password: String!): User!
    deleteUser(ids: [String]!): User
  }
  type User {
    _id: String
    email: String
    username: String
    password: String
    createdAt: String
  }
`

export default userDefs
