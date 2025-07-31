import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/types';
import styles from 'styles';
import axios from 'axios';

type Props = NativeStackScreenProps<RootStackParamList, 'CreatePlayer'>;

const API_URL = 'http://192.168.0.102:5255/api/players';

export default function CreatePlayer({ navigation }: Props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async () => {
    if (!name.trim() || !number.trim()) return;

    try {
      await axios.post(API_URL, {
        name,
        number: parseInt(number, 10),
      });

      navigation.goBack();
    } catch (error) {
      Alert.alert('Fel', 'Kunde inte skapa spelare.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Namn på spelare"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
        style={{
          width: 250,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          backgroundColor: '#fff',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Nummer"
        placeholderTextColor="#aaa"
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
        style={{
          width: 250,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          backgroundColor: '#fff',
          padding: 10,
          marginBottom: 20,
        }}
      />
      <Button title="Spara" onPress={handleSubmit} />
    </View>
  );
}
