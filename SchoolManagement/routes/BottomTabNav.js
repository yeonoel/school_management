import { createBottomTabNavigator } from 'react-navigation-tabs';
import StackNav from './HomeStackNav';
import Selected from '../component/selected';

const RouteConfigs = {
    Home : {
        screen: StackNav,
        navigationOptions: {
            drawerLabel: 'Ajouter parcour'
        }
    },
    ListStudents: {
        screen: Selected,
        navigationOptions: {
            drawerLabel: 'Etudiants'
        }
    }
}
const BottomTabNav = createBottomTabNavigator(RouteConfigs);

export default BottomTabNav;

// TabNavigatorConfig