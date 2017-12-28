import React, { Component } from 'react';
import Header from '../../components/common/header';
import App from '../../components/home';

class Home extends Component {
  render() {
    return (
      <div className="phone-curry-app">
        <Header />
        <App />
      </div>
    );
  }
}

export default Home;
