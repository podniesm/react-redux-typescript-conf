import * as React from "react";
import * as chai from "chai";
import * as TestUtils from 'react-dom/test-utils'
import { shallow, mount } from 'enzyme';

import Hello from "../src/Hello";

describe("Hello", () => {
    let renderer: TestUtils.ShallowRenderer;

    // beforeEach(() => {
    //     renderer = TestUtils.createRenderer();
    //     renderer.render(<Hello name="Willson" />);
    // });

    // it("should render correctly", () => {
    //     const result = renderer.getRenderOutput();
    //     chai.assert.strictEqual(result.type, "div");
    // });
    //
    // it("should have correct prop values", () => {
    //     const result = renderer.getRenderOutput();
    //     const propValues = result.props.children.join("");
    //     chai.assert.strictEqual(propValues, "Hello, Willson");
    // });

    it("test1", () => {
        const wrapper = shallow(<Hello name="Willson"/>);
        chai.expect(wrapper.find('div')).to.have.length(1);
    });

    it("test2", () => {
        const wrapper = mount(<Hello name="Willson"/>);
        chai.expect(wrapper.find('div')).to.have.length(1);
    });
});