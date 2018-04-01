import React from 'react'
import Header from './components/header.js'
import Content from './components/content.js'
import List from './components/list.js'
import { Grid, Row, Col } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-md-2">
                    <List />
                </div>
                <div className="col-md-10">
                    <Content />
                </div>
            </div>
        </div>
    );
  }
}

export default App;