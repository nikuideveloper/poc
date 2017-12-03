import React from 'react'
import HomeloanSummary from '../HomeloanSummary/HomeloanSummary.js';
import {Link} from 'react-router-dom';
const HomeLoanPlansTable = () => (
    <div id="HomeLoanPlansTable" className="table-responsive">          
    <table className="table">
        <thead>
        <tr>
            <th>PRODUCT TYPE</th>
            <th>BEST RATE</th>
            <th>PROCESSING FEE</th>
            <th>MONTHLY INSTALLMENT</th>
            <th>FEATURES</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>VALUE LOAN</td>
                <td>4.6%</td>
                <td>60 AUD</td>
                <td>32200 AUD</td>
                <td>Extra Repayment</td>
                <td><Link to="/HomeloanSummary"><button className="btn btn-success">Apply Now</button></Link></td>
            </tr>
            <tr>
                <td>HOME SMART</td>
                <td>5.2%</td>
                <td>70 AUD</td>
                <td>2900 AUD</td>
                <td>Extra Repayment</td>
                <td><Link to="/HomeloanSummary"><button className="btn btn-success">Apply Now</button></Link></td>
            </tr>
            <tr>
                <td>HOME EQUITY</td>
                <td>4.9%</td>
                <td>62 AUD</td>
                <td>2400 AUD</td>
                <td>Extra Repayment</td>
                <td><Link to="/HomeloanSummary"><button className="btn btn-success">Apply Now</button></Link></td>
            </tr>
        </tbody>
    </table>
  </div>
)

export default HomeLoanPlansTable