import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { Player } from 'navigation/types'; // kontrollera korrekt path

const API_URL = 'http://192.168.0.102:5255/api/players';

export default function PlayerScreen() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [name, setName] = useState('');

  const fetchPlayers = async () => {
    try {
      const response = await axios.get<Player[]>(API_URL);
      setPlayers(response.data);
    } catch (error) {
      Alert.alert('Fel', 'Kunde inte hämta spelare.');
      console.error(error);
    }
  };

  const createPlayer = async () => {
    if (!name.trim()) return;
    try {
      await axios.post(API_URL, { name });
      setName('');
      fetchPlayers();
    } catch (error) {
      Alert.alert('Fel', 'Kunde inte skapa spelare.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Namn på spelare"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          marginBottom: 10,
          padding: 8,
        }}
      />
      <Button title="Skapa spelare" onPress={createPlayer} />

      <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>Spelare:</Text>
      <ScrollView style={{ marginTop: 10, maxHeight: 300 }}>
        {players.map((p) => (
          <View key={p.id} style={{ padding: 10, borderBottomWidth: 1, borderColor: '#eee' }}>
            <Text style={{ fontSize: 16 }}>{p.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
