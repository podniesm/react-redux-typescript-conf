import {Promise} from 'es6-promise';
import Task from '../../tasks/Task';
import fetchRequestInitBuilderFactory, {IFetchRequestInitBuilder} from './FetchRequestInitBuilder';
import headerBuilderFactory, {IHeadersBuilder} from './HeadersBuilder';
import {IGridFilter} from "../../tasks/TasksPage";

class HttpClient {
    private _headersBuilder: IHeadersBuilder;
    private _fetchRequestInitBuilder: IFetchRequestInitBuilder;
    constructor() {
        this._headersBuilder = headerBuilderFactory();
        this._fetchRequestInitBuilder = fetchRequestInitBuilderFactory();
    }

    public getItems(filter: IGridFilter): Promise<Task[]> {
        const headers = this._headersBuilder
            .start()
            .addContentType('application/json')
            .materialize();
        const init = this._fetchRequestInitBuilder
            .start()
            .setMethod('get')
            .setHeaders(headers)
            .materialize();
        // TODO(MP): creating query string optimization
        const fakeUrl = new URL('http://a');
        Object.keys(filter).forEach(key => fakeUrl.searchParams.append(key, filter[key]));
        const url = '/items' + fakeUrl.search;
        return this.request<Task[]>(url, init);
    }

    private request<TReturn>(url: string, init?: RequestInit): Promise<TReturn> {
        return fetch(url, init)
            .then((response: Response) => {
                if (response.ok) {
                    const contentType = init.headers.get('Content-Type');
                    if (contentType.startsWith('text')) {
                        return response.text();
                    }
                    if (contentType.startsWith('image')) {
                        return response.blob();
                    }
                    return response.json();
                }
                if (response.status === 401) {
                    window.location.href = '/login';
                }
                return Promise.reject(response.status);
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }
}

export default HttpClient;
