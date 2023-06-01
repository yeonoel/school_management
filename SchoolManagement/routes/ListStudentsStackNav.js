import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; 

import ListStudents from '../pages/Students/ListStudents';
import React from 'react';
import colors from '../colors';

const ListStudentsStack = createStackNavigator();

const ListStudentsStackScreen = ({navigation}) => {
    return (
        <ListStudentsStack.Navigator>
            <ListStudentsStack.Screen name='ListeStudents' component={ListStudents} options={{ 
                title:"Liste des Etudiants",
                headerStyle: {
                    backgroundColor: colors.cleangreen
                },
                headerLeft: () => (
                    <MaterialIcons 
                    name="menu"
                    size={24}
                    color="black"
                    onPress={() => navigation.openDrawer()} />
                )
                }}/>
        </ListStudentsStack.Navigator>
    )
}
export default ListStudentsStackScreen;