import React, {useState, useEffect} from "react";
import "./SingleVideoDetailed.scss";
import {Img} from "../../ui/img/Img";
import {api} from "../../apiController/apiController";
import {Loader} from "../loader/Loader";
import {TextWithLabel} from "../../ui/textWithLabel/TextWithLabel";

export const SingleVideoDetailed = ({imdbID}) => {
    const [data, setData] = useState(null);

    const getSingleVideoDetails = async (id) => {
        const response = await api.get('/', {i: id});
        if (response.Response === "True") {
            setData(response);
        } else if (response.Response === "False") {
            setData(response.Error);
        }
    }

    useEffect(() => {
        getSingleVideoDetails(imdbID);
    }, []);
    if (data) {
        return (
            <div className={'single-video-detailed'}>
                <div className={'single-video-detailed__cover'}>
                    <Img src={data.Poster} alt={`${data.Title} cover`}/>
                </div>
                <div className={'details'}>
                    <div className={'details__title'}>
                        {data.Title}
                    </div>
                    <div className={'details__rest'}>
                        {Object.keys(data).map((i, k) => {
                            if(
                                i === 'Ratings' ||
                                i === 'Poster' ||
                                i === 'Response'){
                                return null;
                            }
                            return <TextWithLabel
                                key={k}
                                label={i}
                                text={data[i]}
                            />
                        })}
                    </div>
                </div>
            </div>
        )
    } else {
        return <Loader/>
    }
}
