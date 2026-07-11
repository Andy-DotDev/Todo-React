import Button from "./Button";
import Field from "./Field";

const AddTaskform = () => {
  return (
    <form className="todo__form">
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
