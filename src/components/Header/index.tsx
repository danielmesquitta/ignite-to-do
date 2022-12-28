import styles from './styles.module.css';

import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

export const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [],
  );

  const handleCreateNewTask = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) return;
  }, []);

  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Logotipo do Ignite To Do" />

      <form onSubmit={handleCreateNewTask}>
        <input
          value={inputValue}
          onChange={handleInputValueChange}
          placeholder="Adicione uma nova tarefa"
        />

        <button type="submit">
          Criar <PlusCircle />
        </button>
      </form>
    </header>
  );
};
