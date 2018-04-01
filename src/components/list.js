import React from 'react'
import './header.less'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

class List extends React.Component {
    render() {
        return (
            // <Nav bsStyle="tabs" stacked activeKey={1}>
            //     <NavItem eventKey={1} href="/home">
            //         NavItem 1 content
            //     </NavItem>
            //     <NavItem eventKey={2} title="Item">
            //         NavItem 2 content
            //     </NavItem>
            //     <NavItem eventKey={3} disabled>
            //         NavItem 3 content
            //     </NavItem>
            // </Nav>

            <ul className="nav nav-tabs nav-stacked ">
                <li role="presentation" className="active"><a href="#">Home</a></li>
                <li role="presentation"><a href="#">Profile</a></li>
                <li role="presentation"><a href="#">Messages</a></li>
            </ul>
        );
    }
}

export default List;