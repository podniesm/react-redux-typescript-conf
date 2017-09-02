import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IStoreState from '../store/IStoreState';
import {tasksActions} from './tasksActions';
import {default as Tasks, IGridFilter, ITasksDataProps, ITasksPageActionProps} from './TasksPage';

function mapStateToProps(state: IStoreState, ownProps: ITasksDataProps): ITasksDataProps {
    return {
        allTasksCount: state.tasks.allItemsCount,
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
