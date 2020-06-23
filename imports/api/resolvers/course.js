import { AuthenticationError, PubSub } from 'apollo-server-express'
import { _Courses} from '../courses/courses'
import { _Units } from '../units/units'
import { _Topics } from '../topics/topics'

export const pubsub = new PubSub()
const COURSE_ADDED = 'COURSE_ADDED'
const resolvers = {
  Subscription: {
    courseAdded: {
      subscribe: () => pubsub.asyncIterator([COURSE_ADDED]),
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
    getCourses(root, args, { user })  {
      return _Courses.find({
      
      }).fetch()
    }
  },


}

export default resolvers
