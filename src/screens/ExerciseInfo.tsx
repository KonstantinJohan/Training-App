import React from 'react';
import { View, Text } from 'react-native';
import styles from 'styles';

const ExerciseInfo = () => {
  // Hårdkodad träningsdata
  const sets = [
    {
      set: 1,
      weight: 70,
      targetReps: 12,
      actualReps: 12,
      targetVelocity: '0.8 m/s',
      actualVelocity: '0.8 m/s',
      done: true,
    },
    {
      set: 2,
      weight: 70,
      targetReps: 10,
      actualReps: '-',
      targetVelocity: '2 sec',
      actualVelocity: '-',
      done: false,
    },
    {
      set: 3,
      weight: 60,
      targetReps: 10,
      actualReps: '-',
      targetVelocity: '2 sec',
      actualVelocity: '-',
      done: false,
    },
  ];

  return (
    <View style={styles.excerciseContainer}>
      <Text style={styles.title}>Barbells rows</Text>

      <View style={styles.tableRow}>
        <Text style={styles.tableHeader}>Set</Text>
        <Text style={styles.tableHeader}>Weight</Text>
        <Text style={styles.tableHeader}>Target</Text>
        <Text style={styles.tableHeader}>Actual</Text>
        <Text style={styles.tableHeader}>T. Vel.</Text>
        <Text style={styles.tableHeader}>A. Vel.</Text>
        <Text style={styles.tableHeader}>Done</Text>
      </View>

      {sets.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.tableCell}>{item.set}</Text>
          <Text style={styles.tableCell}>{item.weight}</Text>
          <Text style={styles.tableCell}>{item.targetReps}</Text>
          <Text style={styles.tableCell}>{item.actualReps}</Text>
          <Text style={styles.tableCell}>{item.targetVelocity}</Text>
          <Text style={styles.tableCell}>{item.actualVelocity}</Text>
          <View style={styles.doneBox}>
            {item.done && <View style={styles.doneIndicator} />}
          </View>
        </View>
      ))}
    </View>
  );
};

export default ExerciseInfo;
