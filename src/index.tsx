import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './global/styles/theme';
import { AuthProvider, useAuth } from './hooks/auth';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './routes';

export default function App() {

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const { userStorageLoading } = useAuth()

  if (!fontsLoaded || userStorageLoading) {
    return null
  }
  SplashScreen.hideAsync();


  return (
      <ThemeProvider theme={theme} >
        <StatusBar style='light' />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
  );
}

