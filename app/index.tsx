import { ThemedView } from '@/components/ThemedView';
import { LoginCard } from '@/components/ui';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

// Différents arrière-plans stylés pour la démo
const backgrounds = [
    {
        id: 0,
        name: 'Midnight',
        colors: ['#000000', '#000000'] as const,
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 }
    },
  {
    id: 0,
    name: 'Ocean',
    colors: ['#667eea', '#764ba2'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
  },
  {
    id: 1,
    name: 'Sunset',
    colors: ['#c73650', '#8b5a5a', '#4a4a4a'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
  },
  {
    id: 2,
    name: 'Forest',
    colors: ['#134e5e', '#71b280'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
  },
  {
    id: 3,
    name: 'Aurora',
    colors: ['#4a90a4', '#83a4d4', '#b6b3d6'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
  },
  {
    id: 4,
    name: 'Space',
    colors: ['#2c3e50', '#4ca1af'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
  },
  {
    id: 5,
    name: 'Fire',
    colors: ['#fc4a1a', '#f7b733'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
  }
];

export default function LoginPage() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);

  const panGestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      scale.value = withSpring(0.98);
    },
    onActive: (event) => {
      translateX.value = event.translationX * 0.5;
    },
    onEnd: (event) => {
      scale.value = withSpring(1);
      
      if (Math.abs(event.translationX) > 100) {
        if (event.translationX > 0 && currentBgIndex > 0) {
          // Swipe right - background précédent
          runOnJS(setCurrentBgIndex)(currentBgIndex - 1);
        } else if (event.translationX < 0 && currentBgIndex < backgrounds.length - 1) {
          // Swipe left - background suivant
          runOnJS(setCurrentBgIndex)(currentBgIndex + 1);
        }
      }
      
      translateX.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { scale: scale.value }
      ],
    };
  });

  const currentBackground = backgrounds[currentBgIndex];

  return (
    <GestureHandlerRootView style={styles.container}>
      <LinearGradient
        colors={currentBackground.colors}
        start={currentBackground.start}
        end={currentBackground.end}
        style={styles.backgroundGradient}
      >
        <SafeAreaView style={styles.safeArea}>
          
          {/* Indicateur de background */}
          <View style={styles.backgroundIndicator}>
            <Text style={styles.backgroundName}>{currentBackground.name}</Text>
            <View style={styles.dotsContainer}>
              {backgrounds.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    index === currentBgIndex && styles.activeDot
                  ]}
                />
              ))}
            </View>
          </View>

          <PanGestureHandler onGestureEvent={panGestureHandler}>
            <Animated.View style={[styles.gestureContainer, animatedStyle]}>
              <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Login Section */}
                <ThemedView style={styles.heroSection}>
                  <LoginCard />
                </ThemedView>
              </ScrollView>
            </Animated.View>
          </PanGestureHandler>

          {/* Instructions de swipe */}
          <View style={styles.swipeInstructions}>
            <Text style={styles.instructionText}>
              ← Swipe to change background →
            </Text>
          </View>

        </SafeAreaView>
      </LinearGradient>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  backgroundGradient: {
    flex: 1,

  },
  safeArea: {
    flex: 1,
  },
  gestureContainer: {
    flex: 1,

  },
  scrollView: {
    flex: 1,

    // padding: 20,
  },
  heroSection: {

    height: height * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  backgroundIndicator: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  backgroundName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  swipeInstructions: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  instructionText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
