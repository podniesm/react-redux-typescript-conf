import * as React from "react";
import * as chai from "chai";
import { shallow, mount } from 'enzyme';

import App from "../src/components/App";

describe("App", () => {
    it("test1", () => {
        const wrapper = shallow(<App name="Willson"/>);
        chai.expect(wrapper.find('div')).to.have.length(1);
    });

    it("test2", () => {
        const wrapper = mount(<App name="Willson"/>);
        chai.expect(wrapper.find('div')).to.have.length(1);
    });
});