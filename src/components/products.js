import React, { Component } from 'react';

export default class Products extends Component {
  render() {
    return (
      <div className='product-container clearfix'>
        <h2>Reckless Work</h2>
        <div className='works'>
          <img src='./images/planters.jpg' alt='planerts' />
          <p>A neat 'wall garden'</p>
        </div>
        <div className='works'>
          <img src='./images/paper-towel.jpg' alt='simple paper towel holder' />
          <p>A Simple Paper Towel Holder</p>
        </div>
        <div className='works'>
          <img src='./images/steel-tub.jpg' alt='steel tub' />
          <p>Steel Wrapped Water Station for Magnolia</p>
        </div>
      </div>
    )
  }
}
