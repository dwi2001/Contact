import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ButtonImage = ({onPress, icon, size, color = 'white', buttonStyle}) => {
  return (
    <TouchableOpacity style={[Style.container, buttonStyle]} onPress={onPress}>
      <Icon name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

const Style = StyleSheet.create({
  container: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export default ButtonImage;
