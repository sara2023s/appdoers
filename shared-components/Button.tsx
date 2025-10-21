import React from 'react';
import { Platform, TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle | TextStyle;
}

export const Button: React.FC<ButtonProps> = ({ onPress, title, style }) => {
  if (Platform.OS === 'web') {
    return (
      <button
        onClick={onPress}
        style={{
          padding: 10,
          backgroundColor: '#007AFF',
          borderRadius: 5,
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          ...style,
        }}
      >
        {title}
      </button>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
}); 