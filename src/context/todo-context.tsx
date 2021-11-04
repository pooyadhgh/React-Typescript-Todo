import { createContext, useState } from 'react';
import Todo from '../types/Todo';

interface TodoContextInterface {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  editTodo: () => void;
  deleteTodo: (id: string) => void;
  filterTodos: () => void;
  completeTodo: (id: string) => void;
  clearAll: () => void;
  completeAll: () => void;
}

const TodoContext = createContext<TodoContextInterface | null>(null);

export const TodoContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: Todo) => {
    setTodos(todos => [todo, ...todos]);
  };

  const deleteHandler = (id: string) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  const clearAllHandler = () => {
    setTodos([]);
  };

  const completeTodoHandler = (id: string) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(newTodos);
  };

  const completeAllHandler = () => {
    const newTodos = todos.map(todo => ({ ...todo, isDone: true }));
    setTodos(newTodos);
  };

  const contextValue = {
    todos: todos,
    addTodo: addTodoHandler,
    editTodo: () => {},
    deleteTodo: deleteHandler,
    filterTodos: () => {},
    completeTodo: completeTodoHandler,
    clearAll: clearAllHandler,
    completeAll: completeAllHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoContext;