import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Player } from 'navigation/types';
import styles from 'styles';

type Props = NativeStackScreenProps<RootStackParamList, 'AllPlayers'>;

const API_URL = 'http://192.168.0.102:5255/api/players';

export default function AllPlayers({ navigation }: Props) {
  const [players, setPlayers] = useState<Player[]>([]);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get<Player[]>(API_URL);
      setPlayers(response.data);
    } catch (error) {
      Alert.alert('Error, could not fetch players.');
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchPlayers);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Players</Text>
      <ScrollView style={styles.scrollView}>
        {players.map((p) => (
          <View key={p.id} style={styles.exerciseRow}>
            <Text style={styles.exerciseColumn}>{p.number}</Text>
            <Text style={styles.exerciseColumn}>{p.name}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreatePlayer')}>
        <Text style={styles.buttonText}>Add Player</Text>
      </TouchableOpacity>
    </View>
  );
}

