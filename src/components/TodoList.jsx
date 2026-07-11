import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { tasks = [], onDeleteTaskBtn, onTaskCompleteChange } = props;

  const hasTasks = true;
  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  }
  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          onDeleteTaskBtn={onDeleteTaskBtn}
          className="todo__item"
          onTaskCompleteChange={onTaskCompleteChange}
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  );
};
export default TodoList;
