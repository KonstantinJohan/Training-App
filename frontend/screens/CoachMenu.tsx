import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import theme from 'styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CoachMenu'>;

const CoachMenu: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={theme.container}>
      <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('CoachMenu')}>
        <Text style={theme.buttonText}>Workouts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('AllPlayers')}>
        <Text style={theme.buttonText}>Players</Text>
      </TouchableOpacity>

     <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('CoachMenu')}>
        <Text style={theme.buttonText}>Trends</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CoachMenu;
