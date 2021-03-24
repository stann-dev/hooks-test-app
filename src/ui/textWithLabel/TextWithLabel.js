import React from "react";
import "./TextWithLabel.scss";

export const TextWithLabel = (props) => {
    const {label, text} = props;
    return(
        <div className={'text-with-label'}>
            <div className={'label'}>
                {label}
            </div>
            <div className={'text'}>
                {text}
            </div>
        </div>
    )
}
