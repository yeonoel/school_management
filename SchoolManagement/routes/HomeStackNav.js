import { createStackNavigator } from 'react-navigation-stack';

import Home from '../pages/Home';
import React from 'react';
import AddStudents from '../pages/Students/AddStudents';
import ListStudents from '../pages/Students/ListStudents';
import EditStudent from '../pages/Students/EditStudent';
import DeleteStudent from '../pages/Students/DeleteStudent';
import OneStudent from '../pages/Students/OneStudent';

import ListPathways from '../pages/Pathways/ListPathways';
import AddPathway from '../pages/Pathways/AddPathway'
import EditPathway from '../pages/Pathways/EditPathway'
import DeletePathway from '../pages/Pathways/DeletePathway'
import OnePathway from '../pages/Pathways/OnePathway';



const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            
        }
    },

    ListStudents: {
        screen: ListStudents,
        navigationOptions: {
            title: 'Liste des étudiant(e)s'
        }
    },
    AddStudents: {
        screen: AddStudents,
        navigationOptions: {
            title: 'Ajouter un(e) étudiants',
        }
    },
    OneStudent: {
        screen: OneStudent,
        navigationOptions: {
            title: 'Profile etudiant(e)',
            
        },
        
    },
    EditStudent: {
        screen: EditStudent,
        navigationOptions: {
            title: 'Mise à jour d\'un(e) étudiant(e)'
        }
    },
    DeleteStudent: {
        screen: DeleteStudent,
        navigationOptions: {
            title: 'Supprimer un(e) étudiant(e)s'
        }
    },


    ListPathways: {
        screen: ListPathways,
        navigationOptions: {
            title: 'Liste des parcours'
        }
    },
    AddPathway : {
        screen: AddPathway,
        navigationOptions: {
            title: 'Ajouter un parcour'
        }
    },
    OnePathway: {
        screen: OnePathway,
        navigationOptions: {
            title: 'Profile parcour',
            
        }
    },
    EditPathway : {
        screen: EditPathway,
        navigationOptions: {
            title: 'Mettre à jour un parcour'
        }
    },
    DeletePathway: {
        screen: DeletePathway,
        navigationOptions: {
            title: 'Supression d\'un parcour'
        }
    }
}

const StackNav = createStackNavigator(screens);

export default StackNav;