import { memo, useContext } from "react";
import TodoItem from "./TodoItem";
import { TasksContext } from "../context/TasksContext";

const TodoList = () => {
  const { tasks, filtredTasks } = useContext(TasksContext);

  const hasTasks = tasks.length > 0;
  const isEmptyFiltredeTasks = filtredTasks?.length === 0;
  if (!hasTasks) {
    return <div className="todo__empty-message">Задач пока нет</div>;
  }
  if (hasTasks && isEmptyFiltredeTasks) {
    return <div className="todo__empty-message">Такой задачи нет</div>;
  }
  return (
    <ul className="todo__list">
      {(filtredTasks ?? tasks).map((task) => (
        <TodoItem className="todo__item" key={task.id} {...task} />
      ))}
    </ul>
  );
};
export default memo(TodoList);
