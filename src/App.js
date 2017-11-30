import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/main.js';
class App extends Component {
  render() {      
    return (
      <div className={"" + (window.location.pathname === '/landing'? 'landing' : '')}>
        <Header />
        <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;
