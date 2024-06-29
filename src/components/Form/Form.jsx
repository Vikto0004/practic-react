import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [word, setWord] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(word);
    setWord('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        value={word}
        required
        autoFocus
        onChange={e => setWord(e.target.value)}
      />
    </form>
  );
};
