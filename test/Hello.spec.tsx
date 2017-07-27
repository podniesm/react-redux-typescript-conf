import * as React from "react";
import * as chai from "chai";
import { shallow, mount } from 'enzyme';

import Hello from "../src/Hello";

describe("Hello", () => {
    it("test1", () => {
        const wrapper = shallow(<Hello name="Willson"/>);
        chai.expect(wrapper.find('div')).to.have.length(1);
    });

    it("test2", () => {
        const wrapper = mount(<Hello name="Willson"/>);
        chai.expect(wrapper.find('div')).to.have.length(1);
    });
});