import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../components/Button';

const Header = () => (
  <View style={styles.container}>
    <Button styled={buttonStyles}>Add todo task</Button>
  </View>
);

const buttonStyles = {
  backgroundColor: '#000',
  color: '#fff',
  height: 50,
  padding: 10,
  fontSize: 20,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default Header;
