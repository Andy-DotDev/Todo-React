const TodoInfo = (props) => {
  const { total, done } = props;

  const hasTasks = total > 0;
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Выполнено {done} из {total}
      </div>
      {hasTasks && (
        <button className="todo__delete-all-button" type="button">
          Удалить всё
        </button>
      )}
    </div>
  );
};

export default TodoInfo;
