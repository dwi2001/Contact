import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import ButtonImage from '../Components/atoms/ButtonImage';
import Avatar from '../Components/atoms/Avatar';
import ModalDeleteContact from '../Components/molecules/ModalDeleteContact';
import ModalEdit from '../Components/molecules/ModalEdit';

const DetailContact = props => {
  const data = props.route.params.data;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  return (
    <View style={styles.container}>
      <View style={styles.coverPhoto}></View>
      <View style={styles.avatarContainer}>
        <Avatar images={data.photo} propsStyle={styles.avatar} />
        <Text style={styles.name}>
          {data.firstName} {data.lastName}
        </Text>
        <Text style={styles.name}>Age : {data.age}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonImage
          icon="trash"
          size={20}
          color="red"
          onPress={() => setModalVisible(true)}
        />
        <ButtonImage
          icon="pen"
          size={20}
          color="#2196F3"
          onPress={() => setModalEdit(true)}
        />
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ModalDeleteContact closeModal={closeModal} data={data} />
      </Modal>

      <Modal animationType="slide" transparent={true} visible={modalEdit}>
        <ModalEdit closeModal={closeModalEdit} data={data.id} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  coverPhoto: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    backgroundColor: '#DCDCDC',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -75,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: 'white',
  },
  name: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '40%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default DetailContact;
