import * as React from 'react';

export interface IMenuItemProps {
    url: string;
}

const menuItem: React.StatelessComponent<IMenuItemProps> = (props: IMenuItemProps): JSX.Element => {
    return (
        <div>{props.url}</div>
    );
};

export default menuItem;
