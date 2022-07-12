import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "../../redux";
import { markAsFinished } from "../../redux/slices/todo";
import { workInProgressSelector } from "../../redux/selectors/todoSelector";

function WorkInProgressList() {
  const dispatch = useDispatch();
  const workInProgressList = useSelector(workInProgressSelector);
  const handleMarkAsFinished = useCallback(
    (uuid: string) => {
      dispatch(markAsFinished(uuid));
    },
    [dispatch]
  );

  const renderList = useMemo(() => {
    if (!workInProgressList) {
      return <></>;
    }

    return workInProgressList.map((item) => (
      <div
        key={item.id}
        className="cursor-default"
        onClick={() => handleMarkAsFinished(item.id)}
      >
        {item.text}
      </div>
    ));
  }, [workInProgressList, handleMarkAsFinished]);

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
