import { StyleSheet, Platform } from 'react-native';

const dynamicStyles = ({
  backgroundColor,
  height,
  width,
  color,
  padding,
  fontSize,
}) => {
  return StyleSheet.create({
    button: {
      height,
      backgroundColor,
    },
    text: {
      textAlign: 'center',
      padding,
      color,
      fontSize,
    },
  });
};

export const getStyles = ({
  backgroundColor,
  height,
  width,
  color,
  padding,
  fontSize,
}) => {
  return dynamicStyles({
    backgroundColor,
    height,
    width,
    color,
    padding,
    fontSize,
  });
};

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    zIndex: 10,
  },
});
