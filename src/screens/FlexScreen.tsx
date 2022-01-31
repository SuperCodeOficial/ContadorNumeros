import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreen = () => {
  return(
      <View style={styles.container}>
          <Text style={styles.caja1}>The Box 1</Text>
          <Text style={styles.caja2}>The Box 2</Text>
          <Text style={styles.caja3}>The Box 3</Text>
          <Text style={styles.caja1}>The Box 1</Text>
          <Text style={styles.caja2}>The Box 2</Text>
          <Text style={styles.caja3}>The Box 3</Text>
          <Text style={styles.caja1}>The Box 1</Text>
          <Text style={styles.caja2}>The Box 2</Text>
          <Text style={styles.caja3}>The Box 3</Text>
          <Text style={styles.caja1}>The Box 1</Text>
          <Text style={styles.caja2}>The Box 2</Text>
          <Text style={styles.caja3}>The Box 3</Text>
          <Text style={styles.caja1}>The Box 1</Text>
          <Text style={styles.caja2}>The Box 2</Text>
          <Text style={styles.caja3}>The Box 3</Text>
          <Text style={styles.caja1}>The Box 1</Text>
          <Text style={styles.caja2}>The Box 2</Text>
          <Text style={styles.caja3}>The Box 3</Text>
          <Text style={styles.caja1}>The Box 1</Text>
          <Text style={styles.caja2}>The Box 2</Text>
          <Text style={styles.caja3}>The Box 3</Text>
          <Text style={styles.caja1}>The Box 1</Text>
          <Text style={styles.caja2}>The Box 2</Text>
          <Text style={styles.caja3}>The Box 3</Text>
          <Text style={styles.caja1}>The Box 1</Text>
          <Text style={styles.caja2}>The Box 2</Text>
          <Text style={styles.caja3}>The Box 3</Text>
      </View>
  )
};

const styles = StyleSheet.create({
    container:{
      flex: 1,
    // height: 300,
      backgroundColor: '#4de0dc',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    //   justifyContent:'flex-end'
    // alignItems: 'stretch'
    },
    caja1:{
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 25,
        // alignSelf: 'center'
    },
    caja2:{
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 25,
        // alignSelf: 'flex-start'
    }, 
    caja3:{
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 25,
        // alignSelf: 'flex-end'
    } 
});