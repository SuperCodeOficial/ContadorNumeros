import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export const BoxObjectModel = () => 
{
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Box Object Model</Text>
  </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'yellow'
  },
    title:{
      padding: 10,
      fontSize:20,
      textAlign: 'center',
      borderWidth: 7,
    }
});