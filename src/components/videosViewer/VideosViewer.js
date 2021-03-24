import React, {useContext} from "react";
import "./VideosViewer.scss";
import {SingleVideo} from "../singleVideo/SingleVideo";
import {VideoContext} from "../../context/videoContext/videoContext";
import {Error} from "../error/Error";
import {Loader} from "../loader/Loader";

export const VideosViewer = () => {
    const videoContext = useContext(VideoContext);

    const renderVideos = () => {
        if (videoContext.data.videos === 'loading') {
            return <Loader/>
        } else if (typeof videoContext.data.videos === 'object') {
            return (
                videoContext.data.videos.map((item, key) => {
                    return <SingleVideo key={key} {...item} />
                })
            )
        } else {
            return <Error message={videoContext.data.error}/>
        }
    }
    return (
        <div className={'videos-viewer'}>
            {renderVideos()}
        </div>
    )
}
