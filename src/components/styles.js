import { StyleSheet, Platform } from 'react-native';

const dynamicStyles = ({
  backgroundColor,
  height,
  width,
  color,
  padding,
  fontSize,
  borderBottomRightRadius,
  borderBottomLeftRadius,
}) => {
  return StyleSheet.create({
    button: {
      height,
      backgroundColor,
      borderBottomRightRadius,
      borderBottomLeftRadius,
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
  borderBottomRightRadius,
  borderBottomLeftRadius,
}) => {
  return dynamicStyles({
    backgroundColor,
    height,
    width,
    color,
    padding,
    fontSize,
    borderBottomRightRadius,
    borderBottomLeftRadius,
  });
};

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    zIndex: 10,
  },
});
