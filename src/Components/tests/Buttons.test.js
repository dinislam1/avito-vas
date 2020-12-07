import React from "react";
import { shallow, mount, render } from "./enzyme";
import { Buttons } from "Components/Buttons/Buttons";

import renderer from "react-test-renderer";

const setUp = (props) => shallow(<Buttons {...props} />);

describe("Buttons Test Suite", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .button__export wrapper", () => {
    const wrapper = component.find(".button__export");
    expect(wrapper.length).toBe(1);
  });

  it("should contain export buttons", () => {
    const wrapper = component.find("button");
    expect(wrapper.length).toBe(3);
  });

  it("should save image", () => {
    navigator.clipboard = { writeText: jest.fn() };
    const btn = component.find(".btn-json");
    btn.simulate("click");
    const tree = renderer.create(<Buttons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe("Buttons component", () => {
//   it("should render Buttons component", () => {
//     const tree = renderer.create(<Buttons />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
