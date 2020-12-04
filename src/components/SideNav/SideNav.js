import React, { Component } from 'react';

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
  }

  render() {
    return (
      <aside className="side-nav" style={{ opacity: this.state.show ? 1 : 0 }}>
        <Nav />
      </aside>
    );
  }
}

export default SideNav;
