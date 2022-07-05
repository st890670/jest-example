describe("Work In Progress Unit Test", () => {
  it("test mock callback", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    [0, 1].forEach(mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[1].value).toBe(43);
  });

  it("test mock return value", () => {
    const mock = jest.fn();
    mock.mockReturnValueOnce("A").mockReturnValueOnce("B").mockReturnValue("C");
    mock();
    expect(mock()).toBe("B");
    mock();
    mock();
    expect(mock()).toBe("C");
  });

  it("test spyOn", () => {
    const car = {
      color: "red",
      drive: () => true,
    };

    const spy = jest.spyOn(car, "drive");
    const isDriving = car.drive();

    expect(spy).toHaveBeenCalled();
    expect(isDriving).toBeTruthy();

    spy.mockRestore();
    // jest.restoreAllMocks();
  });
});

export {};
