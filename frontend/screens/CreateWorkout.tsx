import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/types';
import styles from 'styles';
import axios from 'axios';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateWorkout'>;

const API_URL = 'http://192.168.0.102:5255/api/workouts';

export default function CreateWorkout({ navigation }: Props) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = async () => {
    if (!name.trim() || !date.trim() || !time.trim() ) return;

    try {
      await axios.post(API_URL, {
        name,
        date,
        time
      });

      navigation.goBack();
    } catch (error) {
      Alert.alert('Could not create workout');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Weekday of workout"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
        style={styles.textBox}
      />
      <TextInput
        placeholder="Date 27/7"
        placeholderTextColor="#aaa"
        value={date}
        onChangeText={setDate}
        keyboardType="numeric"
        style={styles.textBox}
      />
        <TextInput
        placeholder="Time 12.00 - 14.00"
        placeholderTextColor="#aaa"
        value={time}
        onChangeText={setTime}
        keyboardType="numeric"
        style={styles.textBox}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Spara</Text>
      </TouchableOpacity>
    </View>
  );
}
