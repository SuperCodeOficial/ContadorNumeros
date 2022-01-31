import React from 'react';
import { StyleSheet, View } from 'react-native';

export const TareaScreen = () => {
  return(
       <View style={styles.container}>
           <View style={styles.CajaMorada}/>
           <View style={styles.CajaNaranja}/>
           <View style={styles.CajaNegrita}/>
       </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20b2d8',
    },
    CajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: '#451962'
    },
    CajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: '#cea200'
    },
    CajaNegrita: {
        width: 100,
        height: 100,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: '#1b1115'
    }
});