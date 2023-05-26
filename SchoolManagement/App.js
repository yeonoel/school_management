import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import MainNavigator from './routes/DrawerNav'

import {
  useFonts,
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_400Regular,
  InriaSans_400Regular_Italic,
  InriaSans_700Bold,
  InriaSans_700Bold_Italic,
} from '@expo-google-fonts/inria-sans';


export default function App() {
  let [fontsLoding] = useFonts({
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
  })
  if (!fontsLoding) {
    return <AppLoading />
  } else {
    return <MainNavigator />
  }
    
}
