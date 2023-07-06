import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import Plus from '../../assets/svgs/plus.svg';
import { styles } from './styles';

type FormTaskProps = {
  value: string;
  setValue: (value: string) => void;
  handleAddTask: (value: string) => void;
}

export function FormTask({ value, setValue, handleAddTask }: FormTaskProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.inputTask, isFocused && styles.inputTaskFocused]}
      />

      <TouchableOpacity
        style={styles.btnAdd}
        onPress={() => handleAddTask(value)}
      >
        <Plus/>
      </TouchableOpacity>
    </View>
  );
}
