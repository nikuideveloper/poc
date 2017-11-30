import React from 'react';

import './Landing-card-list.css';

const LandingCardList = ( props ) => {
    return (
        
            <div className="col-sm-4 pos-relative">
                <img src={props.icon} className="width-100-per"/>
                <p className="cardText">{props.title}</p>
                <p className="cardSubText">{props.subText}</p>
                <div className="cardBtn">{props.btnText}</div>
            </div>
            
    )
};

export default LandingCardList;
