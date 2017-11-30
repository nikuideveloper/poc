import React from 'react'
import './LandingTable.css';

const LandingTable = () => (
    <table className="table table-striped">
    <thead>
      <tr>
        <th>Account Type</th>
        <th>Account Number</th>
        <th>Current balance</th>
        <th>Available Funds</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>ANZ Access Advantage</td>
        <td>XXXX 1234 5678</td>
        <td>$5,450</td>
        <td>$3,400</td>
      </tr>
      <tr>
        <td>ANZ Online Saver</td>
        <td>XXXX 9876 5432</td>
        <td>$1,450</td>
        <td>$450</td>
      </tr>
    </tbody>
  </table>
)

export default LandingTable