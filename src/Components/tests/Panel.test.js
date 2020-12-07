import React from "react";
import { shallow, mount, render } from "./enzyme";
import { Panel } from "Components/Panel/Panel";

import renderer from "react-test-renderer";
import "jest-canvas-mock";

const setUp = (props) => shallow(<Panel {...props} />);

describe("Panel Test Suite", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should contain .panel-show wrapper", () => {
    const wrapper = component.find(".panel-show");
    expect(wrapper.length).toBe(1);
  });

  it("should contain input fields", () => {
    const wrapper = component.find(".form-control");
    expect(wrapper.find(".form-control").length).toEqual(5);
  });

  it("should change font", () => {
    const changeSize = jest.fn();
    const wrapper = mount(<Panel />);
    const handleChange = jest.spyOn(React, "useState");
    handleChange.mockImplementation((size) => [size, changeSize]);
    wrapper.find(".font-size").simulate("change");
    expect(changeSize).toBeTruthy();
  });
});

describe("Panel component", () => {
  it("should render Panel component", () => {
    const tree = renderer.create(<Panel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
