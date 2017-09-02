// '^(https?:\/\/)?'+ // protocol
// '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
// '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
// '(\:\d+)?(\/[-a-zA-z\d%_.~+]*)*'+ // port and path
// '(\\?[;&a-z\d%_.~+=-]*)?'+ // query string
// '(\#[-a-z\d_]*)?$','i' // fragment locater

import {Promise} from 'es6-promise';
import * as fetchMock from 'fetch-mock';
import 'isomorphic-fetch';
import * as _ from 'lodash';
import Task from '../tasks/Task';
import TasksResponse from "../tasks/TasksResponse";

const allTasks = [
    new Task('a', 'active', 'high', 'bug'),
    new Task('b', 'active', 'high', 'identity story'),
    new Task('c', 'active', 'high', 'identity story'),
    new Task('d', 'active', 'high', 'identity story'),
    new Task('e', 'active', 'high', 'identity story'),
    new Task('f', 'active', 'high', 'identity story'),
    new Task('g', 'active', 'high', 'identity story'),
    new Task('h', 'active', 'high', 'identity story'),
    new Task('i', 'active', 'high', 'identity story'),
    new Task('j', 'active', 'high', 'identity story'),
    new Task('k', 'active', 'high', 'identity story'),
    new Task('l', 'active', 'high', 'identity story'),
    new Task('m', 'active', 'high', 'identity story'),
    new Task('n', 'active', 'high', 'identity story'),
    new Task('o', 'active', 'high', 'identity story'),
    new Task('p', 'active', 'high', 'identity story'),
];

const delayItems = (path: string, req: RequestInit) => {
    const fakeUrl = 'http://a' + path;
    const url = new URL(fakeUrl);
    const filter = url.searchParams;
    const searchPhrase = filter.get('searchPhrase');
    const sortColumn = filter.get('sortColumn');
    let sortDirection = filter.get('sortDirection');
    const currentPage = +filter.get('currentPage');
    const itemsCount = +filter.get('itemsCount');
    return new Promise((res, rej) => {
        let resultTasks: Task[] = allTasks;
        if (searchPhrase) {
            resultTasks = _.filter(resultTasks, (t) => _.includes(t.category, searchPhrase));
        }
        if (!sortDirection) {
            sortDirection = 'asc';
        }
        if (sortColumn) {
            resultTasks = _.sortBy(resultTasks, sortColumn);
            if (sortDirection === 'desc') {
                resultTasks = resultTasks.reverse();
            }
        }
        const allItemsCount = resultTasks.length;
        const startIndex = (currentPage - 1) * itemsCount;
        const endIndex = currentPage * itemsCount;
        resultTasks = resultTasks.slice(startIndex, endIndex);
        const result: TasksResponse = {
            allTasksCount: allItemsCount,
            tasks: resultTasks,
        };
        setTimeout(() => res(result), 500);
    });
};

function configureFetchMock() {
    fetchMock
        // .get('/items', delayItems)
        // .get('/items', 401)
        .mock(new RegExp('^/items(\\?[;&a-zA-z\\d%_.~+=-]*)?$'), delayItems)
        .catch((unmatchedUrl) => {
            fetchMock.restore();
            return fetch(unmatchedUrl)
                .then((v) => {
                    configureFetchMock();
                    return new Promise((res, rej) => res(v));
                });
        });
}

configureFetchMock();
