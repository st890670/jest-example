import { shallow } from "enzyme";
import Input from "./index";
import * as redux from "../../redux";
import React from "react";

describe("Input Unit Test", () => {
  const useDispatchMock = jest.spyOn(redux, "useDispatch");
  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn());
  });

  it("Should match snapshot", () => {
    const component = shallow(<Input />);
    expect(component).toMatchSnapshot();
  });

  it("Should the input value same as the keydown value", () => {
    const component = shallow(<Input />);
    /**
     * 以下方程式碼為例:
     * 將find的結果DOM存成變數時要小心，如果針對這個變數進行模擬操作（simulate），
     * 必須重新find才會取得模擬後的值．
     *
     * const inputWrapper = component.find('#addInput')
     */
    const handleInputChange = component.find("#addInput").props()
      .onChange as React.ChangeEventHandler<HTMLInputElement>;
    handleInputChange({
      target: { value: "A" },
    } as React.ChangeEvent<HTMLInputElement>);
    expect(component.find("#addInput").getElement().props.value).toBe("A");
  });

  it("Should show warning when input value empty.", () => {
    const component = shallow(<Input />);
    const handleKeyDown = component.find("#addInput").props()
      .onKeyDown as React.KeyboardEventHandler<HTMLInputElement>;
    handleKeyDown({ key: "Enter" } as React.KeyboardEvent<HTMLInputElement>);
    expect(component.find("#warningText").hasClass("visible")).toBeTruthy();
  });

  it("Should hidden warning when input value existed.", () => {
    const component = shallow(<Input />);
    const handleKeyDown = component.find("#addInput").props()
      .onKeyDown as React.KeyboardEventHandler<HTMLInputElement>;
    handleKeyDown({ key: "A" } as React.KeyboardEvent<HTMLInputElement>);
    expect(component.find("#warningText").hasClass("invisible")).toBeTruthy();
  });
});

export {};
