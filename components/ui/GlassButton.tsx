import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface GlassButtonProps extends TouchableOpacityProps {
  title: string;
  primary?: boolean;
}

export function GlassButton({ 
  title, 
  onPress, 
  primary = false,
  style,
  ...props 
}: GlassButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={style} {...props}>
      <ThemedView style={[styles.glassButton, primary && styles.primaryButton]}>
        <ThemedText style={[styles.buttonText, primary && styles.primaryButtonText]}>
          {title}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  glassButton: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  primaryButtonText: {
    color: '#fff',
  },
}); 