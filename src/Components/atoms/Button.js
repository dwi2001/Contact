import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({propsStyle, label, textStyle, onPress}) => {
  return (
    <TouchableOpacity style={[style.container, propsStyle]} onPress={onPress}>
      <Text style={[textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    width: 100,
  },
});

export default Button;
