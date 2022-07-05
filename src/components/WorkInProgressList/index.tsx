import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "../../redux";
import { markAsFinished } from "../../redux/slice/todo";

function WorkInProgressList() {
  const dispatch = useDispatch();
  const workInProcessList = useSelector((state) => state.todo.workInProcess);

  const handleMarkAsFinished = useCallback(
    (uuid: string) => {
      dispatch(markAsFinished(uuid));
    },
    [dispatch]
  );

  const renderList = useMemo(
    () =>
      workInProcessList.map((item) => (
        <div
          key={item.id}
          className="cursor-default"
          onClick={() => handleMarkAsFinished(item.id)}
        >
          {item.text}
        </div>
      )),
    [workInProcessList, handleMarkAsFinished]
  );

  return (
    <div>
      <h2 className="font-bold text-lg cursor-default">
        Work In Progress List
      </h2>
      {renderList}
    </div>
  );
}

export default WorkInProgressList;
