export type RootStackParamList = {
  Home: undefined;
  AllPlayers: undefined;
  AllWorkouts: undefined;
  PlayerMenu: undefined;
  CreatePlayer: undefined;
  CreateWorkout: undefined;
  CoachMenu: undefined;
  PlayerWorkout: undefined;
  PlayerExercise: undefined;

};

export type Player = {
  id: number;
  name: string;
  number: number;
};

export type Workout = {
  id: number;
  name: string;
  date: string;
  time: string;
};