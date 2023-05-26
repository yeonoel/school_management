
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import colors from '../../colors'
import MaterialIconHearder from '../../component/MaterialIconHearder';
import { DrawerActions } from 'react-navigation-drawer';

import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
  } from 'react-navigation-header-buttons';


const Home = ({navigation}) => {
    
    const HhandlePress = () => {
        navigation.navigate('ListStudents');
    }

    const HhandlePressadd = () => {
        navigation.navigate('AddStudents');
    }

    const handleAddPathway = () => {
        navigation.navigate('AddPathway')
    }

    const handleListPathways = () => {
        navigation.navigate('ListPathways')
    }
 return (
    <View style={styles.container}>
        <Text style={styles.text}> Home</Text>
        <View style={styles.btn}>
            <Button
                title='Liste des etudiants'
                onPress={HhandlePress}
            />

            </View>
        <View style={styles.btn}>
            

            <Button
                
                title='Ajouter un student'
                onPress={HhandlePressadd}
            />
        </View>

        <View style={styles.btn}>
            

            <Button
                
                title='Voir les parcours'
                onPress={handleListPathways}
            />
        </View>

        <View style={styles.btn}>
            

            <Button
                
                title='Ajouter un parcour'
                onPress={handleAddPathway}
            />
        </View>
    </View>

)
}
Home.navigationOptions = ({navigation}) => {
    
    return {        
    headerTitle: 'Accueil',
    headerLeft: () => (
        <HeaderButtons
           HeaderButtonComponent={MaterialIconHearder}
        >
           <Item 
                title='menu'
                iconName='menu'
                onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer())}}
            />
        </HeaderButtons>
    )
    }
}

const styles = StyleSheet.create({ 
     container: {
         backgroundColor: colors.lightyellow,
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
     },
     text : {
         fontFamily: 'InriaSans_700Bold_Italic',
         fontSize: 25
     },
     btn: {
         marginTop: 20,
     }

})


export default Home;












