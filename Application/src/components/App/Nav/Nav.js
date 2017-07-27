import React from 'react';
import style from './Nav.css';

export default class Nav extends React.Component {

render() {
  return (
    <div id='nav-container'>
      <h1 id='nav-header'>Demo</h1>
      <ul id='nav-list'>
        <li className='nav-list-item'>React</li>
        <li className='nav-list-item'>Redux</li>
        <li className='nav-list-item'>Firebase</li>
      </ul>
    </div>
    )
  }
}
