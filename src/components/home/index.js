import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import logo from './logo.svg';
import coverimage from '../../img/cover-image.jpg';

import './index.css';
// class Home extends Component {
//   constructor() {
//     super();
//     this.state = {
//       mobile_name: [],
//     };
//
// }
// componentDidMount() {
//   fetch('http://127.0.0.1:8000/mobileinfos/')
//   .then(results => {
//     return results.json();
//
//   }).then(data => {
//     let mobile_name = data.results.map((mobile_name) => {
//       return(
//         <div key={mobile_name.results}>
//           <img src={mobile_name.mobile_name.medium} />
//
//         </div>
//       )
//
//   })
//     this.setState({mobile_name: mobile_name});
//     console.log("state", this.state.mobile_name);
//   })
// }
// render() {
//   return (
//
// <div className="container2">
//   <div className="container1">{this.state.mobile_phone}</div>
// </div>
//   )
// }
class Home extends Component {
  constructor() {
    super();
    this.state = {
      phone_list : []
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
    // let url = "http://127.0.0.1:8000/mobileinfos/";
    axios.get('http://127.0.0.1:8000/mobileinfos/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

    // let url = "http://127.0.0.1:8000/Phone_info";
    // axios.get(url).then(res => {
    //   let phone_list = res.data.map(function (data) {
    //     console.log("error");
    //     return data;
    //
    //   });
    //   this.setState({
    //     phone_list : phone_list
    //   });
    // }).catch(err => {
    //   console.error(err);
    // });

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

  {/* <div class="container-fluid"> */}
  <h2>Search Phone</h2>
  <p>Please give the Minimum and Maximum range in Price:</p>
  <form>
    <div class="row">
    <div class="form-group">
        <div class="col-sm-4">
      <label for="sel1">Minimum Cost:</label>
      <select class="form-control" id="sel1">
        <option>1000</option>
        <option>2000</option>
        <option>5000</option>
        <option>10000</option>
      </select>
</div>
      <div class="form-group">
       <div class="col-sm-4">
      <label for="sel2">Maximum Price:</label>
      <select class="form-control" id="sel2">
        <option>10000</option>
        <option>20000</option>
        <option>30000</option>
        <option>40000</option>
        <option>50000</option>
      </select>
    </div>
      <div class="form-group">
      <div class="col-sm-4">
        <label for=""></label>

        <button type="button" class="btn btn-info col-lg-4 col-md-4 text-center" data-toggle="" data-target="">Search</button>
      </div>
    </div>
  </div>
</div>
</div>
  </form>



            {/* <form class="form-inline" action="/action_page.php">
            <div class="container">
              <div class="row">
            <div class="form-group">
                <div class="col-sm-4">
              <label for="selmin"></label>
              <select class="form-control" id="selmin">
                <option>1000</option>
                <option>2000</option>
                <option>5000</option>
                <option>10000</option>
              </select>
            </div>
          </div>
    <div class="form-group">
      <div class="col-sm-4">
      <label for="selmax"></label>
      <select class="form-control" id="selmax">
        <option>10000</option>
        <option>20000</option>
        <option>30000</option>
        <option>40000</option>
      </select>
    </div>
  </div>
  <div class="col-sm-4">
    <button type="submit" class="btn btn-default">Submit</button>
  </div>
</div>
</div>
  </form> */}

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
