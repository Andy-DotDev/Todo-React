import { memo, useContext, useMemo } from "react";
import { TasksContext } from "../context/TasksContext";
const TodoInfo = () => {
  const { tasks, deleteAllTasks } = useContext(TasksContext);

  const total = tasks.length;
  const hasTasks = total > 0;
  const done = useMemo(() => {
    return tasks.filter(({ isDone }) => isDone).length;
  }, [tasks]);

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Выполнено {done} из {total}
      </div>
      {hasTasks && (
        <button
          className="todo__delete-all-button"
          onClick={deleteAllTasks}
          type="button"
        >
          Удалить всё
        </button>
      )}
    </div>
  );
};

export default memo(TodoInfo);
