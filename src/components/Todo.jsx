import AddTaskform from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
const Todo = () => {
  const tasks = [{ id: "task-1", title: "Купить молоко", isDone: false }];

  const deleteAllTasks = () => {
    console.log("Удаляем все задачи");
  };

  const deleteTask = (taskId) => {
    console.log(`Удаляем задачу с id ${taskId}`);
  };

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`${taskId} ${isDone ? "Выполнена" : "Не выполнена"}`);
  };

  const filterTasks = (query) => {
    console.log(`Search ${query}`);
  };

  const addTask = () => {
    console.log("Задача добавлена");
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskform addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllBtnClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskBtn={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;
