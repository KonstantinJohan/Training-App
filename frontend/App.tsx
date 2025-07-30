import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/types';
import HomeScreen from 'screens/HomeScreen';
import ActivePlayerWorkouts from 'screens/ActivePlayerWorkouts';
import CoachDashboard from 'screens/PlayerScreen';
import SelectedWorkout from 'screens/SelectedWorkout';
import ExerciseInfo from 'screens/ExerciseInfo';
import PlayerScreen from 'screens/PlayerScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();



export default function App() 
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions=
      {
        {
          headerStyle: 
          {
            backgroundColor: '#8B0000', 
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: 
          {
            fontWeight: 'bold',
          },
        }
      }
       >
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Player" component={ActivePlayerWorkouts} />
        <Stack.Screen name="Coach" component={PlayerScreen} />
        <Stack.Screen name="Workout" component={SelectedWorkout} />
        <Stack.Screen name="Exercise" component={ExerciseInfo} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

