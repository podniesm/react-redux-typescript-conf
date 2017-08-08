import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {quantityActions} from '../actions/quantityActions';
import IAppState from '../store/IStoreState';


interface IAppActionProps {
    addHandler: () => void;
    subtractHandler: () => void;
}

interface IAppDataProps {
    name: string;
    quantity: number;
}

interface IAppProps extends IAppDataProps, IAppActionProps {}

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

export default connect(mapStateToProps, mapDispatchToProps)(App);

function mapStateToProps(state: IAppState, ownProps: IAppDataProps): IAppDataProps {
    return {
        name: ownProps.name,
        quantity: state.quantity,
    };
}

function mapDispatchToProps(dispatch: Dispatch<number>, ownProps: any): IAppActionProps {
    return {
        addHandler: () => dispatch(quantityActions.add(1)),
        subtractHandler: () => dispatch(quantityActions.subtract(1)),
    };
}
