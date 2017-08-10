import * as React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import Auth from '../../_core/Auth';
import IMenuItemData from '../menu/IMenuItemData';
import Menu from '../menu/Menu';
import MenuItem from '../menu/MenuItem';

const menuItemsData: IMenuItemData[] = [
    {name: 'DASHBOARD', path: 'dashboard'},
    {name: 'ZADANIA', path: 'zadania'},
];

function createMenuItems(menuItems: IMenuItemData[]): JSX.Element[] {
    return menuItems.map((menuItemData, index) => (
        <MenuItem key={index} url={menuItemData.path}>{menuItemData.name}</MenuItem>
    ));
}

class Main extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <Router>
                <div>
                    <Auth
                        permissions={['one', 'two', 'three', 'four']}
                        requiredPermissions={['one', 'two', 'three', 'four']}
                    >
                        <div>ACCESS</div>
                    </Auth>
                    <Auth
                        permissions={['one', 'tw', 'three', 'four']}
                        requiredPermissions={['one', 'two', 'three', 'four']}
                    >
                        <div>DENY</div>
                    </Auth>
                    <Menu title='AZA BOK'>
                        <ul>
                            {createMenuItems(menuItemsData)}
                        </ul>
                    </Menu>
                    <Route exact={true} path='/' component={() => <div>home!</div>}/>
                    <Route path='/dashboard' component={() => <div>dashboard!</div>}/>
                    <Route path='/zadania' component={() => <div>zadania!</div>}/>
                </div>
            </Router>
        );
    }
}

export default Main;
