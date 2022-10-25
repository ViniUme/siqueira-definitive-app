import { Text, View } from 'react-native';
import { useFonts, Inter_900Black, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'Inter_900Black' }}>
        Inter Black
      </Text>
      <Text style={{ fontFamily: 'Inter_500Medium' }}>
        Inter Medium
      </Text>
    </View>
  );
};