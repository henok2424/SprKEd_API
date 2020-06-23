import { gql } from 'apollo-server-express'

const topicDefs = gql`
  type Query {
    getTopics: [Topic]
    getTopicsByUnitId(unitId: String!): [Topic]
  }

  type Topic {
    _id: String
    name: String
    unitId: String
    resources: [File]
    courseId: String
    createdAt: String
    createdBy: String
    createdByName: String
  }
`
export default topicDefs
