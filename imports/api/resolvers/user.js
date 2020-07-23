import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-express'
import pick from 'lodash/pick'
import User from '../accounts/account'
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


const userResolver = {
  

  Mutation: {
    // Todo: Change this to createUser
    async register(root, { email, password, name, gender, grade, phone }) {

      const profile = {
        gender,
        grade,
        phone,
        name,
        status: 0,
        stats: 1,
      };
    
      const userDetails = { email, password, profile };
      Meteor.call('user.insert', userDetails);
      return Accounts.findUserByEmail(email);
     
    },
  }
}

export default userResolver
