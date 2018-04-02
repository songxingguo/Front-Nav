/**
 * Created by Administrator on 2018/4/2.
 */
import React from 'react';
import logo  from  '../images/logo.jpg'
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class MyNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Nav className="navbar-light pb10" style={{  'border-bottom': '1px solid #e3f2fd', 'position': 'fixed' , 'background': '#fff'}}>
                <a className="navbar-brand" href="#">
                    <img src={ logo } width="30" height="30" alt="logo" />
                    <span className="ml10">React学习</span>
                </a>
                <NavItem>
                    <NavLink href="#" active>前端导航首页</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">技术专题</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">优站精选</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">我的插件</NavLink>
                </NavItem>
            </Nav>
        );
    }
}