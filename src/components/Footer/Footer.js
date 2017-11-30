import React from 'react';

import './Footer.css';

const CardList = ( ) => {
    return (
        <div className={"footerStyle " + (window.location.pathname === '/'? 'displayNone' : '')}>
            All Rights Reserved
        </div>
    )
};

export default CardList;
