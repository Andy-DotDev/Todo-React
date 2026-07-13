import Button from "./Button";
import Field from "./Field";

const AddTaskform = (props) => {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__form"
        label="Название задачи"
        id="new-task"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
        ref={newTaskInputRef}
      />
      <Button type="submit">Добавить</Button>
    </form>
  );
};

export default AddTaskform;
