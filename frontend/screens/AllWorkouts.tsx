import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Workout } from 'navigation/types';
import styles from 'styles';

type Props = NativeStackScreenProps<RootStackParamList, 'AllWorkouts'>;

const API_URL = 'http://192.168.0.102:5255/api/workouts';
export default function AllWorkouts({ navigation }: Props) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get<Workout[]>(API_URL);
      setWorkouts(response.data);
    } catch (error) {
      Alert.alert('Error, could not fetch wokrouts.');
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchWorkouts);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Active Workouts</Text>
      <ScrollView style={styles.scrollView}>
        {workouts.map((p) => (
          <View key={p.id} style={styles.exerciseRow}>
            <Text style={styles.exerciseColumn}>{p.name}</Text>
            <Text style={styles.exerciseColumn}>{p.date}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateWorkout')}>
        <Text style={styles.buttonText}>Create Workout</Text>
      </TouchableOpacity>
    </View>
  );
}

