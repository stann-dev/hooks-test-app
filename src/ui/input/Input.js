import React from "react";
import "./Input.scss";

export const Input = (props) => {
    return (
        <div className={'inputbox'}>
            <input {...props} />
        </div>
    )
}
