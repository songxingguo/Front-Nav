import React from 'react'
import './header.less'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container-fluid">
          <div className="navbar-header">
          <a className="navbar-brand" href="#">Brand</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
          <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
          <li><a href="#">Link</a></li>
          </ul>
          </div>
          </div>
        </nav>
    );
  }
}

export default Header;