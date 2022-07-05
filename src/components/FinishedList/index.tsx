import { useMemo } from "react";
import { useSelector } from "../../redux";

function FinishedList() {
  const finishedList = useSelector((state) => state.todo.finished);

  const renderList = useMemo(
    () =>
      finishedList.map((item) => (
        <div key={item.id} className="cursor-default text-[#b7b7b7]">
          {item.text}
        </div>
      )),
    [finishedList]
  );

  return (
    <div>
      <h2 className="font-bold text-lg cursor-default">Finished List</h2>
      {renderList}
    </div>
  );
}

export default FinishedList;
