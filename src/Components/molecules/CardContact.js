import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Avatar from '../atoms/Avatar';

const CardContact = ({onPress, data}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Avatar propsStyle={styles.image} images={data.photo} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>
          {data.firstName} {data.lastName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  textContainer: {
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneText: {
    fontSize: 16,
    color: '#999',
  },
});

export default CardContact;
