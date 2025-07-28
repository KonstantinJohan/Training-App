import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E', // Mörk bakgrund
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4F4F4F',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 20,
  }

}
);
