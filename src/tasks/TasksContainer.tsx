import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IStoreState from '../store/IStoreState';
import {default as Tasks, ITasksPageActionProps, ITasksDataProps, IGridFilter} from './TasksPage';
import {tasksActions} from './tasksActions';

function mapStateToProps(state: IStoreState, ownProps: ITasksDataProps): ITasksDataProps {
    return {
        isLoading: state.tasks.isLoading,
        tasks: state.tasks.items,
    };
}

function mapDispatchToProps(dispatch: Dispatch<number>, ownProps: ITasksDataProps): ITasksPageActionProps {
    return {
        searchTasks: (filter: IGridFilter) => dispatch(tasksActions.load(filter)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
