import { Form, TodoList } from 'components';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { EditForm } from '../components/EditForm/EditForm';
import { Notify } from 'notiflix';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = value => {
    if (findTodo(value)) return;

    const todo = {
      id: nanoid(),
      text: value,
    };

    setTodos([...todos, todo]);
  };

  const onDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = todo => {
    setIsEditing(!isEditing);
    setCurrentTodo({ ...todo });
  };

  const handleCancelUpd = () => {
    setIsEditing(!isEditing);
    setCurrentTodo({});
  };

  const handleUpdateTodo = value => {
    if (findTodo(value)) return;
    setTodos(
      todos.map(todo => {
        return todo.id === currentTodo.id
          ? { ...currentTodo, text: value }
          : todo;
      })
    );
    handleCancelUpd();
  };

  const findTodo = text => {
    const isTodoExist = todos.find(
      todo => todo.text.toLowerCase() === text.toLowerCase()
    );

    if (isTodoExist) {
      Notify.info(`todo ${text} is already created`);
    }

    return isTodoExist;
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo.text}
          updateTodo={handleUpdateTodo}
          cancelUpdate={handleCancelUpd}
        />
      ) : (
        <Form onSubmit={addTodo} />
      )}
      <TodoList
        data={todos}
        onDeleteTodo={onDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </>
  );
};
