const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList } = graphql;
const UserType = require('./types/UserType');
const { getAllUsers } = require('../services/dbQueries');

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      resolve(parentParams, args, req) {
        return req.user;
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentParams, args, req) {
        return getAllUsers();
      }
    }
  }
});

module.exports = query;
