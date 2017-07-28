import * as React from "react";
import {connect} from "react-redux";
import IAppState from "../store/IAppState";

interface IAppProps {
    name: string;
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
          quantity: 0
        };
    }

    public render(): JSX.Element {
        return <div>Hello, {this.props.name} and quantity: {this.state.quantity}</div>;
    }
}

export default connect(mapStateToProps)(App);

function mapStateToProps(state: IAppState, ownProps: any): IAppProps {
    return {
        name: "Pioter"
    };
}
