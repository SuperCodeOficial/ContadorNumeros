import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';
export const ContadorScreen = () => {
  const [contador, setcontador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador: {contador}</Text>
      <Fab 
      title="+1"
      position='bl'
      onPress={() => setcontador(contador + 1)}
      />

    <Fab 
      title="-1"
      position='br'
      onPress={() => setcontador(contador - 1)}
      />
      {/* <TouchableOpacity
        style={styles.fabLocationL}
        onPress={() => setcontador(contador - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 35,
    top: -20,
    // textAlign: center,
  },
});
