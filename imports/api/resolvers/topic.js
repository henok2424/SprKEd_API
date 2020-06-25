import { AuthenticationError } from 'apollo-server-express'
import { _Topics } from '../topics/topics'
import { Resource } from '../resources/resources'

const topicResolvers = {
  Query: {
    getTopics(root, args, context) {
      return _Topics.find({})
    },
    getTopicsByUnitId(root, args, context) {
      return _Topics.find({ unitId: args.unitId })
    },
  },
  Topic: {
    resources: topic => {
      return Resource.find({ topicId: topic.topicId })
    },
  },
  // add more mutations here
 
}

export default topicResolvers
