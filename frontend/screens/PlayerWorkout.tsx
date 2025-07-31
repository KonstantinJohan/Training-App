import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/types';
import styles from 'styles';

type Props = NativeStackScreenProps<RootStackParamList, 'PlayerWorkout'>;

type Exercise = {
  name: string;
  setsDone: number;
  totalSets: number;
  status: string;
};

const exercises: Exercise[] = [
  { name: 'Rows', setsDone: 1, totalSets: 3, status: 'Något' },
  { name: 'Rows', setsDone: 0, totalSets: 3, status: 'Något' },
  { name: 'Rows', setsDone: 0, totalSets: 3, status: 'Något' },
];

const PlayerWorkout: React.FC<Props> = ({ navigation }) => {
  const renderItem = ({ item }: { item: Exercise }) => (
    <TouchableOpacity 
      style={styles.exerciseRow}
      onPress={() => navigation.navigate('PlayerExercise')}
    >
      <Text style={styles.exerciseColumn}>{item.name}</Text>
      <Text style={styles.exerciseColumn}>Sets {item.setsDone}/{item.totalSets}</Text>
      <Text style={styles.exerciseColumn}>{item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.excerciseContainer}>
      <Text style={styles.title}>Back</Text>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default PlayerWorkout;
