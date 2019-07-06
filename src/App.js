import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './containers/Header';
import AddTodo from './containers/AddTodo';
import TodoSection from './containers/TodoSection';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <AddTodo />
        <TodoSection />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
