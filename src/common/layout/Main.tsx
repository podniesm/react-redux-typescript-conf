import * as React from 'react';
import {
    Link,
    Route,
} from 'react-router-dom';
import AuthRoute from '../../_core/security/AuthRoute';
import AuthSection from '../../_core/security/AuthSection';
import User from '../../_core/security/User';
import Tasks from '../../tasks/TasksPage';
import IMenuItemData from '../menu/IMenuItemData';
import Menu from '../menu/Menu';
import MenuItem from '../menu/MenuItem';

const menuItemsData: IMenuItemData[] = [
    {name: 'DASHBOARD', path: 'dashboard'},
    {name: 'ZADANIA', path: 'zadania'},
    {name: 'INFO', path: 'info'},
];

const user = new User('Michal', ['one', 'two']);

class Main extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div>
                <AuthSection permissions={['one', 'two']} user={user}>
                    <div>ACCESS</div>
                </AuthSection>
                <AuthSection permissions={['one', 'two', 'tt']} user={user}>
                    <div>DENY</div>
                </AuthSection>
                <Menu title='AZA BOK'>
                    <ul>{createMenuItems(menuItemsData)}</ul>
                </Menu>
                <Route exact={true} path='/' component={() => <div>home!</div>}/>
                <AuthRoute
                    path='/dashboard'
                    component={() => <div>dashboard!</div>}
                    user={user}
                    permissions={['one1']}
                />
                <AuthRoute
                    path='/zadania'
                    component={Tasks}
                    user={user}
                    permissions={['one']}
                />
                <AuthRoute
                    path='/info'
                    component={() => <div>info!</div>}
                    user={user}
                    permissions={['two']}
                />
            </div>
        );
    }
}

function createMenuItems(menuItems: IMenuItemData[]): JSX.Element[] {
    return menuItems.map((menuItemData, index) => (
        <MenuItem key={index} url={menuItemData.path}>{menuItemData.name}</MenuItem>
    ));
}

export default Main;
