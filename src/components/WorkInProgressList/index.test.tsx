import { shallow } from "enzyme";
import * as redux from "../../redux";
import WorkInProgressList from "./index";

describe("Work In Progress List Unit Test", () => {
  const useDispatch = jest.spyOn(redux, "useDispatch");
  const useSelector = jest.spyOn(redux, "useSelector");

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockImplementation(() => []).mockReturnValue([]);
  });

  it("should be same as previous snapshot", () => {
    const component = shallow(<WorkInProgressList />);
    expect(component).toMatchSnapshot();
  });
});

export {};
