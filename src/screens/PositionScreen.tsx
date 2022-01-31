import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return(
      <View style={styles.container}>
         <View style={styles.CajaMorada}/>
         <View style={styles.CajaNaranja}/>
         <View style={styles.CajaVerde}/>
      </View>
  )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 400,
        // height: 400,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9',
    },
    CajaMorada:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 40
    },
    CajaNaranja:{
        backgroundColor: '#ff8608',
        width: 100,
        height: 100,
        borderWidth: 5,
        borderColor: 'white',
        top:300,
        left: 260
    },
    CajaVerde:{
        backgroundColor: '#148c4a',
        width: 100,
        height: 100,
        borderWidth: 5,
        borderColor: 'white',
        top:0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute'
    }
});