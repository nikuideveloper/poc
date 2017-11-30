import React, { Component } from 'react'
import './Header.css';
import ANZ_Logo from '../../images/logo-anz.svg';
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default margin-0px">
            <div className="container-fluid navbar-color">
              <div className="navbar-header">
                <a className="navbar-brand" href="#"><img src={ANZ_Logo} alt="ANZ LOGO"/></a>
              </div>
            </div>
          </nav>
        )
    }
}
export default Header;