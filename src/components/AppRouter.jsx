import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { routes } from '../router'

function AppRouter(props) {
    return (
        <Switch>
            {routes.map(route =>
                <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
            )}
        </Switch>
    );
}

export default AppRouter;