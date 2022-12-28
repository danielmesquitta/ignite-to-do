import styles from './styles.module.css';

import type { TaskProps } from './types';
import { Circle, CheckCircle, Trash, Check } from 'phosphor-react';
import { useCallback } from 'react';

export const Task: React.FC<TaskProps> = ({
  id,
  isConcluded,
  value,
  setTasks,
}) => {
  const deleteTask = useCallback(() => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, [id]);

  const toggleTaskIsConcluded = useCallback(() => {
    setTasks((prevTasks) => {
      const index = prevTasks.findIndex((task) => task.id === id);

      const newList = prevTasks;

      newList[index].isConcluded = !isConcluded;

      return [...newList];
    });
  }, [id, isConcluded]);

  return (
    <li className={styles.task}>
      <button
        type="button"
        onClick={toggleTaskIsConcluded}
        className={isConcluded ? styles.checkIcon : styles.circleIcon}
      >
        {isConcluded && <Check />}
      </button>

      <span className={isConcluded ? styles.lineThrough : ''}>{value}</span>

      <button type="button" onClick={deleteTask} className={styles.trashIcon}>
        <Trash />
      </button>
    </li>
  );
};
