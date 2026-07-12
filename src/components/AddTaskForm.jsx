import Button from "./Button";
import Field from "./Field";

const AddTaskform = (props) => {
  const { addTask, newTaskTitle, setNewTaskTitle } = props;

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
      />
      <Button type="submit">Добавить</Button>
    </form>
  );
};

export default AddTaskform;
