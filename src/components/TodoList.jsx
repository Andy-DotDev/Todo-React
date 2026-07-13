import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    tasks = [],
    onDeleteTaskBtn,
    onTaskCompleteChange,
    filtredTasks,
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
  } = props;

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
        <TodoItem
          onDeleteTaskBtn={onDeleteTaskBtn}
          className="todo__item"
          onTaskCompleteChange={onTaskCompleteChange}
          key={task.id}
          ref={
            task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null
          }
          {...task}
        />
      ))}
    </ul>
  );
};
export default TodoList;
