import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Sider from './components/Sider.js'
import CardList from './components/CardList.js'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="mt25">
        <Header />
        <Row className="mt30">
          <Col xs="3">
            <Sider />
          </Col>
          <Col xs="8">
            <CardList />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
