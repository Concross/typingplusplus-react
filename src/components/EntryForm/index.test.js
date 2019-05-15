import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import EntryForm from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("EntryForm component", () => {
  test("should render without crashing", () => {
    const wrapper = shallow(<EntryForm />);
    expect(wrapper.exists()).toBe(true);
  });
});
