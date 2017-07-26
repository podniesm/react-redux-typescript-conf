import * as React from "react";

interface HelloProps {
    name: string;
}

class Hello extends React.Component<HelloProps, {}> {
    render(): JSX.Element {
        return <div>Hello, {this.props.name}</div>;
    }
}

export default Hello;