import { GridItem } from '../GridItem/GridItem';
import { Text } from '../Text/Text';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';

export const TodoListItem = ({
  todo: { id, text },
  index,
  onDeleteTodo,
  onEditTodo,
}) => {
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign='center' marginBottom='20'>
          TODO #{index + 1}
        </Text>
        <Text>{text}</Text>
        <button
          onClick={() => onDeleteTodo(id)}
          className={style.deleteButton}
          type='button'
        >
          <RiDeleteBinLine size={24} />
        </button>

        <button
          className={style.editButton}
          type='button'
          onClick={() => onEditTodo()}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
