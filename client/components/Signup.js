import React from 'react';
import { graphql } from 'react-apollo';
import { userQuery } from '../queries/user';
import AuthForm from './AuthForm';

class Signup extends React.Component {

  render() {
    return (
      <div>
        <AuthForm/>
      </div>
    )
  }
}

export default graphql(userQuery)(Signup);
