import { AuthenticationError, PubSub } from 'apollo-server-express'

import { _ExternalLink } from '../externallink/externallink'

export const pubsub = new PubSub()
const LINK_ADDED = 'LINK_ADDED'
const resolvers = {
  Subscription: {
    linkAdded: {
      subscribe: () => pubsub.asyncIterator([LINK_ADDED]),
    },
  },

  // Query: {
  //   resolutions(obj, args, { userId }) {
  //     return Resolutions.find({
  //       userId
  //     }).fetch();
  //   }
  // },
  Query: {
    getExternalLink(root, args, { user })  {
      return _ExternalLink.find({
      
      }).fetch()
    }
  },

}

export default resolvers
