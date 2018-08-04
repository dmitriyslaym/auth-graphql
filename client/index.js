import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    // Will include cookies, cause they are required in auth
    credentials: 'same-origin'
  }
});

const graphQLClient = new ApolloClient({
  networkInterface,
  dataIdFromObject: obj => obj.id
});

const Root = () => {
  return (
    <ApolloProvider client={graphQLClient}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
