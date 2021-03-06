import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './my_components/Header';
import ListItem from './my_components/ListItem';
//import {uuid} from 'uuidv4';
import { v4 as uuidv4} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} />}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60, //Same as header height
  },
});

export default App;