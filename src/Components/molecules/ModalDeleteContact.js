import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from '../atoms/Button';
import {useSelector, useDispatch} from 'react-redux';
import {deleteContacts} from '../../Redux/Action/ContactActions';

const ModalDeleteContact = ({closeModal, data}) => {
  const dispatch = useDispatch();
  const {error} = useSelector(state => state.contacts);

  const handleDelete = () => {
    dispatch(deleteContacts(data.id)).then(() => {
      console.log('Contact delete successfully:', error);
      closeModal();
    });
  };
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={{borderBottomWidth: 1}}>
          <Text style={{marginBottom: 5}}>Are you sure wan't to delete ?</Text>
          <Text
            style={[{marginBottom: 5, textAlign: 'center'}, styles.titleText]}>
            {data.firstName}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
            width: '70%',
          }}>
          <Button
            label="No"
            propsStyle={{...styles.button}}
            textStyle={styles.textStyle}
            onPress={closeModal}
          />
          <Button
            label="Yes"
            propsStyle={{...styles.button, backgroundColor: 'red'}}
            textStyle={{...styles.textStyle}}
            onPress={handleDelete}
          />
        </View>
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

export default ModalDeleteContact;
