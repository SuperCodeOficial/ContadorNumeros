import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('window');

export const DimensioneScreen = () => {
  return(
      <View>
      <View style={styles.container}>
          <View style={styles.CajaMorada}/>
          <View style={styles.CajaNaranja}/>
      </View>
      <Text style={styles.title}>W: {width}, H: {height}</Text>
      </View>
  )
};

const styles = StyleSheet.create({
    container:{
     width: '100%',
    height: 650,
    backgroundColor: '#fffb97',
    },
    CajaMorada: {
        backgroundColor: '#ce85e7',
        width: '50%',
        height: '50%',
    },
    CajaNaranja: {
        backgroundColor: '#ff7a51'
    },
    title: {
     fontSize: 30
    }
});