import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


import ListPathways from '../pages/Pathways/ListPathways';
import ListStudentStackNav from './ListStudentStackNav';
import colors from '../colors';
import BottomTabNav from './BottomTabNav';

const RouteConfigs = {
    Home: {
        screen: BottomTabNav
    },
    ListStudents: {
        screen: ListStudentStackNav,
        navigationOptions: {
            drawerLabel: 'Etudiants'
        }
    },

    ListPathways: {
        screen: ListPathways,
        navigationOptions: {
            drawerLabel: 'Parcours'
        }
    }
}

const DrawerNavigatorConfig = {
    hideStatusBar: true,
    drawerBackgroundColor: colors.lightyellow,
    drawerWidth: '70%',
    drawerType: 'slide',
    contentOptions: {
        labelStyle: {
            fontSize: 19
        },
        activeBackgroundColor: '#fff',
        activeTintColor: '#0A0A0A',
        inactiveTintColor: '#939391'
    }
}
const MainNavigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default createAppContainer(MainNavigator)