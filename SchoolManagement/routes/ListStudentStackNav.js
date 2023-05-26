import { createStackNavigator } from 'react-navigation-stack';

import ListStudents from '../pages/Students/ListStudents';


const screens = {
    ListStudents: {
        screen: ListStudents,
        navigationOptions: {
            title: 'Liste des étudiants'
        }
    }
}

const ListStudentStackNav = createStackNavigator(screens);

export default ListStudentStackNav;