import {getDirectiveValues} from "graphql";
import { Route, Switch } from 'react-router-dom'
import React, { FC } from 'react';

import {HOME} from './utils/routeConstans'
import Home from './components/Home'

const Router:FC = () => {

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={ HOME } component={ Home }/>
            </Switch>
        </React.Fragment>
    );
};

export default Router