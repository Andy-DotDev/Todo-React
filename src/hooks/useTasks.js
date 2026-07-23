import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import taskAPI from "../API/tasksAPI";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const newTaskInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Вы уверены? ");
    if (isConfirmed) {
      taskAPI.deleteAll(tasks).then(() => setTasks([]));
    }
  }, [tasks]);

  const deleteTask = useCallback(
    (taskId) => {
      taskAPI.delete(taskId).then(() => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      });
    },
    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
      taskAPI.toggleComplete(taskId, isDone).then(() => {
        setTasks(
          tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, isDone };
            }
            return task;
          }),
        );
      });
    },
    [tasks],
  );

  const addTask = useCallback((title) => {
    const newTask = {
      title,
      isDone: false,
    };

    taskAPI.add(newTask).then((addedTask) => {
      setTasks((prevTasks) => [...prevTasks, addedTask]);
      setNewTaskTitle("");
      setSearchQuery("");
      newTaskInputRef.current.focus();
    });
  }, []);

  useEffect(() => {
    newTaskInputRef.current.focus();

    taskAPI.getAll().then(setTasks);
  }, []);

  const filtredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();

    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery),
        )
      : null;
  }, [searchQuery, tasks]);

  return {
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
  };
};
export default useTasks;
