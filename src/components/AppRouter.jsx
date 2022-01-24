import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Posts from '../pages/Posts';
import About from '../pages/About'
import Errors from '../pages/Errors';

function AppRouter(props) {
    return (
        <Switch>
            <Route path="/" exact>
                <Posts />
            </Route>

            <Route path="/about" >
                <About />
            </Route>
            <Route path="/posts">
                <Posts />
            </Route>
            <Route path="/errors">
                <Errors />
            </Route>
            <Redirect to="/errors" />
        </Switch>
    );
}

export default AppRouter;