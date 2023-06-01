import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; 

import Home from '../pages/Home';
import React from 'react';
import colors from '../colors';

import AddStudents from '../pages/Students/AddStudents';
import ListStudents from '../pages/Students/ListStudents';
import EditStudent from '../pages/Students/EditStudent';
import OneStudent from '../pages/Students/OneStudent';

import ListPathways from '../pages/Pathways/ListPathways';
import AddPathway from '../pages/Pathways/AddPathway'
import EditPathway from '../pages/Pathways/EditPathway'
import OnePathway from '../pages/Pathways/OnePathway';
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'



const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return (
        <HomeStack.Navigator
        initialRouteName='SignIn'
            screenOptions={{                
                headerStyle: {
                    backgroundColor: colors.cleangreen
                },
                headerLeft: () => (
                    <MaterialIcons 
                    name="menu"
                    size={24}
                    color="black"
                    style={{ marginLeft: 10}}
                    onPress={() => navigation.openDrawer()} />
                )

            }}
        >
            <HomeStack.Screen name='Home' component={Home} options={{ title:"Accueil"}}/>
            <HomeStack.Screen name='ListStudents' component={ListStudents} options={{ title:"Liste des etudiants"}}/>
            <HomeStack.Screen name='AddStudents' component={AddStudents} options={{ title:"Ajouter un(e) etudiant(e)"}}/>
            <HomeStack.Screen name='OneStudent' component={OneStudent} options={{ title:"Profile etudiant"}}/>
            <HomeStack.Screen name='EditStudent' component={EditStudent} options={{ title:"Editer un etudiant "}}/> 

            <HomeStack.Screen name='ListPathways' component={ListPathways} options={{ title:"Liste des parcours"}}/>   
            <HomeStack.Screen name='AddPathway' component={AddPathway} options={{ title:"Ajouter un parcour"}}/>
            <HomeStack.Screen name='OnePathway' component={OnePathway} options={{ title:"Details s'un parcour"}}/>
            <HomeStack.Screen name='EditPathway' component={EditPathway} options={{ title:"Editer un parcour"}}/>  

            <HomeStack.Screen name='SignIn' component={SignIn} options={{ header : () => null}}/>          
            <HomeStack.Screen name='SignUp' component={SignUp} options={{ header : () => null}}/>          

        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;