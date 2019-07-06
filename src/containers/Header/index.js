import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './Title';
import Button from '../../components/Button';

const Header = () => (
  <View style={styles.container}>
    <Title>My todo list</Title>
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
});

export default Header;
