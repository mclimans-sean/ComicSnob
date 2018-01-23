import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';

class Header extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Header</h1>
        <p>Just some text for now</p>
        <p>
          <FontAwesome className="fa fa-twitter-square" />
          <Button bsStyle="primary">Login using Twitter</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default Header;
