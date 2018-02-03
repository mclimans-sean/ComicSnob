import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button } from 'react-bootstrap';

class Header extends Component {
  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return (
          <a href="/auth/twitter" className="btn btn-block btn-social btn-twitter">
            <span className="fa fa-twitter" />
            Sign in with Twitter
          </a>
        );
      default:
        return (
          <div>
            <img src={this.props.auth.image} alt="user profile pic" />
            {this.props.auth.name}
            <Button bsStyle="danger" href="/api/logout">Logout</Button>
          </div>
        );
    }
  }

  render() {
    return (
      <Jumbotron>
        <h1>ComicSnob</h1>
        <p>Just some text for now</p>
        {this.renderContent()}
      </Jumbotron>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
