import React from "react";
import "./Error.scss";

export const Error = ({message}) => {
    if(message){
        return (
            <div className={'error'}>
                {message}
            </div>
        )
    }else{
        return null;
    }
}
