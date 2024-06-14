import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailContact from '../Screens/DetailContact';
import ContactList from '../Screens/ContactList';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ContactList}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={DetailContact} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
