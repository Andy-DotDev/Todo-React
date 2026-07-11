import Button from "./Button";
import Field from "./Field";

const AddTaskform = (props) => {
  const { addTask } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__form"
        label="Название задачи
    "
        id="new-task"
      />
      <Button type="submit">Добавить</Button>
    </form>
  );
};

export default AddTaskform;
