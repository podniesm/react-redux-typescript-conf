import * as React from "react";
import {connect} from "react-redux";

interface IHelloProps {
    name: string;
}

interface IHelloState {
    name: string;
}

class Hello extends React.Component<IHelloProps, IHelloState> {
    constructor(props: IHelloProps) {
        super(props);
        this.state = {
            name: props.name
        };
    }

    public render(): JSX.Element {
        return <div>Hello, {this.props.name}</div>;
    }
}

export default connect(mapStateToProps)(Hello);

function mapStateToProps(state: any, ownProps: any): IHelloProps {
    return {
      name: "piotrek"
    };
}
