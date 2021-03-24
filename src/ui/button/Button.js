import React from "react";
import "./Button.scss";
import {Link} from "react-router-dom";

export const Button = (props) => {
    if(props.to){
        return (
            <div className={'buttonbox'}>
                <Link to={props.to} {...props}/>
            </div>
        )
    }
    return (
        <div className={'buttonbox'}>
            <button {...props}/>
        </div>
    )
}
