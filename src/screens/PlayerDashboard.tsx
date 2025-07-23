import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from 'theme';

export default function PlayerDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spelare Dagens Pass</Text>
      <Text style={styles.status}>Ej genomfört</Text>
      <Button title="Markera som klart" onPress={() => alert('Sparar lokalt...')} />
    </View>
  );
}
