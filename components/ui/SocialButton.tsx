import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface SocialButtonProps extends TouchableOpacityProps {
  icon: React.ReactNode;
  provider: string;
}

export function SocialButton({ 
  icon, 
  provider,
  style,
  ...props 
}: SocialButtonProps) {
  return (
    <TouchableOpacity style={style} {...props}>
      <ThemedView style={styles.socialButton}>
        <ThemedView style={styles.socialIconContainer}>{icon}</ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    minWidth: 90,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  socialIconContainer: {
    backgroundColor: 'transparent',
  },
}); 