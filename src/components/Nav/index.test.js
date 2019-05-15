import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Nav from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Nav component", () => {
  test("should render without crashing", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.exists()).toBe(true);
  });
});
