import React from "react";
import logo from './logo.svg';

function Logo({size_logo}) {

    return (
        //entre llaves se pone javascript
        <img src={logo} width={size_logo} />
    );
}

export default Logo;
