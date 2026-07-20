import { createContext } from "react";
import useTasks from "../hooks/useTasks";
import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll";

/* eslint-disable react-refresh/only-export-components */
export const TasksContext = createContext({});
/* eslint-enable react-refresh/only-export-components */

export const TasksProvider = (props) => {
  const { children } = props;

  const {
    tasks,
    filtredTasks,
    deleteAllTasks,
    deleteTask,
    toggleTaskComplete,
    addTask,
    newTaskTitle,
    searchQuery,
    setNewTaskTitle,
    setSearchQuery,
    newTaskInputRef,
  } = useTasks();

  const { firstIncompleteTaskRef, firstIncompleteTaskId } =
    useIncompleteTaskScroll(tasks);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filtredTasks,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
        deleteAllTasks,
        deleteTask,
        toggleTaskComplete,

        addTask,
        newTaskTitle,
        searchQuery,
        setNewTaskTitle,
        setSearchQuery,
        newTaskInputRef,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
