import React from "react";
import "./SubpageHeader.scss";
import {Logo} from "../logo/Logo";
import {Button} from "../../ui/button/Button";

export const SubpageHeader = () => {
    return (
        <div className={'subpageHeader'}>
            <Button to={'/'}>Back</Button>
            <div className={'logo-container'}>
                <Logo/>
            </div>
        </div>
    )
}
