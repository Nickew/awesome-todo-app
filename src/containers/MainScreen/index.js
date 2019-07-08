import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoContainer from './TodoContainer';

const MainScreen = () => (
  <View style={styles.container}>
    <Header />
    <AddTodo />
    <TodoContainer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default MainScreen;
