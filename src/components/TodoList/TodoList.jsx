import { Grid } from '../Grid/Grid';
import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList = ({ data, onDeleteTodo }) => {
  return (
    <Grid>
      {data.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={index}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </Grid>
  );
};
