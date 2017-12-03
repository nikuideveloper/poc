import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home.js';
import Landing from './Landing/Landing.js';
import Homeloan from './Homeloan/Homeloan.js';
import ApplyHomeloan from './ApplyHomeloan/ApplyHomeloan.js';
import HomeloanSummary from './HomeloanSummary/HomeloanSummary.js';
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/landing' component={Landing}/>
      <Route path='/Homeloan' component={Homeloan}/>
      <Route path='/ApplyHomeloan' component={ApplyHomeloan}/>
      <Route path='/HomeloanSummary' component={HomeloanSummary}/>
    </Switch>
  </main>
)

export default Main