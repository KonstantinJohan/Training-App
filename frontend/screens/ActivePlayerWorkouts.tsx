import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/types';
import styles from 'styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Player'>;

const ActivePlayerWorkouts: React.FC<Props> = ({ navigation }) => 
{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workouts</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Workout')} >Friday 25/7{"\n"}13.00–14.30</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ActivePlayerWorkouts;