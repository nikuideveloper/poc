import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home.js'
import Landing from './Landing/Landing.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/landing' component={Landing}/>
    </Switch>
  </main>
)

export default Main