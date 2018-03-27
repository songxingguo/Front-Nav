import React from 'react'
import './header.less'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
        <Navbar>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="#home">React-Bootstrap</a>
				</Navbar.Brand>
			</Navbar.Header>
			<Nav>
				<NavItem eventKey={1} href="#">
					Link
				</NavItem>
				<NavItem eventKey={2} href="#">
					Link
				</NavItem>
			</Nav>
	    </Navbar>
    );
  }
}

export default Header;