import React from 'react';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleEmailChange({ target: { value } }) { this.setState({ email: value }); }

  handlePasswordChange({ target: { value } }) { this.setState({ password: value }); }

  handleFormSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.handleFormSubmit({ email, password });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input placeholder="Email" type="email" value={email} onChange={this.handleEmailChange} />
          <input placeholder="Password" type="password" value={password} onChange={this.handlePasswordChange} />
          <button>Submit Form</button>
        </form>
      </div>
    )
  }
}

export default AuthForm;
