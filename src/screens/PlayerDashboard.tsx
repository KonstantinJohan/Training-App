import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from 'theme';

const PlayerHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workouts</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Friday 25/7{"\n"}13.00–14.30</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayerHomeScreen;