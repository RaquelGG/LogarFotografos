import React from "react";
import logo from './logo.svg';

function Logo({size_logo, other_logo}) {
    return (
        //entre llaves se pone javascript
        <img src={!!other_logo ? other_logo : logo} width={size_logo} />
    );
}

export default Logo;
