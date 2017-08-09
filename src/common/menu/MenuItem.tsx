import * as React from 'react';
import {
    Link,
    Route,
} from 'react-router-dom';

export interface IMenuItemProps {
    url: string;
}

const menuItem: React.StatelessComponent<IMenuItemProps> = (props): JSX.Element => {
    return (
        <li><Link to={props.url}>{props.children}</Link></li>
    );
};

export default menuItem;
