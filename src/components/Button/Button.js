/**
 * @format
 * @flow
 */

import React from 'react';
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  PressEvent,
} from 'react-native';
import { styles, getStyles } from './styles';

type ButtonProps = $ReadOnly<{|
  children?: any,
  onPress: (event?: PressEvent) => mixed,
  color?: ?string,
  accessibilityLabel?: ?string,
  disabled?: ?boolean,
  testID?: ?string,
  width?: string,
  height?: string,
  styled?: {
    backgroundColor?: string,
    height?: number,
    width?: ?string,
    color?: ?string,
    padding?: number,
    fontSize?: number,
    borderBottomRightRadius?: number,
    borderBottomLeftRadius?: number,
  },
|}>;

class Button extends React.Component<ButtonProps> {
  render() {
    const {
      accessibilityLabel,
      children,
      color,
      testID,
      disabled,
      onPress,
      styled,
    } = this.props;
    const dynamyicStyles = styled
      ? getStyles({
          backgroundColor: styled.backgroundColor || 'transparent',
          color: styled.color || '#000',
          padding: styled.padding || 10,
          height: styled.height || 40,
          width: styled.width || 100,
          fontSize: styled.fontSize || 14,
          borderBottomRightRadius: styled.borderBottomRightRadius || 0,
          borderBottomLeftRadius: styled.borderBottomLeftRadius || 0,
        })
      : styles;
    const accessibilityStates = [];
    if (disabled) {
      accessibilityStates.push('disabled');
    }
    const Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
      <Touchable
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        accessibilityStates={accessibilityStates}
        testID={testID}
        disabled={disabled}
        onPress={onPress}
        touchSoundDisabled
      >
        <View style={dynamyicStyles.button}>
          <Text style={dynamyicStyles.text}>{children}</Text>
        </View>
      </Touchable>
    );
  }
}

export default Button;
