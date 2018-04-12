/* eslint consistent-return: 0 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderHeaderLinks() {
    const userTo = { pathname: '/profile/articles', user: this.props.user };
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <ul className="right">
            <li>
              <a href="/auth/google">Login with Google</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="right">
            <li>
              <Link to={userTo}>Saved Articles</Link>
            </li>
            <li>
              <a href="/profile/logout">Logout</a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">{this.renderHeaderLinks()}</div>
        </nav>
      </header>
    );
  }
}

export default Header;
