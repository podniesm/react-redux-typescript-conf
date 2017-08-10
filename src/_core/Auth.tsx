import * as React from 'react';

export interface IAuthProps {
    permissions: string[];
    requiredPermissions: string[];
}

function authorize(permissions: string[], requiredPermissions: string[]): boolean {
    for (const requiredPermission of requiredPermissions) {
        let hasPermission = false;
        for (const permission of permissions) {
            hasPermission = hasPermission || permission === requiredPermission;
            if (hasPermission) {
                break;
            }
        }
        if (!hasPermission) {
            return false;
        }
    }
    return true;
}

const auth: React.StatelessComponent<IAuthProps> = (props): JSX.Element => {
    if (authorize(props.permissions, props.requiredPermissions)) {
        return (<div>{props.children}</div>);
    }
    return null;
};

export default auth;
