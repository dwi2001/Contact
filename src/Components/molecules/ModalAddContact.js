import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContacts, postContacts} from '../../Redux/Action/ContactActions';
import ButtonImage from '../atoms/ButtonImage';

const ModalAddContact = ({closeModal}) => {
  const dispatch = useDispatch();
  const {message} = useSelector(state => state.contacts);

  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  });

  const handleChangeText = (key, value) => {
    setContact({
      ...contact,
      [key]: value,
    });
  };
  const handleAddContact = () => {
    if (!/^\d+$/.test(contact.age)) {
      Alert.alert('Invalid Age', 'Age must be a number');
      return;
    }

    dispatch(postContacts(contact))
      .then(() => {
        closeModal();
        dispatch(fetchContacts());
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
        <Text style={styles.titleText}>Add New Contact</Text>
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
          label="Add"
          propsStyle={styles.button}
          textStyle={styles.textStyle}
          onPress={handleAddContact}
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
    marginTop: 22,
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

export default ModalAddContact;
