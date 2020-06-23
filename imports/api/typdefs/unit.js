import { gql } from 'apollo-server-express'

const unitDefs = gql`
  type Query {
    getUnits: [Unit]
    getUnitsByCourseId(courseId: String!): [Unit]
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
