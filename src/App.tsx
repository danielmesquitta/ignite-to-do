import './global.css';
import styles from './App.module.css';

import { Details } from './components/Details';
import { Task } from './components/Task';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <Task />

      <Details />
    </div>
  );
};

export default App;
