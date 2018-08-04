import React from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import { loginMutation } from '../mutations/login';
import { userQuery } from '../queries/user';
import AuthForm from './AuthForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(credentials) {
    this.props.mutate({
      variables: credentials,
      refetchQueries: [{ query: userQuery }],
      awaitRefetchQueries: true
    }).then(() => {
      console.log('CURRENT USER IS REFETCHED AFTER LOGIN');
    });
  }

  render() {
    return (
      <div>
        <AuthForm handleFormSubmit={this.handleFormSubmit} />
      </div>
    )
  }
}

export default graphql(userQuery)(graphql(loginMutation)(Login));
