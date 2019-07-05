import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Title = ({ children }) => (
  <View>
    <Text style={styles.title}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#000',
  },
});

export default Title;
