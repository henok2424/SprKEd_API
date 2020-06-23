import { mergeResolvers } from 'merge-graphql-schemas'
import courseResolvers from './course'
import unitResolvers from './unit'
import topicResolvers from './topic'
import linkResolvers from './externalLink'

import { resourceResolver } from './resource'

export default mergeResolvers([
  courseResolvers,
  unitResolvers,
  topicResolvers,
  resourceResolver,
  linkResolvers,
])
