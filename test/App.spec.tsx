import * as chai from 'chai';
import { mount, shallow } from 'enzyme';
import * as React from 'react';

import App from '../src/components/App';

describe('App', () => {
    it('test1', () => {
        const wrapper = shallow(<App name='Willson' quantity={0} addHandler={null} subtractHandler={null}/>);
        chai.expect(wrapper.find('div')).to.have.length(2);
    });

    it('test2', () => {
        const wrapper = mount(<App name='Willson' quantity={0} addHandler={null} subtractHandler={null}/>);
        chai.expect(wrapper.find('div')).to.have.length(2);
    });
});
