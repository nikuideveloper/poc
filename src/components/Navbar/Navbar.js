import React, { Component } from 'react'
import './Navbar.css';
import homeIcon from '../../images/home-icon.png';
import calculatorIcon from '../../images/calculator-icon.png';
class Navbar extends Component {

    render() {
        
        return (
            <div>
                <div id="landingNavbar" className={"row " + (window.location.pathname === '/landing'? '' : 'displayNone')}>
                    <div className="topnav">
                        <a  href="javascript:void(0)">
                            <img src={homeIcon} alt=""/>
                        </a>
                        <a href="javascript:void(0)">Payments</a>
                        <a href="javascript:void(0)">Profile</a>
                        <a href="javascript:void(0)">Apply</a>
                        <a href="javascript:void(0)" className="pull-right">
                            <button className="btn share-btn-border">JOIN ANZ SHARE INVESTMENT</button>
                        </a>
                    </div>
                </div>
                <div id="homeloanNavbar" className={"row " + (window.location.pathname !== '/landing'? '' : 'displayNone')}>
                    <div className="topnav">
                        <a href="javascript:void(0)">Home</a>
                        <a href="javascript:void(0)">Check Eligibilty</a>
                        <a href="javascript:void(0)">Find & Compare</a>
                        <a href="javascript:void(0)">Products</a>
                        <a href="javascript:void(0)">Contact Us</a>
                        <a href="javascript:void(0)" className="pull-right">
                         <img src={calculatorIcon} alt="" className="margin-right-10px"/>Calculators and Tools
                        </a>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Navbar;