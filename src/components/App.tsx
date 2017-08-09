import * as React from 'react';
import IAppState from '../store/IStoreState';

export interface IAppActionProps {
    addHandler: () => void;
    subtractHandler: () => void;
}

export interface IAppDataProps {
    name: string;
    quantity: number;
}

export interface IAppProps extends IAppDataProps, IAppActionProps {}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
          quantity: 0,
        };
    }

    public render(): JSX.Element {
        return (
            <div>
                <div>Hello, {this.props.name} and quantity: {this.props.quantity}</div>
                <button onClick={this.props.addHandler}>Add</button>
                <button onClick={this.props.subtractHandler}>Subtract</button>
            </div>
        );
    }
}

export default App;
