import * as React from 'react';

export interface IMenuProps {
    title: string;
}

const menu: React.StatelessComponent<IMenuProps> = (props): JSX.Element => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
};

export default menu;
