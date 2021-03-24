import React from "react";
import "./DetailsPage.scss";
import {SingleVideoDetailed} from "../components/singleVideoDetailed/SingleVideoDetailed";
import {SubpageHeader} from "../components/subpageHeader/SubpageHeader";

export const DetailsPage = (props) => {
    return (
        <div className={'detailspage'}>
            <SubpageHeader/>
            <div className={'single-video-detailed-wrapper'}>
                <SingleVideoDetailed imdbID={props.match.params.id}/>
            </div>
        </div>
    )
}
