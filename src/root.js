import React from 'react'
import Header from './components/header.js'
import Content from './components/content.js'
import List from './components/list.js'
import { Grid, Row, Col } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
        <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Header />
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <List />
                    </Col>
                    <Col xs={6} md={4}>
                        <Content />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}

export default App;