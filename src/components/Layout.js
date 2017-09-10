import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/reset.css';
import '../styles/App.css';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className='container'>
        <nav>
        <div className='company-nav'>
          <h3>Reckless Iron Works</h3>
        </div>
          <ul>
            <li>
              <NavLink activeClassName='selected' exact to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' to='/store'>Shop</NavLink>
            </li>
          </ul>
        </nav>
        {this.props.children}
        <footer>
          <p>Copyright 2017, Reckless Iron Works</p>
        </footer>
      </div>
    )
  }
}
