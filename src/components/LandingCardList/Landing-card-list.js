import React from 'react';
import { Link } from 'react-router-dom'
import './Landing-card-list.css';

const LandingCardList = ( props ) => {
    return (
        
            <div className="col-sm-4 pos-relative">
                <img src={props.icon} alt="" className="width-100-per"/>
                <p className="cardText">{props.title}</p>
                <p className="cardSubText">{props.subText}</p>
                <Link to={props.navpathname}><div className="cardBtn">{props.btnText}</div></Link>
            </div>

    )
};

export default LandingCardList;
