import { gql } from 'apollo-server-express'

const resourceDefs = gql`
  
  type Query {
    uploads: [File]
    getFiles: [File]
    getResourcesByTopicId(topicId: String): [File]
    getResource(id: String!): File
  }
  type File {
    _id: String
    path: String
    ext: String
    name: String
    
  
  }


`
export default resourceDefs
