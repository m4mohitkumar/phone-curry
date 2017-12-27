import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {

    const navbarInstance = (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-phone-curry">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Phone Curry</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-phone-curry">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="">Page 1 <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/">Page 1-1</Link></li>
                  <li><Link to="/">Page 1-2</Link></li>
                  <li><Link to="/">Page 1-3</Link></li>
                </ul>
              </li>
              <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );

    return (
      navbarInstance
    );
  }
}

export default Header;
