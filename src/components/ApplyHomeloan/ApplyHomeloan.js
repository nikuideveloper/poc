import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar.js';
import './ApplyHomeloan.css';
import HomeLoanPlansTable from './HomeLoanPlansTable.js';
import locationIcon from '../../images/location-icon.png';
import RangeSlider from '../RangeSlider/RangeSlider.js';
import CheckboxInput from '../Checkbox/Checkbox.js';
import planeIcon from '../../images/plane-icon.png'
import phoneIcon from '../../images/blue-phone-icon.png'
class ApplyHomeloan extends Component {
    constructor (props) {
        super(props);
        this.state= {
            offer1:{ label: "ANZ DEPOSIT ACCOUNT", name: "ANZDepositAcc", value: "ANZ DEPOSIT ACCOUNT" },
            offer2:{ label: "ANZ PREMIUM CREDIT CARD", name: "ANZCreditCard", value: "ANZ PREMIUM CREDIT CARD" },
            offer3:{ label: "THIRD PARTY HOME INSURANCE", name: "ANZPartyInsurance", value: "THIRD PARTY HOME INSURANCE" }
        }
    }
    render() {
        return (
            <div id="homeloansApply" className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <Navbar></Navbar>
                    </div>
                </div>
                <div className="row margin-bottom-15px">
                        <div className="jumbotron">
                            <p><img src={locationIcon} alt="" className="locationImages"/>Find ANZ</p>
                            <h2>Apply for ANZ Home Loans</h2> 
                        </div>
                </div>
                <div className="margin-botton-5per">
                     <RangeSlider/>
                </div>
                <div className="row margin-bottom-15px">
                        <div className="containerStyle border BGcolor-white">
                            <h4>HOME LOAN PLANS</h4> 
                        </div>
                </div>
                <div className="row margin-bottom-50px">
                        <div className="containerStyle BGcolor-white">
                        <HomeLoanPlansTable/>
                        </div>
                </div>
                <div className="row margin-bottom-50px">
                        <div className="containerStyle BGcolor-white">
                        <h4>You are also Eligible for the Offers below</h4>
                        <div className="col-sm-12 greyBorder pd-2per">
                            <div className="col-sm-4">
                                 <CheckboxInput label={this.state.offer1.label} name={this.state.offer1.name} />
                            </div>
                            <div className="col-sm-4">
                                <CheckboxInput label={this.state.offer2.label} name={this.state.offer2.name} />
                            </div>
                            <div className="col-sm-4">
                                <CheckboxInput label={this.state.offer3.label} name={this.state.offer3.name} />
                            </div>
                        </div>
                        
                        </div>
                </div>
                <div className="row margin-bottom-100px">
                        <div className="containerStyle border BGcolor-white">
                            <div className="row">
                                <div className="col-sm-2 pd-b-20px">
                                    <img src={planeIcon} alt=""/>
                                    <span> Send Offer</span>
                                </div>
                                <div className="col-sm-3 pd-b-20px">
                                    <input type="text" placeholder="Email Id"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-2 pd-b-20px">
                                    <img src={phoneIcon} alt=""/>
                                    <span> Get a call back</span>
                                </div>
                                <div className="col-sm-3 pd-b-20px">
                                    <input type="text" placeholder="Contact No" />
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
        )
    }
}
export default ApplyHomeloan;