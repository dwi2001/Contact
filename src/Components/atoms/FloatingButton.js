import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const FloatingButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8, // Efek naik ketika ditekan
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
});
export default FloatingButton;
