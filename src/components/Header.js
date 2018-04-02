import React from 'react';
import MyNav from  './Nav.js'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="p10">
        <MyNav />
      </div>
    );
  }
}