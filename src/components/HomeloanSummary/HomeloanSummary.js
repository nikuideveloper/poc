import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar.js';
import locationIcon from '../../images/location-icon.png';
import arrowIcon from '../../images/arrow-icon.png';
import './HomeloanSummary.css'
class HomeloanSummary extends Component {
    constructor(props){
        super(props);
        this.state={
            applicationForm:{
                personalDetails:{
                    fname:'',
                    mname:'',
                    lname:'',
                    gender:'',
                    DOB:'',
                    Contact:''
                },
                presentAddress:{
                    AddLine1:'',
                    AddLine2:'',
                    state:'',
                    city:'',
                    zipcode:'',
                    sameAsPermanent:false
                },
                propertyDetails:{
                    AddLine1:'',
                    AddLine2:'',
                    state:'',
                    city:'',
                    zipcode:'',
                    sameAsPermanent:false
                },
                employerDetails:{
                    employer:'',
                    designation:'',
                    addressLine:'',
                    state:'',
                    city:'',
                    zipcode:''
                }
            }
        }
    }
    render() {
        let personalDetails =this.state.applicationForm.personalDetails;
        let presentAddress =this.state.applicationForm.presentAddress;
        let propertyDetails = this.state.applicationForm.propertyDetails;
        let employerDetails = this.state.applicationForm.employerDetails
        return (
            <div id="homeloanSummary" className="container-fluid">
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
                <div className="row margin-bottom-50px">
                        <div className="containerStyle BGcolor-white">
                            <p>LOAN SUMMARY</p>
                            <div className="loanSummaryBox">
                                <div className="col-sm-12">
                                    <div className="col-sm-3">
                                        <p>Loan Amount</p>
                                        <div>$ 450,000</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <p>Tenture</p>
                                        <div>25 Years</div>
                                    </div>
                                    <div className="col-sm-3">
                                        <p>Monthly Installment</p>
                                        <div>2,200 AUD</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <p>Interest Rate</p>
                                        <div>4.2%</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <p>Fees</p>
                                        <div>62 AUD</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                </div>
                <div className="row margin-bottom-15px">
                        <div className="containerStyle BGcolor-white">
                            <p>COMPLETE APPLICATION</p>
                        </div>
                </div>
                <div className="row margin-bottom-50px">
                        <div className="containerStyle BGcolor-white">
                            <div className="completeApplicationForm">
                            <form onSubmit={this.handleSubmit}>
                                <div className="col-sm-12">
                                    <div className="col-sm-12">
                                            <div className="formHeaderBorder">
                                                <img src={arrowIcon} alt="" className="rotate-Icon"/> PERSONAL DETAILS 
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="fname">First Name</label>
                                                        <input type="text" className="form-control" name="fname" id="fname" value={personalDetails.fname}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="mname">Middle Name</label>
                                                        <input type="text" className="form-control" name="mname" id="mname" value={personalDetails.mname}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="lname">Last Name</label>
                                                        <input type="text" className="form-control" name="lname" id="lname" value={personalDetails.lname}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="Gender">Gender</label>
                                                        <input type="text" className="form-control" name="Gender" id="Gender" value={personalDetails.gender}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="DOB">DOB</label>
                                                        <input type="text" className="form-control" name="DOB" id="DOB" value={personalDetails.DOB}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="Contact">Contact #</label>
                                                        <input type="text" className="form-control" name="Contact" id="Contact" value={personalDetails.Contact}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="formHeaderBorder">
                                                <img src={arrowIcon} alt="" className="rotate-Icon"/> PRESENT ADDRESS 
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="AddLine1">Address Line 1</label>
                                                        <input type="text" className="form-control" name="AddLine1" id="AddLine1" value={presentAddress.AddLine1}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="AddLine2">Address Line 2</label>
                                                        <input type="text" className="form-control" name="AddLine2" id="AddLine2" value={presentAddress.AddLine2}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="state">State</label>
                                                        <input type="text" className="form-control" name="state" id="state" value={presentAddress.state}/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-sm-12">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="city">City</label>
                                                        <input type="text" className="form-control" name="city" id="city" value={presentAddress.city}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="zipcode">Zip Code</label>
                                                        <input type="text" className="form-control" name="zipcode" id="zipcode" value={presentAddress.zipcode}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="sameAsPermanent" className="width100"><span className="margin-right-5per">Permanent Address</span>  
                                                         <input type="checkbox" name="sameAsPermanent" id="sameAsPermanent" value={presentAddress.sameAsPermanent}/>
                                                            Same as Present Address</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="formHeaderBorder">
                                                <img src={arrowIcon} alt="" className="rotate-Icon"/> PROPERTY DETAILS 
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="propertyDetailsAddLine1">Address Line 1</label>
                                                        <input type="text" className="form-control" name="propertyDetailsAddLine1" id="propertyDetailsAddLine1" value={propertyDetails.AddLine1}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="propertyDetailsAddLine2">Address Line 2</label>
                                                        <input type="text" className="form-control" name="propertyDetailsAddLine2" id="propertyDetailsAddLine2" value={propertyDetails.AddLine2}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="propertyDetailsstate">State</label>
                                                        <input type="text" className="form-control" name="propertyDetailsstate" id="propertyDetailsstate" value={propertyDetails.state}/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-sm-12">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="propertyDetailscity">City</label>
                                                        <input type="text" className="form-control" name="propertyDetailscity" id="propertyDetailscity" value={propertyDetails.city}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="propertyDetailszipcode">Zip Code</label>
                                                        <input type="text" className="form-control" name="propertyDetailszipcode" id="propertyDetailszipcode" value={propertyDetails.zipcode}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="formHeaderBorder">
                                                <img src={arrowIcon} alt="" className="rotate-Icon"/> EMPLOYER DETAILS 
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="employerDetailsemployer">Employer</label>
                                                        <input type="text" className="form-control" name="employerDetailsemployer" id="employerDetailsemployer" value={employerDetails.employer}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="employerDetailsDesignation">Designation</label>
                                                        <input type="text" className="form-control" name="employerDetailsDesignation" id="employerDetailsDesignation" value={employerDetails.designation}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="employerDetailsAddLine">Address Line</label>
                                                        <input type="text" className="form-control" name="employerDetailsAddLine" id="employerDetailsAddLine" value={employerDetails.addressLine}/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-sm-12 margin-bottom-50px">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="employerDetailsstate">state</label>
                                                        <input type="text" className="form-control" name="employerDetailsstate" id="employerDetailsstate" value={employerDetails.state}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="employerDetailscity">City</label>
                                                        <input type="text" className="form-control" name="employerDetailscity" id="employerDetailscity" value={employerDetails.city}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="employerDetailszipcode">Zip Code</label>
                                                        <input type="text" className="form-control" name="employerDetailszipcode" id="employerDetailszipcode" value={employerDetails.zipcode}/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                    </div>
                                </div>
                                <div className="row margin-bottom-100px">
                                    <div className="container text-center">
                                        <div className="proceedBtn margin-right-20px" type="submit" value="Submit">Submit Application</div>
                                        <div className="cancelBtn">Save Application</div>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
export default HomeloanSummary;