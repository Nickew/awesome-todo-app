import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './containers/Header';
import AddTodo from './containers/AddTodo';
import TodoSection from './containers/TodoSection';
import { TodoProvider } from './modules/todoModule';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <TodoProvider>
        <View style={styles.container}>
          <Header />
          <AddTodo />
          <TodoSection />
        </View>
      </TodoProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
