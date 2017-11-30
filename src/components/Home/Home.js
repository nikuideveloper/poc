import React, { Component } from 'react';
import './Home.css';
import dollorIcon from '../../images/dollar-icon.png'
import cartIcon from '../../images/cart-icon.png'
import paypalIcon from '../../images/paypal-icon.png'
import lockIcon from '../../images/lock-icon.png'
import Header from '../Header/Header';
import Login from '../Login/Login.js';
import CardList from '../CardList/Card-list.js'
class App extends Component {
  state = {
    listItems: [
      { title: 'Transfer Money',
        icon:dollorIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis',
        btnText: 'Know More'
       },
        { title: 'Shop Online',
        icon:cartIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis',
        btnText: 'Know More'
        },
        { title: 'Pay Bills',
        icon:paypalIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis',
        btnText: 'Know More'
      },
    ]
  }
  render() {
    let items = null;
    items = (
            <div>
              {this.state.listItems.map((item, index) => {
                return <CardList
                  title={item.title} 
                  icon={item.icon}
                  key={index}
                  text={item.text}
                  btnText={item.btnText} />
              })}
            </div>
          );
      
    return (
        <div className="container main-area">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-5 form-box">
              <Login></Login>
            </div>
            <div className="col-sm-5 col-sm-push-1">
              {items}
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default App;
