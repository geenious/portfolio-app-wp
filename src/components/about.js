import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <section className='bio'>
          <img className='cody-img' src='./images/cody-headshot.jpg' alt='Work with your hands' />
          <p>With an eye for simplicity and a mind for innovation, Cody Benton has built Reckless Iron Works from the ground up. From raw material to a finished product we handcraft metal into detailed one of a kind pieces, this isn't just a metal shop it's a studio. Reckless’ passion is taking someone's idea and creating it into a tangible product in what would best be described as an art form. Reckless was established in 2011 more as a hobby shop until 2014 when Cody decided to move back to Waco, TX and take it on as a full-time gig. Over the years Cody has accumulated vintage machines to fabricate metal by hand to further our ‘built not bought’ attitude. Reckless aims to provide truly handcrafted pieces to our clients to be functional and classic. We hope that when you step into our studio it takes you back in time to when things were built with soul in the era of true Americana.</p>
        </section>
      </div>
    )
  }
}
