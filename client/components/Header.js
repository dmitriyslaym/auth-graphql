import React from 'react';
import { graphql } from 'react-apollo';
import { hashHistory, Link } from 'react-router'
import { userQuery } from '../queries/user';
import { logoutMutation } from '../mutations/logout';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.data.user && this.props.data.user) {
      hashHistory.push('/dashboard');
    }
    if (prevProps.data.user && !this.props.data.user) {
      hashHistory.push('/');
    }
  }

  handleLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query: userQuery }],
      awaitRefetchQueries: true
    }).then(() => {
      console.log('CURRENT USER IS REFETCHED AFTER LOGOUT');
    });
  }

  renderAuthButtons() {
    return (
      <div>
        <button onClick={this.handleLogoutClick}>Logout</button>
      </div>
    )
  }

  renderNotAuthButtons() {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }

  render() {
    const { data: { loading, user } } = this.props;
    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        Hello world header
        {user ? this.renderAuthButtons() : this.renderNotAuthButtons()}
      </div>
    )
  }
}

export default graphql(logoutMutation)(graphql(userQuery)(Header));
