import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Header</h1>
        <p>Just some text for now</p>
        <a className="btn btn-block btn-social btn-twitter">
          <span className="fa fa-twitter" />
          Sign in with Twitter
        </a>
      </Jumbotron>
    );
  }
}

export default Header;
