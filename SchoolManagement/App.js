import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeStackScreen from './routes/HomeStackNav';
import Drawer from './routes/DrawerNav';
import CostomDrawerContent from './pages/CostomDrawerContent';
import SignIn from './pages/SignIn';

export default function App() {
 
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={ props => <CostomDrawerContent {...props} />}
        >
            <Drawer.Screen name='Home' component={HomeStackScreen} options={{ title: 'Accueil' }} />
            

         
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
    

