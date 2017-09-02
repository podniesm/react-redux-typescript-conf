import * as React from 'react';
import Identity from './Identity';

export interface IAuthSectionProps {
    permissions?: string[];
    identity: Identity;
}

const authSection: React.StatelessComponent<IAuthSectionProps> = (props): JSX.Element => {
    if (!props.identity || !props.identity.authorize(props.permissions)) {
        return null;
    }
    return (<div>{props.children}</div>);
};

export default authSection;
