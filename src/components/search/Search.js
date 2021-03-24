import React, {useState, useContext} from "react";
import "./Search.scss";
import {Input} from "../../ui/input/Input";
import {Button} from "../../ui/button/Button";
import {api} from "../../apiController/apiController";
import {VideoContext} from "../../context/videoContext/videoContext";

export const Search = () => {
    const videoContext = useContext(VideoContext);
    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const getVideoList = async (title) => {
        videoContext.set({
            error: undefined,
            videos: 'loading'
        });

        const searchQuery = {
            s: title
        }

        const response = await api.get('/', searchQuery);
        if(response.Response === "True"){
            videoContext.set({
                videos: response.Search
            });
        }else if(response.Response === "False"){
            videoContext.set({
                error: response.Error,
                videos: undefined
            });
        }
    }

    const handleSearchFormSubmit = (e) => {
        e.preventDefault();
        getVideoList(searchValue);
    }

    return(
        <form className={'searchbox'} onSubmit={handleSearchFormSubmit}>
            <Input
                placeholder={'What movie are you looking for?'}
                value={searchValue}
                onChange={handleSearchInputChange}
            />
            <Button>Go</Button>
        </form>
    )
}
