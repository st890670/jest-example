import React, { useCallback, useState, useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { useDispatch } from "../../redux";
import { addToWorkInProcessList } from "../../redux/slice/todo";
const Input = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const [emptyWarning, setEmptyWarning] = useState<boolean>(false);

  const renderWarningText = useMemo(() => {
    return (
      <div
        id="warningText"
        className={`text-[#ff0000] text-sm mt-1 pl-1 ${
          emptyWarning ? "visible" : "invisible"
        }`}
      >
        必填
      </div>
    );
  }, [emptyWarning]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value) {
        setEmptyWarning(false);
      }
      setInputValue(value);
    },
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Enter") {
        return;
      }

      const value = inputValue.trim();

      if (!value) {
        setEmptyWarning(true);
        return;
      }

      dispatch(
        addToWorkInProcessList({
          id: uuidV4(),
          text: value,
        })
      );
      setInputValue("");
    },
    [inputValue, dispatch]
  );

  return (
    <>
      <input
        className={`border rounded-[8px] py-1 px-3 focus:outline-none ${
          emptyWarning ? "border-[#ff0000]" : ""
        }`}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        value={inputValue}
        placeholder="按Enter新增Todo"
      />
      {renderWarningText}
    </>
  );
};

export default Input;
