import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base'
import { Loader } from './src/components/Loader';
import { THEME } from './src/styles/theme';
import Routes from './src/routes';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
      <NativeBaseProvider theme={THEME}>
        <StatusBar 
          barStyle='light-content' 
          backgroundColor="transparent" 
          translucent 
        />
        {fontsLoaded ? <Routes /> : <Loader />}
      </NativeBaseProvider> 
  );
}
