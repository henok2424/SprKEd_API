import { gql } from 'apollo-server-express'

const courseDefs = gql`
  type Subscription {
   courseAdded: Course
  }
  type Query {
    getCourses: [Course]
  }

  type Course {
    _id: String
    name: String
    
    createdAt: String
    createdBy: String
    createdByName: String
  }
`
export default courseDefs
