import React from 'react';
import {TouchableOpacity, TouchableWithoutFeedback, View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

interface Props {
  title: string;
    position?: 'br'|'bl';
  onPress: () => void;
}
export const Fab = ({title, onPress, position='br'}: Props) => {
  // console.log(Props.title);
  return (
     <View style=
     {[
       styles.fabLocation,
       (position === 'bl') ? styles.b_left : styles.b_right
     ]}>
         <TouchableWithoutFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('black', false, 20)}>
        <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
     </View>
  );
};
const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 150,
  },
  b_right:{
    right: 70
  },
  b_left:{
    left: 70
  },
  BotonIncrementar: {
    backgroundColor: 'yellow',
    borderRadius: 100,
  },
  fab: {
    backgroundColor: '#96C3A9',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,
elevation: 18,
  },
  fabText: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
