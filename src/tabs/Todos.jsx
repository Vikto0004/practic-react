import { Form, TodoList } from 'components';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = value => {
    const todo = {
      id: nanoid(),
      text: value,
    };

    setTodos([...todos, todo]);
  };

  const onDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  console.log(todos);
  return (
    <>
      <Form onSubmit={addTodo} />
      <TodoList data={todos} onDeleteTodo={onDeleteTodo} />
    </>
  );
};
