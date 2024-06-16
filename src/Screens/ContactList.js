import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Modal, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CardContact from '../Components/molecules/CardContact';
import Search from '../Components/atoms/Search';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContacts} from '../Redux/Action/ContactActions';
import LoadingIndicator from '../Components/atoms/LoadingIndicator';
import FloatingButton from '../Components/atoms/FloatingButton';
import ModalAddContact from '../Components/molecules/ModalAddContact';

const ContactsList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {contacts, loading, error} = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  const [searchText, setSearchText] = useState('');
  const [filteredContacts, setFilteredContacts] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleSearch = text => {
    setSearchText(text);
    const filtered = contacts.filter(contact => {
      return contact.firstName.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredContacts(filtered);
  };

  const refreshContacts = async () => {
    setRefreshing(true);
    await dispatch(fetchContacts());
    setRefreshing(false);
  };

  const handleDetail = item => {
    navigation.navigate('Detail', {data: item});
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  if (loading && !refreshing) {
    return <LoadingIndicator text="Loading..." />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Search
          searchText={searchText}
          handle={handleSearch}
          placeholder="Search"
        />
      </View>

      <FlatList
        data={filteredContacts}
        renderItem={({item}) => (
          <CardContact data={item} onPress={() => handleDetail(item)} />
        )}
        keyExtractor={item => item.id.toString()}
        onRefresh={refreshContacts}
        refreshing={Boolean(refreshing)}
      />

      <FloatingButton onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <ModalAddContact closeModal={closeModal} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },
});

export default ContactsList;
