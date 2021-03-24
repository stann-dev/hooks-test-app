import React, {createContext, useState} from "react";

const initVideoContext = {
    videos: undefined,
    error: undefined
};

export const VideoContext = createContext(initVideoContext);

export const VideoContextProvider = ({children}) => {
    const [data, setData] = useState(initVideoContext);

    const setContextData = (data) => {
        setData(
            previousData => {
                return {
                    ...previousData,
                    ...data
                }
            }
        );
    }

    return (
        <VideoContext.Provider value={{
            data,
            set: setContextData
        }}>
            {children}
        </VideoContext.Provider>
    )
}
