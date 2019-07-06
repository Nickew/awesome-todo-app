import React from 'react';
import { StyleSheet, View } from 'react-native';

const TodoList = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    color: 'red',
  },
});

export default TodoList;
