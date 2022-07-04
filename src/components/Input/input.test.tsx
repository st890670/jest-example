import { shallow } from "enzyme";
import Input from "./index";

describe("Input Unit Test", () => {
  it("should show warning when input value empty.", () => {
    const component = shallow(<Input />);
    component.find("input").simulate("keydown", { key: "Enter" });
    expect(component.find("#warningText").exists()).toBeTruthy();
  });
});

export {};
