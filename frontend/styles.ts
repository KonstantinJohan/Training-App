import { StyleSheet } from 'react-native';



export default StyleSheet.create({

    container: 
    {
      flex: 1,
      backgroundColor: '#2E2E2E', 
      alignItems: 'center',
      justifyContent: 'center'
    },

    excerciseContainer: 
    {
      flex: 1,
      backgroundColor: '#2E2E2E', 
      justifyContent: 'center',
      padding: 20
    },

    button: 
    {
      backgroundColor: '#4F4F4F',
      padding: 20,
      marginVertical: 10,
      borderRadius: 10,
      width: 200,
      alignItems: 'center'
    },

    buttonText: 
    {
      color: '#FFF',
      fontSize: 18,
      textAlign: 'center'
    },

    title: 
    {
      fontSize: 24,
      color: '#FFF',
      marginBottom: 20
    },
    
    exerciseRow: 
    {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#444',
      padding: 12,
      marginVertical: 6,
      borderRadius: 8,
    },

    exerciseColumn: 
    {
      color: '#fff',
      fontSize: 16,
      flex: 1,
      textAlign: 'center',
    },

    tableRow: 
    {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
      paddingHorizontal: 4,
      borderBottomWidth: 1,
      borderColor: '#555',
    },

    tableHeader: 
    {
      flex: 1,
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 12,
      textAlign: 'center',
    },

    tableCell: 
    {
      flex: 1,
      color: '#fff',
      fontSize: 12,
      textAlign: 'center',
    },

    doneBox: 
    {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    doneIndicator: 
    {
      width: 14,
      height: 14,
      backgroundColor: '#00C851',
      borderRadius: 3,
    },

    scrollView:
    { 
      width: '100%', 
      paddingHorizontal: 20, 
      maxHeight: 400 
    },

    textBox:
    {
      width: 250,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      backgroundColor: '#fff',
      padding: 10,
      marginBottom: 10,
    }

});
