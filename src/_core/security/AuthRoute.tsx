import * as React from 'react';
import {
    Redirect,
    Route,
    RouteProps,
} from 'react-router-dom';
import Identity from './Identity';

export interface IAuthRouteProps extends RouteProps {
    permissions?: string[];
    identity: Identity;
}

const authRoute: React.StatelessComponent<IAuthRouteProps> = ({component, ...rest}): JSX.Element => {
    return <Route {...rest} render={(props: RouteProps) => renderAuth(props, rest.identity, rest.permissions, component)}/>;
};

function renderAuth(props: RouteProps, user: Identity, permissions: string[], component: any): JSX.Element {
    if (!user) {
        return <Redirect to={{pathname: '/login', state: { from: props.location }}}/>;
    }
    if (!user.authorize(permissions)) {
        return <Redirect to={{pathname: '/nopermission', state: { from: props.location }}}/>;
    }
    return React.createElement(component, props);
}

export default authRoute;
