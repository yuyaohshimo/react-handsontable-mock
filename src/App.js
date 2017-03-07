import React, { Component } from 'react';
import Table1 from './Table1';
import Table2 from './Table2';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, hot reload</h1>
        <div>
          <p>Table1</p>
          <Table1/>
        </div>
        <div>
          <p>Table2</p>
          <Table2/>
        </div>
      </div>
    );
  }
}
