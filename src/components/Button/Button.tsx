import * as React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';

enum ButtonAppearance {
  primary = 'primary',
  secondary = 'secondary',
}

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type: keyof typeof ButtonAppearance;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  type,
  style: touchableStyles,
  ...touchableProps
}) => {
  if (type === 'secondary') {
    return (
      <TouchableOpacity
        style={[styles.wrapperSecondary, styles.button, touchableStyles]}
        {...touchableProps}>
        <Text style={styles.textSecondary}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.wrapperPrimary, styles.button, touchableStyles]}
      {...touchableProps}>
      <Text style={styles.textPrimary}>{title}</Text>
    </TouchableOpacity>
  );
};
