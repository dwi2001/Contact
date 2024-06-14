import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({value, handle, placeholder, keyboardType}) => {
  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.Input}
        placeholder={placeholder}
        value={value}
        onChangeText={handle}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    padding: 8,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  Input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 24,
    paddingLeft: 20,
  },
});

export default Input;
