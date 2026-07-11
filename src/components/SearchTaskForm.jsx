import Field from "./Field";

const SearchTaskForm = (props) => {
  const { onSearchInput } = props;

  return (
    <form className="todo__form" onSubmit={(event) => event.preventDefault()}>
      <Field
        className="todo__field"
        onInput={(event) => onSearchInput(event.target.value)}
        label="Поиск задачи"
        id="search-task"
        type="search"
      />
    </form>
  );
};

export default SearchTaskForm;
