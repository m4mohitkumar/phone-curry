import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import logo from './logo.svg';
import './index.css';

class Home extends Component {
  render() {

    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    function getGreeting(user) {
      if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
      }
      return <h1>Hello, Stranger.</h1>;
    }

    const user = {
      firstName: 'Mohit',
      lastName: 'Kumar'
    };

    const element = (
      <h1>
        {getGreeting(user)}
      </h1>
    );

    return (
      <div className="container-fluid">
        <Row>
          <Col md={12}>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Phone Curry</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <hr />
              <div>
                {element}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
