import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View } from 'react-native';
import { useEffect, useCallback } from 'react';

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'Inter-Medium': require('./assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter/Inter-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf')
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View 
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onLayout={onLayoutRootView}>
      <Text>Platform Default</Text>
      <Text style={{ fontFamily: 'Inter-Medium' }}>Inter Black</Text>
    </View>
  );
}
