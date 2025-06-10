import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
    Easing,
    interpolate,
    useAnimatedProps,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';
import { GlassButton } from './GlassButton';
import { GlassInput } from './GlassInput';
import { SocialButton } from './SocialButton';

const { width } = Dimensions.get('window');

// Créer des composants animés
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Valeur animée principale pour contrôler toutes les animations
  const animationProgress = useSharedValue(0);
  
  // Animation des props du BlurView
  const animatedBlurProps = useAnimatedProps(() => {
    const intensity = interpolate(animationProgress.value, [0, 1], [0, 15]);
    return {
      intensity: intensity,
    };
  });
  
  // Animation du style du gradient et de la forme
  const animatedGradientStyle = useAnimatedStyle(() => {
    const scale = interpolate(animationProgress.value, [0, 1], [0.8, 1]);
    const borderRadius = interpolate(animationProgress.value, [0, 1], [8, 24]);
    const opacity = interpolate(animationProgress.value, [0, 1], [0.3, 1]);
    
    return {
      transform: [{ scale }],
      borderRadius,
      opacity,
    };
  });
  
  // Animation du contenu (fade in légèrement retardé)
  const animatedContentStyle = useAnimatedStyle(() => {
    const opacity = interpolate(animationProgress.value, [0, 0.6, 1], [0, 0, 1]);
    const translateY = interpolate(animationProgress.value, [0, 1], [20, 0]);
    
    return {
      opacity,
      transform: [{ translateY }],
    };
  });
  
  useEffect(() => {
    // Lancer l'animation d'entrée complète
    animationProgress.value = withTiming(1, {
      duration: 1500,
      easing: Easing.out(Easing.cubic),
    });
  }, []);

  return (
    <AnimatedLinearGradient
      colors={[
        'rgba(255, 255, 255, 0.25)', 
        'rgba(255, 255, 255, 0.1)', 
        'rgba(255, 255, 255, 0.05)', 
        'rgba(255, 255, 255, 0.15)'
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradientCard, animatedGradientStyle]}
    >
      <AnimatedBlurView 
        animatedProps={animatedBlurProps}
        tint="light" 
        style={styles.loginCard}
      >
        <Animated.View style={animatedContentStyle}>
          {/* Login Header */}
          <ThemedView style={styles.loginHeader}>
            <Ionicons name="shield-checkmark" size={32} color="rgba(255, 255, 255, 0.6)" style={styles.logoIcon} />
            <ThemedText type="title" style={styles.loginTitle}>
              Login
            </ThemedText>
            <ThemedText style={styles.loginSubtitle}>
              Access your secure space
            </ThemedText>
          </ThemedView>

          {/* Login Form */}
          <ThemedView style={styles.formContainer}>
            
            {/* Email Field */}
            <GlassInput 
              placeholder="Email address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              icon={<Ionicons name="mail-outline" size={16} color="rgba(255, 255, 255, 0.5)" />}
            />

            {/* Password Field */}
            <GlassInput 
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              icon={<Ionicons name="lock-closed-outline" size={16} color="rgba(255, 255, 255, 0.5)" />}
            />

            {/* Login Options */}
            <ThemedView style={styles.optionsRow}>
              <TouchableOpacity>
                <ThemedText style={styles.forgotPassword}>Forgot password?</ThemedText>
              </TouchableOpacity>
            </ThemedView>

            {/* Main Login Button */}
            <GlassButton 
              title="Sign in"
              onPress={() => {}}
              primary
            />

            {/* Separator */}
            <ThemedView style={styles.separator}>
              <ThemedView style={styles.separatorLine} />
              <ThemedText style={styles.separatorText}>or</ThemedText>
              <ThemedView style={styles.separatorLine} />
            </ThemedView>

            {/* Social Buttons */}
           <ThemedView style={styles.socialButtons}>
              <SocialButton icon={<AntDesign name="apple1" size={24} color="rgba(255, 255, 255, 0.6)" />} provider="Apple" />
              <SocialButton icon={<AntDesign name="google" size={24} color="rgba(255, 255, 255, 0.6)" />} provider="Google" />
              <SocialButton icon={<Ionicons name="logo-linkedin" size={24} color="rgba(255, 255, 255, 0.6)" />} provider="Linkedin" />
            </ThemedView> 

            {/* Signup Link */}
            <TouchableOpacity style={styles.signupLink}>
              <ThemedText style={styles.signupText}>
                Don&apos;t have an account? <ThemedText style={styles.signupLinkText}>Sign up</ThemedText>
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </Animated.View>
      </AnimatedBlurView>
    </AnimatedLinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientCard: {
    width: width * 0.9,
    borderRadius: 24,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  loginCard: {
    width: '100%',
    paddingVertical: 35,
    paddingHorizontal: 25,
    borderRadius: 24,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  loginHeader: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'transparent',
  },
  logoIcon: {
    marginBottom: 12,
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  loginSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: 'transparent',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 24,
    backgroundColor: 'transparent',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  separatorText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
    backgroundColor: 'transparent',
  },
  signupLink: {
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  signupLinkText: {
    color: '#fff',
    fontWeight: '600',
  },
}); 