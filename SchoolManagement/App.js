import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Easing } from 'react-native';


import AppLoading from 'expo-app-loading';
import Home from './pages/Home';
import SingUp from './pages/user/inscription';
import SingIn from './pages/SingIn';

// All routes fro student
import ListStudents from './pages/Students/ListStudents';
import OneStudent from './pages/Students/OneStudent';
import EditStudent from './pages/Students/EditStudent';
import AddStudents from './pages/Students/AddStudents';
// All routes for pathway

import ListPathways from './pages/Pathways/ListPathways';
import AddPathway from './pages/Pathways/AddPathway';
import OnePathway from './pages/Pathways/OnePathway';
import EditPathway from './pages/Pathways/EditPathway'

import {
  useFonts,
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_400Regular,
  InriaSans_400Regular_Italic,
  InriaSans_700Bold,
  InriaSans_700Bold_Italic,
} from '@expo-google-fonts/inria-sans';

const Stack = createStackNavigator();

const OpenConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 35,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 900,
    easing: Easing.ease,
  },
};

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
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={
            {
              headerStyle: {
                backgroundColor: '#FFD700'
              },
              headerTintColor: '#000',
              gestureEnabled: true,
              gestureDirection: 'vertical-inverted',
              // transitionSpec: {
              //   open: OpenConfig,
              //   close: closeConfig
              // },
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }
          }
        >
          <Stack.Screen name='Home' component={Home} options={{ title: 'Accueil', header: () => null}}  />

          <Stack.Screen name='SingUp' component={SingUp} options={{ header: () => null}} />
          <Stack.Screen name='SingIn' component={SingIn} options={{ header: () => null}} />

          <Stack.Screen name='ListStudents' component={ListStudents} options={{ title: 'Liste des etudiants'}} />
          <Stack.Screen name='OneStudent' component={OneStudent} options={({ route }) => ({title: `Profile de ${route.params.nom}` })} />
          <Stack.Screen name='EditStudent' component={EditStudent}  />
          <Stack.Screen name='AddStudents' component={AddStudents} options={{title: 'Ajouter un(e) etudiant(e)'}}  />

          <Stack.Screen name='AddPathway' component={AddPathway} options={{title: 'Ajouter un parcours'}} />
          <Stack.Screen name='ListPathways' component={ListPathways} options={{title: 'Liste des parcours'}}  />
          <Stack.Screen name='OnePathway' component={OnePathway}  />
          <Stack.Screen name='EditPathway' component={EditPathway}   />



        </Stack.Navigator>
      </NavigationContainer>
    )
  }
    
}
