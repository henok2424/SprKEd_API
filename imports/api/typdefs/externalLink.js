import { gql } from 'apollo-server-express'

const externalLinkDefs = gql`
type Subscription {
    linkAdded: Link
   }
  type Query {
    getExternalLink: [Link]
  }

  type Link {
    _id: String
     name: String
     url: String

  }
`
export default externalLinkDefs