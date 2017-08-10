import * as React from 'react';
import {
    Redirect,
    Route,
    RouteProps,
} from 'react-router-dom';
import User from './User';

export interface IAuthRouteProps extends RouteProps {
    permissions?: string[];
    user: User;
}

const authRoute: React.StatelessComponent<IAuthRouteProps> = (props): JSX.Element => {
    if (!props.user) {
        return (
            <Redirect to={{pathname: '/login', state: { from: props.location }}}/>
        );
    }
    if (!props.user.authorize(props.permissions)) {
        return (
            <Redirect to={{pathname: '/nopermission', state: { from: props.location }}}/>
        );
    }
    return (
        <Route
            path={props.path}
            component={props.component}
            exact={props.exact}
            children={props.children}
            location={props.location}
            strict={props.strict}
            render={props.render}
        />
    );
};

export default authRoute;
