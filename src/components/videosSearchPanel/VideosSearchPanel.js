import React from "react";
import "./VideosSearchPanel.scss";
import {Search} from "../search/Search";
import {VideosViewer} from "../videosViewer/VideosViewer";
import {Logo} from "../logo/Logo";

export const VideosSearchPanel = () => {

    return (
        <div className={'movies-search-panel'}>
            <div className={'logo-area'}>
                <Logo/>
            </div>
            <div className={'search-area'}>
                <Search/>
            </div>
            <div className={'view-area'}>
                <VideosViewer/>
            </div>
        </div>
    )
}
