import { useContext } from 'react';
import TodoContext from '../context/todo-context';
import Todo from '../types/Todo';

const TodoItem: React.FC<{ item: Todo }> = ({ item }) => {
  const todoCtx = useContext(TodoContext);

  return (
    <li className="my-5 border-b-2 pb-4 ">
      <div className="flex flex-row flex-wrap">
        <h3 className="text-base font-semibold text-primary flex-grow">
          <i className="far fa-list-alt pr-1 text-secondary"></i>
          {item.todo}
        </h3>
        <div className="block flex-none">
          <i
            onClick={() => todoCtx?.completeTodo(item.id)}
            className={`fas ${
              item.isDone ? 'fa-times' : 'fa-check'
            } fa-check p-1 m-1 text-primary hover:text-secondary cursor-pointer`}
          ></i>

          {/* <i className="far fa-edit p-1 m-1 text-primary hover:text-secondary cursor-pointer"></i> */}
          <i
            onClick={() => todoCtx?.deleteTodo(item.id)}
            className="far fa-trash-alt p-1 m-1 text-primary hover:text-secondary cursor-pointer"
          ></i>
        </div>
      </div>

      <p className="text-sm text-primary">
        <span className="font-semibold">Priority: </span>
        {item.priority ? item.priority : 1}/5
      </p>

      <p className="text-sm text-primary">
        <span className="font-semibold">Date: </span>
        {item.date}
      </p>

      <p className="text-sm text-primary">
        <span className="font-semibold">Status: </span>{' '}
        {item.isDone ? 'Done' : 'In progress'}
      </p>

      <p className="text-sm text-primary">
        <span className="font-semibold">Descritpion: </span> {item.description}
      </p>
    </li>
  );
};

export default TodoItem;
