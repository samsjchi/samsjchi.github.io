import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      lastScrollPosition: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    /**
     * Only show side nav when user is viewing project tiles section
     */
    if (window.pageYOffset > 750 && window.pageYOffset < 3000) {
      if (!this.state.show) {
        this.setState(() => ({ show: true }));
      }
    } else if (this.state.show) {
      this.setState(() => ({ show: false }));
    }

    /**
     * Show side nav on scroll up; hide on scroll down
     */
    const newScrollPosition = window.scrollY;

    if (newScrollPosition < this.state.lastScrollPosition) {
      document.querySelector('.side-nav .nav').classList.add('active');
    } else {
      document.querySelector('.side-nav .nav').classList.remove('active');
    }

    this.setState(() => ({ lastScrollPosition: newScrollPosition }));
  }

  /**
   * Show side nav on mouse over
   */
  handleMouseOver() {
    document.querySelector('.side-nav .nav').classList.add('active');
  }

  /**
   * Hide side nav on mouse out
   */
  handleMouseOut() {
    document.querySelector('.side-nav .nav').classList.remove('active');
  }

  render() {
    return (
      <aside
        className="side-nav"
        style={{ opacity: this.state.show ? 1 : 0 }}
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
      >
        <Nav />
      </aside>
    );
  }
}

export default SideNav;
