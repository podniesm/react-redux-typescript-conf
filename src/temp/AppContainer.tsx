import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import IAppState from '../store/IStoreState';
import App, {IAppActionProps, IAppDataProps} from './App';
import {quantityActions} from './quantityActions';

function mapStateToProps(state: IAppState, ownProps: IAppDataProps): IAppDataProps {
    return {
        name: ownProps.name,
        quantity: state.quantity,
    };
}

function mapDispatchToProps(dispatch: Dispatch<number>, ownProps: IAppDataProps): IAppActionProps {
    return {
        addHandler: () => dispatch(quantityActions.add(1)),
        subtractHandler: () => dispatch(quantityActions.subtract(1)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
