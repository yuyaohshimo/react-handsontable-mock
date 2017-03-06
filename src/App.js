import React, { Component } from 'react';
import Hot from './HoT';

export default class App extends Component {
  render() {
    return <div>
    <h1>Hello, hot reload</h1>
    <Hot/>
    </div>;
  }
}
