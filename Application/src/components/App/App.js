import React from 'react';
import Nav from './Nav/Nav.js'
import style from './App.css';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {}
}

render() {
  return (

      <div>
        <Nav />
      </div>
    );
  }
}


