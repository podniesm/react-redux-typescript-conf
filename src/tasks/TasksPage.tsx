import * as React from 'react';
import Task from './Task';

export interface ITasksPageActionProps {
    searchTasks: (filter: IGridFilter) => void;
}

export interface ITasksDataProps {
    tasks: Task[];
    isLoading: boolean;
}

export interface ITasksProps extends ITasksPageActionProps, ITasksDataProps {}

export interface IGridFilter {
    searchPhrase: string;
    sortColumn: string;
    itemsCount: number;
}

interface ITasksPageState {
    filter: IGridFilter;
}

class TasksPage extends React.Component<ITasksProps, ITasksPageState> {
    constructor(props: ITasksProps) {
        super(props);
        this.state = {
            filter: {
                searchPhrase: '',
                sortColumn: '',
                itemsCount: 0,
            },
        };
        this.updateTasksFilterAndSearch = this.updateTasksFilterAndSearch.bind(this);
        this.updateTasksFilter = this.updateTasksFilter.bind(this);
        this.searchClickHandler = this.searchClickHandler.bind(this);
        this.searchTasks = this.searchTasks.bind(this);
    }

    public render(): JSX.Element {
        const tasksGrid = this.createTasksGrid();
        return (
            <div>
                <h1>Tasks</h1>
                <br/>
                {tasksGrid}
                {this.props.isLoading && <div>Loading...</div>}
            </div>
        );
    }


    private createTasksGrid(): JSX.Element {
        return (
            <div>
                <input
                    name='searchPhrase'
                    type='search'
                    onChange={this.updateTasksFilter}
                    value={this.state.filter.searchPhrase}
                />
                <button onClick={this.searchClickHandler}>Search</button>
                <br/>
                <span>Show</span>
                <select name='itemsCount'
                        onChange={this.updateTasksFilterAndSearch}
                        value={this.state.filter.itemsCount}>
                    <option value={1}>1</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                </select>
                <span>items</span>
                <table>
                    {this.createTasksGridHeader()}
                    <tbody>
                    {this.createTasksGridRows()}
                    </tbody>
                </table>
            </div>
        );
    }

    private createTasksGridHeader(): JSX.Element {
        return (
            <thead>
            <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Created</th>
                <th>Priority</th>
                <th>Category</th>
            </tr>
            </thead>
        );
    }

    private createTasksGridRows(): JSX.Element[] {
        if (this.props.isLoading) {
            return null;
        }
        return (this.props.tasks.map((t, index) => (
            <tr key={index}>
                <td>{t.id}</td>
                <td>{t.status}</td>
                <td>{t.createdDate}</td>
                <td>{t.priority}</td>
                <td>{t.category}</td>
            </tr>
        )));
    }

    private updateTasksFilterAndSearch(event: React.SyntheticEvent<any>): void {
        this.setState({filter: this.createFilter(event)}, this.searchTasks);
    }

    private updateTasksFilter(event: React.SyntheticEvent<any>): void {
        this.setState({filter: this.createFilter(event)});
    }

    private searchClickHandler(event: React.SyntheticEvent<any>): void {
        event.preventDefault();
        this.searchTasks();
    }

    private searchTasks(): void {
        this.props.searchTasks(this.state.filter);
    }

    private createFilter(event: React.SyntheticEvent<any>): IGridFilter {
        const target = event.target as any;
        const field = target.name;
        const filter = this.state.filter;
        filter[field] = target.value;
        return filter;
    }
}

export default TasksPage;
