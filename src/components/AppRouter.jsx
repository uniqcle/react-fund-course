import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Posts from '../pages/Posts';
import About from '../pages/About'
import Errors from '../pages/Errors';
import PostIdPage from '../pages/PostIdPage';

function AppRouter(props) {
    return (
        <Switch>
            <Route path="/" exact>
                <Posts />
            </Route>

            <Route path="/about" >
                <About />
            </Route>
            <Route exact path="/posts">
                <Posts />
            </Route>
            <Route exact path="/posts/:id">
                <PostIdPage />
            </Route>
            <Route path="/errors">
                <Errors />
            </Route>
            <Redirect to="/errors" />
        </Switch>
    );
}

export default AppRouter;