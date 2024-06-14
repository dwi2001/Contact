import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonImage from '../atoms/ButtonImage';

const Tollbar = () => {

  const ButtonItem = ({icon, size, color}) => {
    return (
      <View style={{padding: 10}}>
        <ButtonImage icon={icon} size={size} color={color} />
      </View>
    );
  };

  return (
    <View style={{flexDirection: 'row', padding: 5}}>
      <ButtonItem icon="plus" size={20}/>
      <ButtonItem  icon="search" size={20}/>
      <ButtonItem />
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Tollbar;
