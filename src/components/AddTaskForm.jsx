import { useContext, useState } from "react";
import Button from "./Button";
import Field from "./Field";
import { TasksContext } from "../context/TasksContext";

const AddTaskForm = () => {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } =
    useContext(TasksContext);
  const [error, setError] = useState("");

  const clearNewTaskTitle = newTaskTitle.trim();
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0;

  const onInput = (event) => {
    const { value } = event.target;
    const clearValue = value.trim();
    const hasOnlyValue = value.length > 0 && clearValue.length === 0;

    setNewTaskTitle(value);
    setError(hasOnlyValue ? "Задача не может быть пустой" : "");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isNewTaskTitleEmpty) addTask(clearNewTaskTitle);
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__form"
        label="Название задачи"
        id="new-task"
        value={newTaskTitle}
        error={error}
        onInput={onInput}
        ref={newTaskInputRef}
      />
      <Button type="submit" isDisabled={isNewTaskTitleEmpty}>
        Добавить
      </Button>
    </form>
  );
};

export default AddTaskForm;
