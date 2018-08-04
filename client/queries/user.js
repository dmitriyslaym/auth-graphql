import gql from 'graphql-tag';

export const userQuery = gql`
  query {
    user {
      id
      email
    }
  }
`;
