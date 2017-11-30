import React, { Component } from 'react'
import './Navbar.css';
import homeIcon from '../../images/home-icon.png'
class Header extends Component {
    render() {
        return (
            <div id="navbar" className="row">
                <div className="topnav">
                    <a  href="#">
                        <img src={homeIcon} alt=""/>
                    </a>
                    <a href="#">Payments</a>
                    <a href="#">Profile</a>
                    <a href="#">Apply</a>
                    <a href="#" className="pull-right">
                        <button className="btn share-btn-border">JOIN ANZ SHARE INVESTMENT</button>
                    </a>
                </div>
            </div>
            
        )
    }
}
export default Header;