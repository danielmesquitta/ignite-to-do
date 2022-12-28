import styles from './styles.module.css';

import type { TaskProps } from './types';
import { Circle, CheckCircle, Trash, Check } from 'phosphor-react';

export const Task: React.FC<TaskProps> = ({ id, isConcluded }) => {
  return (
    <li className={styles.task}>
      <button
        type="button"
        className={isConcluded ? styles.checkIcon : styles.circleIcon}
      >
        {isConcluded && <Check />}
      </button>

      <span className={isConcluded ? styles.lineThrough : ''}>
        Estudar sobre React
      </span>

      <button type="button" className={styles.trashIcon}>
        <Trash />
      </button>
    </li>
  );
};
