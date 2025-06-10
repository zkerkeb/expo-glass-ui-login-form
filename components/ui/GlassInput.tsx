import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface GlassInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  icon?: React.ReactNode;
}

export function GlassInput({ 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry, 
  keyboardType, 
  autoCapitalize, 
  icon,
  ...props 
}: GlassInputProps) {
  return (
    <ThemedView style={styles.inputContainer}>
      {icon && <ThemedView style={styles.inputIconContainer}>{icon}</ThemedView>}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        {...props}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  inputIconContainer: {
    marginRight: 12,
    backgroundColor: 'transparent',
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
}); 