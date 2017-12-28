import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

class About extends Component {
  render() {
    return(
      <div className="container-fluid">
        <Row>
          <Col md={12}>
            <h3>About Phones.</h3>
          </Col>

          <table class="table">
    <thead>
      <tr>
        <th>Phonename</th>
        <th>Price</th>
        <th>manufacturer</th>
        <th>Screen Size</th>
        <th>Os version</th>
        <th>Phone detail</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Iphone se</td>
        <td>17000</td>
        <td>Apple inc.</td>
        <td>4 Inch</td>
        <td>Ios 11</td>
        <td>good phone</td>
      </tr>
      <tr>
        <td>Yu Yureka Plus</td>
        <td>10000</td>
        <td>Yu</td>
        <td>5.5 Inch</td>
        <td>Android Kit Kat</td>
        <td>good phone</td>
      </tr>
      <tr>
        <td>Iphone 6</td>
        <td>20000</td>
        <td>Apple inc</td>
        <td>4.7 Inch</td>
        <td>Ios 11</td>
        <td>good phone</td>
      </tr>
    </tbody>
  </table>
        </Row>
      </div>
    );
  }
}
 export default About;
