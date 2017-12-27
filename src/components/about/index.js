import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

class About extends Component {
  render() {
    return(
      <div className="container-fluid">
        <Row>
          <Col md={12}>
            <h3>About Page.</h3>
          </Col>
        </Row>
      </div>
    );
  }
}
 export default About;
