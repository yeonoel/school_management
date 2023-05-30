
import React from 'react';
import {StyleSheet, View, Text, Button, Pressable} from 'react-native';
import colors from '../../colors'
import MaterialIconHearder from '../../component/MaterialIconHearder';

// import {
//     HeaderButtons,
//     HeaderButton,
//     Item,
//     HiddenItem,
//     OverflowMenu,
//   } from 'react-navigation-header-buttons';


const Home = ({navigation}) => {
    
    const HhandleListStudent = () => {
        navigation.navigate('ListStudents');
    }

    const handleAddStudent = () => {
        navigation.navigate('AddStudents');
    }

    const handleAddPathway = () => {
        navigation.navigate('AddPathway')
    }

    const handleListPathways = () => {
        navigation.navigate('ListPathways')
    }

    const handleSingIn = () => {
        navigation.navigate('SingIn');
    }

    const handleSingUp = () => {
        navigation.navigate('SingUp');
    }
 return (
    <View style={styles.container}>
        <Text style={styles.text}> Home</Text>
        <View style={styles.btn}>
            
            <Pressable
                style={({pressed}) => ({ backgroundColor: pressed ? 'red': colors.lightyellow})}
                onPress={HhandleListStudent}

            >
                <Text >Lister les etudiants</Text>
            </Pressable>

            </View>
        <View style={styles.btn}>
            
        <Pressable
                style={({pressed}) => ({ backgroundColor: pressed ? 'red': ''})}
                onPress={handleAddStudent}

            >
                <Text >Ajouter un etudiant</Text>
            </Pressable>

            
        </View>

        <View style={styles.btn}>
            
            <Pressable
                style={({pressed}) => ({ backgroundColor: pressed ? 'red': ''})}
                onPress={handleListPathways}

            >
                <Text >Voir les parcours</Text>
            </Pressable>

            
        </View>

        <View style={styles.btn}>
        
        
        <Pressable
                style={({pressed}) => ({ backgroundColor: pressed ? 'red': ''})}
                onPress={handleAddPathway}

        >
                <Text>Ajouter un parcour</Text>
        </Pressable>
        </View>
        <View style={styles.btn}>
        <Pressable
                style={({pressed}) => ({ backgroundColor: pressed ? 'red': ''})}
                onPress={handleSingIn}

        >
                <Text>Connexion</Text>
        </Pressable>

        </View>
        <View style={styles.btn}>            
            <Pressable
                    style={({pressed}) => ({ backgroundColor: pressed ? 'red': ''})}
                    onPress={handleSingUp}
            >
                    <Text>Inscription</Text>
            </Pressable>

        </View>
    </View>

)
}
// Home.navigationOptions = ({navigation}) => {
    
//     return {        
//     headerTitle: 'Accueil',
//     headerLeft: () => (
//         <HeaderButtons
//            HeaderButtonComponent={MaterialIconHearder}
//         >
//            <Item 
//                 title='menu'
//                 iconName='menu'
//                 onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer())}}
//             />
//         </HeaderButtons>
//     )
//     }
// }

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












