import * as React from 'react';
import IMenuItemData from './IMenuItemData';
import MenuItem from './MenuItem';

export interface IMenuProps {
    title: string;
    menuItems: IMenuItemData[];
}

function createMenuItems(menuItems: IMenuItemData[]): JSX.Element[] {
    return menuItems.map((menuItemData) => (
        <MenuItem url={menuItemData.path}>{menuItemData.name}</MenuItem>
    ));
}

const menu: React.StatelessComponent<any> = (props: IMenuProps): JSX.Element => {
    return (
        <div>
            <h1>{props.title}</h1>
            {createMenuItems(props.menuItems)}
        </div>
    );
};

export default menu;
