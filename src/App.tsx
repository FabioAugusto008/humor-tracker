import { useEffect } from 'react';
import { Inter_800ExtraBold, Inter_500Medium_Italic, Inter_400Regular, useFonts } from '@expo-google-fonts/inter' 
import * as SplashScreen from 'expo-splash-screen';
import { AppRoutes } from './Routes';



SplashScreen.preventAutoHideAsync();


export default function App() {

  const [loaded, err]= useFonts({
    extraBold: Inter_800ExtraBold,
    mediumItalic: Inter_500Medium_Italic, 
    regular: Inter_400Regular
  });

  useEffect(() => {
    if (loaded || err) {
      SplashScreen.hideAsync();
    }
  }, [loaded, err]);

  if (!loaded && err) {
    return null
  }


  return (
    <AppRoutes />
  );
}