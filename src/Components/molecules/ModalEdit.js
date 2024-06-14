import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import ButtonImage from '../atoms/ButtonImage';
import {useDispatch, useSelector} from 'react-redux';
import {editContacts} from '../../Redux/Action/ContactActions';
import {useNavigation} from '@react-navigation/native';

const ModalEdit = ({closeModal, data}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {loading, error, message} = useSelector(state => state.contacts);
  const [id, setId] = useState(data);

  const [contact, setContact] = useState({
    firstName: 'huwayawww',
    lastName: '12345',
    age: '123',
    photo: 'ds',
  });

  const handleChangeText = (key, value) => {
    setContact({
      ...contact,
      [key]: value,
    });
  };

  const handleEditContact = () => {
    if (!/^\d+$/.test(contact.age)) {
      Alert.alert('Invalid Age', 'Age must be a number');
      return;
    }

    dispatch(editContacts(id, contact))
      .then(() => {
        closeModal();
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error('Failed to add contact:', error);
        Alert.alert(
          'Failed to Add Contact',
          'An error occurred while adding contact',
        );
      });
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={{alignSelf: 'flex-end'}}>
          <ButtonImage
            icon="times-circle"
            size={20}
            color="grey"
            onPress={closeModal}
          />
        </View>
        <View style={{borderBottomWidth: 1}}>
          <Text style={{marginBottom: 5}}>Edit Contact</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
            width: '70%',
          }}></View>
        <Input
          placeholder="First Name"
          value={contact.firstName}
          handle={text => handleChangeText('firstName', text)}
        />
        <Input
          placeholder="Last Name"
          value={contact.lastName}
          handle={text => handleChangeText('lastName', text)}
        />
        <Input
          placeholder="Age"
          value={contact.age}
          handle={text => handleChangeText('age', text)}
          keyboardType="numeric"
        />
        <Input
          placeholder="photo"
          value={contact.photo}
          handle={text => handleChangeText('photo', text)}
        />

        <Button
          label="Update"
          propsStyle={styles.button}
          textStyle={styles.textStyle}
          onPress={handleEditContact}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ModalEdit;
