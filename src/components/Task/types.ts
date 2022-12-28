import { Dispatch, SetStateAction } from 'react';

export interface Task {
  id: number;
  value: string;
  isConcluded: boolean;
}

export interface TaskProps extends Task {
  setTasks: Dispatch<SetStateAction<Task[]>>;
}
