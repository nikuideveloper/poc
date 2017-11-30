import React from 'react';

import './card-list.css';

const CardList = ( props ) => {
    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <span className={"" + (props.title === 'Transfer Money'? 'badge' : 'padding-right-15px ')}>
                    <img src={props.icon} alt=""/>
                </span>
                <span className="titleStyle">
                    {props.title}
                </span>
                <p>{props.text}</p>
                <button className="btn knowMoreBtn">{props.btnText}</button>
            </div>
        </div>
    )
};

export default CardList;
