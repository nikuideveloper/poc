import React from 'react';

import './text-below-icon.css';

const TextBelowIcon = ( props ) => {
    return (
            <div className={props.styleName}>
                <div><img src={props.icon} alt=""/></div>
                <div className="textStyle">{props.text}</div>
            </div>
    )
};

export default TextBelowIcon;
