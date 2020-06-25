import { gql } from 'apollo-server-express'

const unitDefs = gql`
  type Query {
    getUnits: [Unit]
    getUnitsByCourseId(courseId: String!): [Unit]
  }
  type Mutation {
    addUnit(
      name: String!
      courseId: String!
      createdBy: String
      createdAt: String
    ): Unit
    deleteUnit(id: String!): Unit
    updateUnit(id: String, name: String): Unit
  }
  type Unit {
    _id: String
    name: String
    unitDesc: String,

    createdAt: String
    createdBy: String
    createdByName: String
  }
`
export default unitDefs
