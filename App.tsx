import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if(!fontsLoaded) return null

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor="transparent" 
        translucent 
      />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
