import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IStoreState from '../store/IStoreState';
import {default as Tasks, ITasksActionProps, ITasksDataProps} from './Tasks';
import {tasksActions} from './tasksActions';

function mapStateToProps(state: IStoreState, ownProps: ITasksDataProps): ITasksDataProps {
    return {
        isLoading: state.tasks.isLoading,
        tasks: state.tasks.items,
    };
}

function mapDispatchToProps(dispatch: Dispatch<number>, ownProps: ITasksDataProps): ITasksActionProps {
    return {
        searchTasks: () => dispatch(tasksActions.load()),
        temp: () => dispatch(tasksActions.temp()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
