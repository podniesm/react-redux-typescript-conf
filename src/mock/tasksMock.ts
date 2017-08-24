import {Promise} from 'es6-promise';
import * as fetchMock from 'fetch-mock';
import 'isomorphic-fetch';
import Task from '../tasks/Task';

const delayItems = () => new Promise((res, rej) => setTimeout(() => res([
    new Task('a', 'active', 'high', 'bug'),
    new Task('b', 'active', 'high', 'user story'),
    new Task('c', 'active', 'high', 'user story'),
]), 500));

const delayTemp = () => new Promise((res, rej) => setTimeout(() => res('tempMOck'), 500));

function configureFetchMock() {
    fetchMock
        //.get('/items', delayItems)
        .get('/items', 401)
        // .mock('/temp', delayTemp)
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
