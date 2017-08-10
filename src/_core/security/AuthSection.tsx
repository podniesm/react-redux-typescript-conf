import * as React from 'react';
import User from './User';

export interface IAuthSectionProps {
    permissions?: string[];
    user: User;
}

const authSection: React.StatelessComponent<IAuthSectionProps> = (props): JSX.Element => {
    if (!props.user || !props.user.authorize(props.permissions)) {
        return null;
    }
    return (<div>{props.children}</div>);
};

export default authSection;
