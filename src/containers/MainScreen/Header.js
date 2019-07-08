import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../../components/Button';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>My todo list</Text>
    <Button styled={buttonStyles}>Settings</Button>
  </View>
);

const buttonStyles = {
  backgroundColor: '#000',
  color: '#fff',
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    color: '#000',
  },
});

export default Header;
