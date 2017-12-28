import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import logo from './logo.svg';
import coverimage from './cover-image.jpg';

import './index.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      phone_list : [
        {name : 'iphone'}
      ]
    };
  }
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

    let url = "http://127.0.0.1:8000/Phone_info/";
    axios.get(url).then(res => {
      let phone_list = res.data.map(function (data) {
        return data;
      });
      this.setState({
        phone_list : phone_list
      });
    }).catch(err => {
      console.error(err);
    });

    return (
      <div className="container-fluid">


        <Row>
          <Col md={12}>
            <div className="App">
                <h1>Decide which phone to buy..in 5 minutes!</h1>
                <p style={{fontStyle: 'italic',fontSize: '17px', color: 'grey'}}>no-nonsense phone buying advice</p>
                <img src={coverimage} className="" alt="logo" style={{maxWidth:"100%"}} />
              <hr />
            </div>
            <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">About Site</button>
            <div id="demo" class="collapse">
              <p>
                This site gives the best Information about the latest Phones available in the Market with their best
                <code>Features</code>, their <code>Review</code> and also the <code>Minimum Price</code> available for the Latest Phones.
              </p>
            </div>
            <h1>
              {/* {this.state.phone_list[0].name} */}
            </h1>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Home;
