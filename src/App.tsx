import './global.css';
import styles from './App.module.css';

import { Details } from './components/Details';
import { Task } from './components/Task';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <Details />

        <Task id={1} isConcluded={true} />

        <Task id={2} isConcluded={false} />
      </main>
    </div>
  );
};

export default App;
