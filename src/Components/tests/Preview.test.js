import React from "react";
import { shallow, mount, render } from "./enzyme";
import { Preview } from "Components/Preview/Preview";
import renderer from "react-test-renderer";
import "jest-canvas-mock";

const setUp = (props) => shallow(<Preview {...props} />);

describe("Preview Test Suite", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain canvas", () => {
    const wrapper = component.find("#canvas");
    expect(wrapper.length).toBe(1);
  });
});

describe("Preview component", () => {
  it("should render Preview component", () => {
    const tree = renderer.create(<Preview />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
