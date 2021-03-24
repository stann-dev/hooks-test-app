import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {DetailsPage} from "../pages/DetailsPage";

export const Routing = () => {
    return (
        <Switch>
            <Route
                path={'/:id'}
                render={(props) => <DetailsPage {...props}/>}
            />
            <Route
                path={'*'}
                render={() => <HomePage/>}
            />
        </Switch>
    )
}
