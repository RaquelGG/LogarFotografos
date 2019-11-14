import React from "react";
import logo from './logo.svg';

function Logo({width}) {
    return (
        //entre llaves se pone javascript
        <img src={logo} width={width}/>
    );
}

export default Logo;
