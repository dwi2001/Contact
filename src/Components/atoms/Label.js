import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Label = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.text}>Contacts</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default Label;
