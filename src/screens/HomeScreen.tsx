import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import theme from 'styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={theme.container}>
      <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Player')}>
        <Text style={theme.buttonText}>Player</Text>
      </TouchableOpacity>

      <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Coach')}>
        <Text style={theme.buttonText}>Coach</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
