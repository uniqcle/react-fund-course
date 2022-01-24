import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '../router'

function AppRouter(props) {
    const isAuth = true;

    return (
        isAuth
            ? <Switch>
                {privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                )}
            </Switch>
            : <Switch>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                )}
            </Switch>
    );
}

export default AppRouter;