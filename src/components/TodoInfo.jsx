import { memo } from "react";
const TodoInfo = (props) => {
  const { total, done, onDeleteAllBtnClick } = props;

  const hasTasks = total > 0;
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Выполнено {done} из {total}
      </div>
      {hasTasks && (
        <button
          className="todo__delete-all-button"
          onClick={onDeleteAllBtnClick}
          type="button"
        >
          Удалить всё
        </button>
      )}
    </div>
  );
};

export default memo(TodoInfo);
