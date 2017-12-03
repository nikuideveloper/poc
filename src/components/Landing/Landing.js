import React, { Component } from 'react'
import './Landing.css';
import Navbar from  '../Navbar/Navbar.js';
import LandingTable from './LandingTable.js';
import LandingCardList from '../LandingCardList/Landing-card-list';

import print from '../../images/print-icon.png';
import feedback from '../../images/feedback-icon.png';
import smile from '../../images/smile-icon.png';
import plusIcon from '../../images/plus-icon.png';

import HomeLoanIcon from '../../images/HomeLoan-icon.png';
import InsuranceIcon from '../../images/Insurance-icon.png';
import PayBillIcon from '../../images/payBill-icon.png';
class Landing extends Component {
    state = {
        landingCardItems: [
          { title: 'Home Loans',
            subText:'Apply now with 0% processing fees',
            icon: HomeLoanIcon,
            btnText: 'Know More',
            navpathname:'/Homeloan'
           },
            { title: 'Insurance',
            subText:'',
            icon: InsuranceIcon,
            btnText: 'Find More',
            navpathname:''
            },
            { title: 'Pay Bills/People',
            subText:'With ease and convenience',
            icon: PayBillIcon,
            btnText: 'Find More',
            navpathname:''
          },
        ]
      }
    render() {
        let LandingCardListItems = null;
        LandingCardListItems = (
                <div>
                  {this.state.landingCardItems.map((item, index) => {
                    return <LandingCardList
                      title={item.title} 
                      subText={item.subText}
                      key={index}
                      icon={item.icon}
                      btnText={item.btnText}
                      navpathname = {item.navpathname}
                      />
                  })}
                </div>
              );
        return (
            <div id="landingContainer" className="container-fluid">
               <Navbar></Navbar>
               <div className="row accountRow padding-top-20px">
                    <div className="col-sm-10">
                        Your Accounts
                    </div>
                    <div id="iconList" className="col-sm-2 display-flex">
                        <div>
                            <div><img src={print} alt=""/></div>
                            <div className="font-12px">print</div>
                        </div>
                        <div>
                            <div><img src={feedback} alt=""/></div>
                            <div className="font-12px">Feedback</div>
                        </div>
                        <div>
                            <div><img src={smile} alt=""/></div>
                            <div className="font-12px">Help</div>
                        </div>
                    </div>
               </div>
               <div className="col-sm-12 margin-bottom-50px">
                    <LandingTable></LandingTable>
                    <div className="openAccountRow margin-bottom-50px">
                        <div className="col-sm-12">
                            <img src={plusIcon} alt="" className="height-25px"/>
                            <span className="openAccountText">Open a new account</span>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm-8 col-sm-push-2">
                            <div className="btn-group btn-group-justified">
                                <a href="javascript:void(0)" className="btn btn-primary">View Statements</a>
                                <a href="javascript:void(0)" className="btn btn-primary">Activate an ANZ card</a>
                                <a href="javascript:void(0)" className="btn btn-primary">ANZ Shield</a>
                            </div>
                        </div>
                    </div>
               </div> 
               <div className="col-sm-12 padding-bottom-10per">
                    {LandingCardListItems}
               </div>
                         
            </div>
        )
    }
}
export default Landing;