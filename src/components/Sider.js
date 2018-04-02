import React from "react";
import {Nav, NavItem, NavLink} from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Nav vertical className="mt30" style={{  'border-right': '1px solid #e3f2fd', 'position': 'fixed' , 'background': '#fff'}}>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}