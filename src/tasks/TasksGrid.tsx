import * as _ from 'lodash';
import * as React from 'react';
import Task from './Task';

interface IGridFilter {
    searchPhrase: string;
    sortColumn: string;
    sortDirection: string;
    itemsPerPage: number;
    currentPage: number;
}

interface ITaskGridDataProps {
    tasks: Task[];
    allTasksCount: number;
    isLoading: boolean;
}

interface ITasksGridActionProps {
    searchTasks: (filer: IGridFilter) => void;
}

interface ITaskGridProps extends ITaskGridDataProps, ITasksGridActionProps {}

interface ITaskGridState {
    filter: IGridFilter;
}

class TasksGrid extends React.Component<ITaskGridProps, ITaskGridState> {
    constructor(props: ITaskGridProps) {
        super(props);
        this.state = {
            filter: {
                currentPage: 1,
                itemsPerPage: 5,
                searchPhrase: '',
                sortColumn: 'id',
                sortDirection: 'asc',
            },
        };
        this.updateFilterAndSearch = this.updateFilterAndSearch.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
        this.searchClickHandler = this.searchClickHandler.bind(this);
        this.sortAndSearch = this.sortAndSearch.bind(this);
        this.changePageAndSearch = this.changePageAndSearch.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div>
                <input name='searchPhrase'
                       type='search'
                       value={this.state.filter.searchPhrase}
                       onChange={this.updateFilter}/>
                <button onClick={this.searchClickHandler}>Search</button>
                <br/>
                <span>Show</span>
                <select name='itemsPerPage'
                        onChange={this.updateFilterAndSearch}
                        value={this.state.filter.itemsPerPage}>
                    <option value={1}>1</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                </select>
                <span>items</span>
                <table>
                    <thead>
                    <tr>
                        {this.createHeader('ID')}
                        {this.createHeader('Status')}
                        {this.createHeader('Created')}
                        {this.createHeader('Priority')}
                        {this.createHeader('Category')}
                    </tr>
                    </thead>
                    <tbody>
                    {this.createRows()}
                    </tbody>
                </table>
                <span>Showing {this.fromPageNumber()} to {this.toPageNumber()} of {this.props.allTasksCount}</span>
                <br/>
                {this.createPagination()}
            </div>
        );
    }

    private createHeader(column: string): JSX.Element {
        const isSortingColumn = this.state.filter.sortColumn === column.toLowerCase();
        const className = isSortingColumn ? this.state.filter.sortDirection : '';
        return <th className={className} onClick={() => this.sortAndSearch(column.toLowerCase())}>{column}</th>;
    }

    private sortAndSearch(column: string): void {
        const filter = this.state.filter;
        let sortDirection = 'asc';
        if (filter.sortColumn === column) {
            sortDirection = filter.sortDirection === 'asc' ? 'desc' : 'asc';
        }
        filter.sortColumn = column;
        filter.sortDirection = sortDirection;
        this.setState({filter}, this.search);
    }

    private createPagination(): JSX.Element[] {
        const pagesCount = Math.ceil(this.props.allTasksCount / this.state.filter.itemsPerPage);
        const className = (index: number) => this.state.filter.currentPage === index ? 'active' : 'inactive';
        return _.range(1, pagesCount + 1).map((index) => (
            <span key={index}
                  className={className(index)}
                  onClick={() => this.changePageAndSearch(index)}>
                {index}
            </span>
        ));
    }

    private changePageAndSearch(page: number): void {
        const filter = this.state.filter;
        filter.currentPage = page;
        this.setState({filter}, this.search);
    }

    private createRows(): JSX.Element[] {
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

    private searchClickHandler(event: React.SyntheticEvent<any>): void {
        event.preventDefault();
        this.search();
    }

    private updateFilterAndSearch(event: React.SyntheticEvent<any>): void {
        this.setState({filter: this.createFilter(event)}, this.search);
    }

    private updateFilter(event: React.SyntheticEvent<any>): void {
        this.setState({filter: this.createFilter(event)});
    }

    private createFilter(event: React.SyntheticEvent<any>) {
        const target = event.target as any;
        const field = target.name;
        const filter = this.state.filter;
        filter[field] = target.value;
        return filter;
    }

    private search(): void {
        this.props.searchTasks(this.state.filter);
    }

    private fromPageNumber(): number {
        const currentPage = this.state.filter.currentPage;
        const itemsPerPage = this.state.filter.itemsPerPage;
        return currentPage * itemsPerPage - itemsPerPage + 1;
    }

    private toPageNumber(): number {
        const currentPage = this.state.filter.currentPage;
        const itemsPerPage = this.state.filter.itemsPerPage;
        return (currentPage - 1) * itemsPerPage + this.props.tasks.length;
    }
}

export { IGridFilter };
export default TasksGrid;
