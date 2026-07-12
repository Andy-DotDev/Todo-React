import Field from "./Field";

const SearchTaskForm = (props) => {
  const { searchQuery, setSearchQuery } = props;

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
