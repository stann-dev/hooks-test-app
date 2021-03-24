import React from "react";
import "./SingleVideo.scss";
import {Img} from "../../ui/img/Img";
import {Link} from "react-router-dom";

export const SingleVideo = ({Poster, Title, Type, Year, imdbID}) => {
    return(
        <Link to={`/${imdbID}`} className={'single-video'}>
            <div className={'single-video__cover'}>
                <Img src={Poster} alt={`${Title} cover`}/>
                {/*<img src={Poster} alt={`${Title} cover`}/>*/}
            </div>
            <div className={'single-video__details'}>
                <div className={'single-video__title'}>{Title}</div>
                <div className={'single-video__important-details'}>
                    <div className={'single-video__runtime'}>{Year}</div>
                    <div className={'single-video__genre'}>{Type}</div>
                </div>
            </div>
        </Link>
    )
}
