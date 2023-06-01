import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; 

import ListPathways from '../pages/Pathways/ListPathways';
import React from 'react';

const ListPathwaysStack = createStackNavigator();

const ListPathwaysStackScreen = ({navigation}) => {
    return (
        <ListPathwaysStack.Navigator>
            <ListPathwaysStack.Screen name='ListeStudents' component={ListStudents} options={{ 
                title:"Liste des Etudiants",
                headerLeft: () => (
                    <MaterialIcons 
                    name="menu"
                    size={24}
                    color="black"
                    onPress={() => navigation.openDrawer()} />
                )
                }}/>
        </ListPathwaysStack.Navigator>
    )
}
export default ListPathwaysStackScreen;