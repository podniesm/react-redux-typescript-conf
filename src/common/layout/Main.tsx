import * as React from 'react';
import IMenuItemData from '../menu/IMenuItemData';
import Menu from '../menu/Menu';

const menuItems: IMenuItemData[] = [
    {name: 'DASHBOARD', path: 'dashboard'},
    {name: 'ZADANIA', path: 'zadania'},
];

class Main extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div>
                <Menu title='AZA BOK' menuItems={menuItems}/>
            </div>
        );
    }
}

export default Main;
