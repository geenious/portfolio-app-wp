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
              <NavLink activeClassName='selected' className='nav-link' exact to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' className='nav-link' to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' className='nav-link' to='/work'>Works</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' className='nav-link' to='/store'>Shop</NavLink>
            </li>
          </ul>
        </nav>
        {this.props.children}
        <footer>
          <p>
            <span>&copy; 2017, Reckless Iron Works</span>
            <a href='https://www.facebook.com/recklessironworks/' alt='Facebook'><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
            <a href='https://www.instagram.com/recklessironworks/' alt='Instagram'><i className="fa fa-instagram" aria-hidden="true"></i></a>
          </p>
        </footer>
      </div>
    )
  }
}
