import * as React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import AuthRoute from '../../_core/security/AuthRoute';
import AuthSection from '../../_core/security/AuthSection';
import Identity from '../../_core/security/Identity';
import TasksContainer from '../../tasks/TasksContainer';
import IMenuItemData from '../menu/IMenuItemData';
import Menu from '../menu/Menu';
import MenuItem from '../menu/MenuItem';

const menuItemsData: IMenuItemData[] = [
    {name: 'DASHBOARD', path: 'dashboard'},
    {name: 'ZADANIA', path: 'zadania'},
    {name: 'INFO', path: 'info'},
];

const identity = new Identity('Michal', ['one', 'two']);

class Main extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <Router>
                <div>
                    <AuthSection permissions={['one', 'two']} identity={identity}>
                        <div>ACCESS</div>
                    </AuthSection>
                    <AuthSection permissions={['one', 'two', 'tt']} identity={identity}>
                        <div>DENY</div>
                    </AuthSection>
                    <Menu title='AZA BOK'>
                        <ul>{createMenuItems(menuItemsData)}</ul>
                    </Menu>
                    <Route exact={true} path='/' component={() => <div>home!</div>}/>
                    <AuthRoute
                        path='/dashboard'
                        component={() => <div>dashboard!</div>}
                        identity={identity}
                        permissions={['one1']}
                    />
                    <AuthRoute
                        path='/zadania'
                        component={TasksContainer}
                        identity={identity}
                        permissions={['one']}
                    />
                    <AuthRoute
                        path='/info'
                        component={() => <div>info!</div>}
                        identity={identity}
                        permissions={['two']}
                    />
                </div>
            </Router>
        );
    }
}

function createMenuItems(menuItems: IMenuItemData[]): JSX.Element[] {
    return menuItems.map((menuItemData, index) => (
        <MenuItem key={index} url={menuItemData.path}>{menuItemData.name}</MenuItem>
    ));
}

export default Main;
