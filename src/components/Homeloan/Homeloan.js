import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Homeloan.css';
import Navbar from '../Navbar/Navbar.js';

import TextBelowIcon from '../TextBelowIcon/text-below-icon.js';
import locationIcon from '../../images/location-icon.png';
import whiteHomeIcon from '../../images/home-white-icon.png'
import dollarIcon from '../../images/dollar-icon.png'
import blueTickIcon from '../../images/blue-tick-icon.png';
import blueCalIcon from '../../images/blue-calander-icon.png';
import bluePhoneIcon from '../../images/blue-phone-icon.png';
import bluePlayIcon from '../../images/blue-play-icon.png';
class Homeloan extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            TextBelowIconList: [
              { title: 'Free Consultation',
                icon:blueTickIcon,
                styleName:'width-25per'
               },
                { title: 'Book an appointment',
                    icon:blueCalIcon,
                    styleName:'width-25per'
                },
                { title: 'Contact Advisor',
                    icon:bluePhoneIcon,
                    styleName:'width-25per'
              },
              {
                  title:'Guide to homeloan',
                  icon:bluePlayIcon,
                  styleName:'width-25per'
              }
            ],
            value:10
          }
      }
    render() {
        let TextBelowIconContent = null;
        TextBelowIconContent = (
            <div>
              {this.state.TextBelowIconList.map((item, index) => {
                return <TextBelowIcon 
                text={item.title}
                icon={item.icon}
                key={index}
                styleName ={item.styleName}
            />
              })}
            </div>
          );
        return (
                <div id="homeloans" className="container-fluid">
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
                <div className="row buyYourHomeRow margin-bottom-50px">
                    <div>   
                        What would you like to do?
                    </div>
                    <div className="buyYourFirstHomeBtn">
                         <img src={whiteHomeIcon} alt=""/> Buy your first home
                    </div>
                    <div className="refineYourLoanBtn">
                    <span className='badge'>
                        <img src={dollarIcon} alt=""/>
                    </span>
                    Refinance your loan
                    </div>
                </div>
                <div className="row margin-bottom-50px">
                    <div className="container textBelowIconList">
                            {TextBelowIconContent}
                    </div>
                </div>
                <div className="row">
                    <div className="textAlignStyle">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="container text-center">
                        <Link to='/ApplyHomeloan'><div className="proceedBtn margin-right-20px">Proceed</div></Link>
                        <div className="cancelBtn">Cancel</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Homeloan;