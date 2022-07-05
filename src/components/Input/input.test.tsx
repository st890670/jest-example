import { shallow } from "enzyme";
import Input from "./index";
import * as redux from "../../redux";

describe("Input Unit Test", () => {
  const useDispatchMock = jest.spyOn(redux, "useDispatch");
  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn());
  });

  it("should show warning when input value empty.", () => {
    const component = shallow(<Input />);
    component.find("input").simulate("keydown", { key: "Enter" });
    expect(component.find("#warningText").exists()).toBeTruthy();
  });
});

export {};
