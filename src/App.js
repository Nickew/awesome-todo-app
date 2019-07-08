import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './containers/MainScreen';
import { TodoProvider } from './modules/todoModule';

export default class App extends Component {
  render() {
    return (
      <TodoProvider>
        <MainScreen />
      </TodoProvider>
    );
  }
}
