import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PlayerDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spelare Dagens Pass</Text>
      <Text style={styles.status}>Ej genomfört</Text>
      <Button title="Markera som klart" onPress={() => alert('Sparar lokalt...')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 16,
  },
  status: {
    fontSize: 18,
    marginBottom: 16,
    color: 'red',
  },
});
