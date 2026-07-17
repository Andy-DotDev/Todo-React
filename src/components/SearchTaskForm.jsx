import { useContext } from "react";
import Field from "./Field";
import { TasksContext } from "../context/TasksContext";

const SearchTaskForm = () => {
  const { searchQuery, setSearchQuery } = useContext(TasksContext);

  return (
    <form className="todo__form" onSubmit={(event) => event.preventDefault()}>
      <Field
        className="todo__field"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
        label="Поиск задачи"
        id="search-task"
        type="search"
      />
    </form>
  );
};

export default SearchTaskForm;
