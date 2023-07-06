import { useState } from 'react';
import { Alert, Keyboard, Text, View } from 'react-native';

import { Banner } from '../../components/Banner';
import { FormTask } from '../../components/FormTask';
import { styles } from './styles';
import { TasksList } from '../../components/TasksList';
import { InfoTasks } from '../../components/InfoTasks';

type Task = {
  id: number;
  description: string;
  completed: boolean;
};

export function Home() {
  const [textTask, setTextTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [createdTasks, setCreatedTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  const handleAddTask = (value: string) => {
    if (value === '') return;

    const newTask = { description: value, completed: false, id: (tasks.at(-1)?.id ?? 0) + 1 };

    setTasks((prevState) => [...prevState, newTask]);
    setTextTask('');
    setCreatedTasks((prevState) => prevState + 1);
    Keyboard.dismiss();
  };

  const handleCheckTask = (task: Task) => {
    setTasks((prevState) => prevState.map((t) => {
      if (t.id === task.id) {
        t.completed = !t.completed;
      }

      return t;
    }));

    setCompletedTasks((prevState) => prevState + (task.completed ? 1 : -1));
  };

  const handleDeleteTask = (task: Task) => {
    Alert.alert('Excluir tarefa', 'Deseja realmente excluir essa tarefa?', [
      {
        text: 'Sim',
        onPress: () => {
          setTasks((prevState) => prevState.filter((t) => t.id !== task.id));
          setCreatedTasks((prevState) => prevState - 1);

          if (task.completed) {
            setCompletedTasks((prevState) => prevState - 1);
          }
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Banner/>

      <View style={styles.formTaskView}>
        <FormTask
          value={textTask}
          setValue={setTextTask}
          handleAddTask={handleAddTask}
        />
      </View>

      <InfoTasks
        createdTasks={createdTasks}
        completedTasks={completedTasks}
      />

      <TasksList
        tasks={tasks}
        handleCheckTask={handleCheckTask}
        handleDeleteTask={handleDeleteTask}
      />
    </View>
  );
}