import * as React from "react";
import {connect} from "react-redux";

interface IHelloProps {
    name: string;
}

interface IHelloState {
    name: string;
}

class Hello extends React.Component<IHelloProps, IHelloState> {
    public render(): JSX.Element {
        return <div>Hello, {this.props.name}</div>;
    }
}

function mapStateToProps(state: any, ownProps: any): IHelloProps {
    return {
      name: "piotrek"
    };
}

export default connect(mapStateToProps)(Hello);