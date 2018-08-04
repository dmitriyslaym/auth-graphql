const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require('./types/UserType');
const auth = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, args, req) {
        return auth.signup({ ...args, req });
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, args, req) {
        return auth.login({ ...args, req });
      }
    }
  }
});

module.exports = mutation;
