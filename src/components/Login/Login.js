import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import lockIcon from '../../images/lock-icon.png'

import './Login.css';
class Login extends Component {
    constructor() {
        super();
        this.state = {
          CRN: '',
          password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      handleSubmit(e) {
        let itemsRef =[];
        e.preventDefault();
        const item = {
          password: this.state.password,
          CRN: this.state.CRN
        }
        itemsRef.push(item);
        this.setState({
          password: '',
          CRN: ''
        });
        console.log(itemsRef);
      }
    render() {
        return (
            <div> 
                <form className="loginForm" onSubmit={this.handleSubmit}>
                    <h3 className="color-light-blue padding-tb-5per">Login to ANZ Internet Banking</h3>
                    <div className="form-group margin-bottom-40px">
                        <label htmlFor="CRN">Customer Registration Number</label>
                        <input type="text" name="CRN" onChange={this.handleChange} value={this.state.CRN} placeholder="XXXXXXXXXXXXXXXXXXXX" className="form-control" id="CRN"/>
                    </div>
                    <div className="form-group margin-bottom-40px">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="***************" className="form-control" id="pwd"/>
                    </div>
                    <div className="form-group margin-bottom-40px">
                        <label><a className="color-light-blue" href="void();">Forgot Login Details ?</a></label>
                    </div>
                    <Link className="color-white" to='/landing'><button type="submit" className="btn btn-default submit-btn-style margin-bottom-40px"><img src={lockIcon} className="lockIcon" alt=""/>Submit</button></Link>
                </form>
            </div>
        )
    }
}
export default Login;