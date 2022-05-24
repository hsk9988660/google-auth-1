import React from "react";
import {Link} from "react-router-dom";
import  {GoogleAuth} from "./GoogleAuth";

export  const Header = ()=>{
    return(
        <div>
            {/*<Link to="/" >Stream</Link>*/}
            {/*<Link to="/">All streams </Link>*/}
            <GoogleAuth/>
        </div>
    )
}