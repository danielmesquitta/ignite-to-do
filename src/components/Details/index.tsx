import styles from './styles.module.css';

export const Details: React.FC = () => {
  return (
    <div className={styles.details}>
      <strong className={styles.createdTasks}>
        Tarefas criadas <span>5</span>
      </strong>

      <strong className={styles.concludedTasks}>
        Concluídas <span>2 de 5</span>
      </strong>
    </div>
  );
};
