import { createWriteStream, unlink, unlinkSync, existsSync } from 'fs'
import { Resources } from '../resources/resources'
import Mongoose from 'mongoose'

const filePath = 'public/uploads/'

export const resourceResolver = {
  Query: {
    // get all files and other file related queries
    getFiles() {
      return Resources.find().cursor;
    },
    getResourcesByTopicId(root, args, context) {
      return Resources.find({ "meta.topicId": args.topicId }).cursor
    },
    getResource(root, args, context) {
      return Resource.findOne({ _id: Mongoose.Types.ObjectId(args.id) })
    },
  },

}
