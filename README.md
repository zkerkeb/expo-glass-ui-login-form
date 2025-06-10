# 🌟 Expo Glass UI

A beautiful collection of glass morphism UI components for React Native and Expo applications. Create stunning, modern interfaces with smooth animations and elegant glass effects.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey)
![Expo](https://img.shields.io/badge/Expo-SDK%2053-black.svg)

## ✨ Features

- 🎨 **Glass Morphism Design** - Modern glass effects with blur and transparency
- 🔄 **Smooth Animations** - Entrance animations and interactive gestures
- 📱 **Cross Platform** - Works on iOS, Android, and Web
- 🧩 **Modular Components** - Reusable and customizable UI elements
- 🎭 **Interactive Demo** - Swipe to change backgrounds and see glass effects
- 🔧 **TypeScript Support** - Fully typed components
- ⚡ **Performance Optimized** - Built with react-native-reanimated

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/expo-glass-ui.git
cd expo-glass-ui

# Install dependencies
npm install

# Start the development server
npx expo start
```

### Dependencies

This project uses the following key dependencies:

```json
{
  "@expo/vector-icons": "^14.1.0",
  "expo-blur": "~14.1.5",
  "expo-linear-gradient": "~14.1.5",
  "react-native-reanimated": "~3.17.4",
  "react-native-gesture-handler": "~2.24.0"
}
```

## 📱 Demo

The app includes an interactive demo with multiple backgrounds to showcase the glass effect:

- **Midnight** - Pure black for maximum contrast
- **Ocean** - Blue gradient ocean theme
- **Sunset** - Warm red/brown sunset colors
- **Forest** - Green nature gradient
- **Aurora** - Cool blue/purple aurora colors
- **Space** - Dark blue space theme
- **Fire** - Orange/red fire gradient

**Swipe left or right** to change backgrounds and see how the glass components adapt!

## 🧩 Components

### LoginCard

A complete login form with glass morphism design and entrance animations.

```tsx
import { LoginCard } from '@/components/ui';

function App() {
  return <LoginCard />;
}
```

**Features:**
- Animated blur entrance effect
- Email and password inputs with icons
- Primary action button
- Social login options
- Smooth scaling and translation animations

### GlassInput

Elegant input field with glass effect and icon support.

```tsx
import { GlassInput } from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';

<GlassInput
  placeholder="Email address"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  icon={<Ionicons name="mail-outline" size={16} color="rgba(255, 255, 255, 0.5)" />}
/>
```

**Props:**
- `placeholder` - Input placeholder text
- `value` - Current input value
- `onChangeText` - Value change handler
- `icon` - Optional React element icon
- All standard `TextInput` props

### GlassButton

Stylish button component with glass effect and primary variant.

```tsx
import { GlassButton } from '@/components/ui';

<GlassButton
  title="Sign in"
  onPress={handleSignIn}
  primary
/>
```

**Props:**
- `title` - Button text
- `onPress` - Press handler
- `primary` - Boolean for primary styling
- All standard `TouchableOpacity` props

### SocialButton

Compact social media login button with icon support.

```tsx
import { SocialButton } from '@/components/ui';
import { AntDesign } from '@expo/vector-icons';

<SocialButton
  icon={<AntDesign name="google" size={24} color="rgba(255, 255, 255, 0.6)" />}
  provider="Google"
  onPress={handleGoogleLogin}
/>
```

**Props:**
- `icon` - React element icon
- `provider` - Service name (for accessibility)
- All standard `TouchableOpacity` props

## 🎨 Customization

### Colors and Opacity

Glass components use RGBA colors for transparency effects:

```tsx
// Background with transparency
backgroundColor: 'rgba(255, 255, 255, 0.1)'

// Border with subtle opacity
borderColor: 'rgba(255, 255, 255, 0.3)'

// Text with reduced opacity
color: 'rgba(255, 255, 255, 0.8)'
```

### Blur Intensity

Adjust blur effects using the `BlurView` intensity prop:

```tsx
<BlurView intensity={15} tint="light">
  {/* Your content */}
</BlurView>
```

### Animations

Components use `react-native-reanimated` for smooth animations:

```tsx
import { withTiming, Easing } from 'react-native-reanimated';

// Smooth entrance animation
animationProgress.value = withTiming(1, {
  duration: 1500,
  easing: Easing.out(Easing.cubic),
});
```

## 🛠️ Development

### Project Structure

```
expo-glass-ui/
├── app/
│   └── index.tsx          # Main demo page
├── components/
│   ├── ui/
│   │   ├── GlassInput.tsx
│   │   ├── GlassButton.tsx
│   │   ├── SocialButton.tsx
│   │   ├── LoginCard.tsx
│   │   └── index.ts       # Component exports
│   ├── ThemedText.tsx
│   └── ThemedView.tsx
├── constants/
├── hooks/
└── assets/
```

### Adding New Components

1. Create your component in `components/ui/`
2. Export it in `components/ui/index.ts`
3. Follow the glass design patterns:
   - Use `rgba()` colors for transparency
   - Add `BlurView` for glass effect
   - Include smooth animations
   - Support TypeScript props

### Design Guidelines

- **Transparency**: Use opacity values between 0.05-0.25 for backgrounds
- **Borders**: Subtle borders with 0.15-0.4 opacity
- **Blur**: Intensity between 10-20 for optimal glass effect
- **Animations**: Use spring animations for natural feel
- **Typography**: Light font weights (300-500) work best

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines

- Follow the existing code style
- Add TypeScript types for new components
- Test on both iOS and Android
- Update documentation for new features
- Keep animations smooth and performant

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev)
- Powered by [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- Icons from [@expo/vector-icons](https://docs.expo.dev/guides/icons/)
- Glass morphism design inspiration from modern UI trends

## 📞 Support

- 📖 [Expo Documentation](https://docs.expo.dev/)
- 💬 [Discord Community](https://chat.expo.dev)
- 🐛 [Report Issues](https://github.com/yourusername/expo-glass-ui/issues)

---

Made with ❤️ and ☕ for the React Native community
