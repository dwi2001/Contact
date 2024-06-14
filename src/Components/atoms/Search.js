import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Search = ({searchText, handle, placeholder}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        value={searchText}
        onChangeText={handle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#fff',
    padding: 8,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 24,
    paddingLeft: 20,
  },
});

export default Search;
