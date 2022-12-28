import './global.css';
import styles from './App.module.css';

import { Details } from './components/Details';
import { Task } from './components/Task';
import type { Task as TaskType } from './components/Task/types';
import { Header } from './components/Header';
import { useState } from 'react';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  return (
    <div className={styles.container}>
      <Header setTasks={setTasks} />

      <main className={styles.main}>
        <Details
          concludedTasksCount={
            tasks.filter(({ isConcluded }) => isConcluded).length
          }
          createdTasksCount={tasks.length}
        />

        <ul>
          {tasks.map((task) => (
            <Task key={task.id} {...task} setTasks={setTasks} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
