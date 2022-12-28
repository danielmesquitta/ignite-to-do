import styles from './styles.module.css';
import type { DetailsProps } from './types';

export const Details: React.FC<DetailsProps> = ({
  concludedTasksCount,
  createdTasksCount,
}) => {
  return (
    <div className={styles.details}>
      <strong className={styles.createdTasks}>
        Tarefas criadas <span>{createdTasksCount}</span>
      </strong>

      <strong className={styles.concludedTasks}>
        {'Concluídas '}
        <span>{`${concludedTasksCount} de ${createdTasksCount}`}</span>
      </strong>
    </div>
  );
};
