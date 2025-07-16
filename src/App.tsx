import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/HomeScreen';
import PlayerDashboard from 'screens/PlayerDashboard';
import CoachDashboard from 'screens/CoachDashboard';
import { RootStackParamList } from 'navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Player" component={PlayerDashboard} />
        <Stack.Screen name="Coach" component={CoachDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
