import React, { useCallback, useState, useMemo } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [emptyWarning, setEmptyWarning] = useState<boolean>(false);

  const renderWarningText = useMemo(() => {
    if (!emptyWarning) {
      return <></>;
    }

    return (
      <div id="warningText" className="text-[#ff0000] text-sm mt-1 pl-3">
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

      if (!inputValue) {
        setEmptyWarning(true);
        return;
      }
    },
    [inputValue]
  );

  return (
    <>
      <input
        className={`border rounded-[8px] py-1 px-3 focus:outline-none ${
          emptyWarning ? "border-[#ff0000]" : ""
        }`}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        placeholder="按Enter新增Todo"
      />
      {renderWarningText}
    </>
  );
};

export default Input;
