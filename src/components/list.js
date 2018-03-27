import React from 'react'
import './header.less'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

class List extends React.Component {
    render() {
        return (
            <Nav bsStyle="pills" stacked activeKey={1}>
                <NavItem eventKey={1} href="/home">
                    NavItem 1 content
                </NavItem>
                <NavItem eventKey={2} title="Item">
                    NavItem 2 content
                </NavItem>
                <NavItem eventKey={3} disabled>
                    NavItem 3 content
                </NavItem>
            </Nav>
        );
    }
}

export default List;