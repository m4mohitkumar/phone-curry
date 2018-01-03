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
              <li><Link to="/about">Phones</Link></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="">More <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/">Latest Phones</Link></li>
                  <li><Link to="/">Upcoming Phones</Link></li>
                  <li><Link to="/">Contest</Link></li>
                </ul>
              </li>
              <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </ul>
            <form class="navbar-form navbar-right" action="/action_page.php">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search" name="search" />
                <div class="input-group-btn">
                  <button class="btn btn-default" type="submit">
                    <i class="glyphicon glyphicon-search" ></i>
                  </button>
                </div>
              </div>
            </form>
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
