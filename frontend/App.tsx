import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/types';
import AllPlayers from 'screens/AllPlayers';
import HomeScreen from 'screens/HomeScreen';
import PlayerMenu from 'screens/PlayerMenu';
import CreatePlayer from 'screens/CreatePlayer';
import PlayerWorkout from 'screens/PlayerWorkout';
import PlayerExercise from 'screens/PlayerExercise';
import CoachMenu from 'screens/CoachMenu';
import AllWorkouts from 'screens/AllWorkouts';
import CreateWorkout from 'screens/CreateWorkout';


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
        <Stack.Screen name="AllPlayers" component={AllPlayers}  />
        <Stack.Screen name="AllWorkouts" component={AllWorkouts}  />
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="PlayerMenu" component={PlayerMenu} />
        <Stack.Screen name="CoachMenu" component={CoachMenu} />
        <Stack.Screen name="CreatePlayer" component={CreatePlayer} />
        <Stack.Screen name="CreateWorkout" component={CreateWorkout} />
        <Stack.Screen name="PlayerWorkout" component={PlayerWorkout} />
        <Stack.Screen name="PlayerExercise" component={PlayerExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

