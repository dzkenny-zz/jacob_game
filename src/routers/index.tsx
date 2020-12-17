import React from 'react';
import { Switch, Route } from 'react-router';
import MainPage from '../pages/main';
import SplashPage from '../pages/splash';

function Router() {
    return (
        <Switch>
            <Route exact path="/">
                <SplashPage />
            </Route>
            <Route path="/main">
                <MainPage />
            </Route>
        </Switch>
    )
}

export default Router;