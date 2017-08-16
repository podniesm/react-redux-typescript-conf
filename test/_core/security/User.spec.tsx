import * as chai from 'chai';
import User from '../../../src/_core/security/User';

describe('Given User', () => {
    describe('with name', () => {
        describe('When get name', () => {
            it('Then correct name returned', () => {
                const user = new User('Michal', []);
                chai.should().equal(user.name, 'Michal');
            });
        });
    });
    describe('with permission', () => {
        describe('When authorize with existing permission', () => {
            it('Then authorization succeed', () => {
                const user = new User('Michal', ['admin']);
                chai.should().equal(user.authorize(['admin']), true);
            });
        });
        describe('When authorize with not existing permission', () => {
            it('Then authorization fail', () => {
                const user = new User('Michal', ['admin']);
                chai.should().equal(user.authorize(['worker']), false);
            });
        });
        describe('When authorize with no permission', () => {
            it('Then authorization succeed', () => {
                const user = new User('Michal', ['admin']);
                chai.should().equal(true, user.authorize(null));
            });
        });
    });
});
