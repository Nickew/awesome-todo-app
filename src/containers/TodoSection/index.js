import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

const TodoSection = () => (
  <View style={styles.container}>
    <TodoList>
      <TodoItem
        title="Learn React Native!"
        description="Lorem lorem ipsum"
        date={Date.now()}
      />
      <TodoItem
        title="Learn React Native!"
        description="Lorem lorem ipsum"
        date={Date.now()}
      />
      <TodoItem
        title="Learn React Native!"
        description="Lorem lorem ipsum"
        date={Date.now()}
      />
    </TodoList>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default TodoSection;
