import { Text, View } from 'react-native';

import { styles } from './styles';

type InfoTasksProps = {
  createdTasks: number;
  completedTasks: number;
};

export function InfoTasks({ completedTasks, createdTasks }: InfoTasksProps) {
  return (
    <View style={styles.infoTasksContainer}>
      <View style={styles.infoTask}>
        <Text style={[styles.infoText, styles.infoCreatedText]}>
          Criadas
        </Text>
        <View style={styles.infoCount}>
          <Text style={styles.infoCountText}>{createdTasks}</Text>
        </View>
      </View>

      <View style={[styles.infoTask, styles.infoTaskLast]}>
        <Text style={[styles.infoText, styles.infoCompletedText]}>
          Concluídas
        </Text>
        <View style={styles.infoCount}>
          <Text style={styles.infoCountText}>{completedTasks}</Text>
        </View>
      </View>
    </View>
  );
}