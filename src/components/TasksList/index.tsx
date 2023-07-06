import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import Clipboard from '../../assets/svgs/clipboard.svg';
import Checked from '../../assets/svgs/checked.svg';
import Unchecked from '../../assets/svgs/unchecked.svg';
import Trash from '../../assets/svgs/trash.svg';
import RedTrash from '../../assets/svgs/red-trash.svg';
import { styles } from './styles';
import { useState } from 'react';

type Task = {
  id: number;
  description: string;
  completed: boolean;
};

type TasksListProps = {
  tasks: Task[];
  handleCheckTask: (task: Task) => void;
  handleDeleteTask: (task: Task) => void;
};

type TaskProps = {
  task: Task;
  handleCheckTask: (task: Task) => void;
  handleDeleteTask: (task: Task) => void;
};

const Task = ({ task, handleCheckTask, handleDeleteTask }: TaskProps) => (
  <View style={styles.taskContainer}>
    <TouchableOpacity
      onPress={() => handleCheckTask(task)}
      style={styles.taskIcon}
    >
      {task.completed ? <Checked/> : <Unchecked/>}
    </TouchableOpacity>
    <Text
      style={[styles.taskDescriptionText, task.completed && styles.taskCompletedDescriptionText]}
    >
      {task.description}
    </Text>
    <TouchableOpacity
      onPress={() => handleDeleteTask(task)}
      style={[styles.taskIcon, styles.taskTrashIcon]}
    >
      <Trash width={18} height={18}/>
    </TouchableOpacity>
  </View>
);

const EmptyList = () => (
  <View style={styles.containerEmpty}>
    <Clipboard/>
    <View>
      <Text style={[styles.textEmpty, styles.textEmptyBold]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.textEmpty}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  </View>
);

export function TasksList({ tasks, handleCheckTask, handleDeleteTask }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <Task
          task={item}
          handleCheckTask={handleCheckTask}
          handleDeleteTask={handleDeleteTask}
        />
      )}
      keyExtractor={(item) => `${item.id}`}
      ListEmptyComponent={<EmptyList/>}
    />
  );
}