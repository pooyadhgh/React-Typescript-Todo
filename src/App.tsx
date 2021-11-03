import { useState } from 'react';
import Input from './components/Input';
import Layout from './components/Layout';
import Todolist from './components/TodoList';
import Todo from './types/Todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);

  return (
    <Layout>
      <Input onSubmit={todo => setTodos(todos => [todo, ...todos])} />
      <Todolist todos={todos} />
    </Layout>
  );
};

export default App;
