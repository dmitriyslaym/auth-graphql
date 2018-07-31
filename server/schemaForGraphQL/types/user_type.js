const graphql = require('graphql');
const { GraphQLObjectType, GraphQLStringType } = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GraphQLStringType }
  }
});

module.exports = UserType;