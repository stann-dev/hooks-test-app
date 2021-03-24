import React, {useState} from "react";
import "./Img.scss";
import {Loader} from "../../components/loader/Loader";

export const Img = (props) => {
    const [isLoaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    if (error) {
        return <div className={'img-placeholder'}>Image unavailable</div>
    }
    return <>
        {!isLoaded ?
            <div className={'img-loader'}><Loader/></div> :
            null
        }
        <img {...props} onLoad={() => setLoaded(true)} onError={() => setError(true)}/>
    </>
}
