import styles from './styles.module.css';

import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useCallback,
  useState,
} from 'react';
import { PlusCircle } from 'phosphor-react';
import { HeaderProps } from './types';
import { Task } from '../Task/types';

export const Header: React.FC<HeaderProps> = ({ setTasks }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInvalidInputValue = useCallback(
    (e: InvalidEvent<HTMLInputElement>) => {
      e.target.setCustomValidity('Esse campo é obrigatório');
    },
    [],
  );

  const handleInputValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.target.setCustomValidity('');

      setInputValue(e.target.value);
    },
    [],
  );

  const handleAddTask = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newTask: Task = {
        id: Math.random(),
        value: inputValue,
        isConcluded: false,
      };

      setTasks((prevTasks) => [newTask, ...prevTasks]);

      setInputValue('');
    },
    [inputValue],
  );

  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Logotipo do Ignite To Do" />

      <form onSubmit={handleAddTask}>
        <input
          value={inputValue}
          onChange={handleInputValueChange}
          placeholder="Adicione uma nova tarefa"
          required
          onInvalid={handleInvalidInputValue}
        />

        <button type="submit">
          Criar <PlusCircle />
        </button>
      </form>
    </header>
  );
};
