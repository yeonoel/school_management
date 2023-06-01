
import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { Text, Avatar, Caption, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'; 
import colors from '../colors';



const CostomDrawerContent = (props) => {
    const [isDark, setIsDark] = useState(false);

    const toggleDarckTheme = () => {
        setIsDark(!isDark);
    }
    
    return (
        <View style={styles.container}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.drawerCotentContainer}>
                        <View style={styles.userInfoContainer}>
                            <View style={styles.userInfoDetails}>
                                <Avatar.Image 
                                    source={require('../assets/avatar.png')}
                                    size={90}
                                />
                                <View style={styles.name}>
                                    <Caption style={styles.captionTitre}>@SchoolManagement</Caption>
                                </View>
                            </View>
                        </View>
                        <View style={styles.students}>
                            <View>
                                <Caption style={styles.caption}>Gestion des Etudiants</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            label='Liste'
                            icon={(color, size) => <MaterialIcons name="people" size={24} color={color} />}
                            onPress={() => props.navigation.navigate('ListStudents')}
                        />
                        <DrawerItem 
                            label='Ajouter'
                            icon={(color, size) => <MaterialIcons name="person-add" size={24} color={color} />}
                            onPress={() => props.navigation.navigate('AddStudents')}
                        />
                    </Drawer.Section>
                    <View style={styles.students}>
                            <View>
                                <Caption style={styles.caption}>Gestion des Parcours</Caption>
                            </View>
                        </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            label='Liste'
                            icon={(color, size) => <MaterialIcons name="list-alt" size={24} color={color} />}
                            onPress={() => props.navigation.navigate('ListPathways')}
                        />
                        <DrawerItem 
                            label='Ajouter'
                            icon={(color, size) => <MaterialIcons name="add" size={24} color={color} />}
                            onPress={() => props.navigation.navigate('AddPathway')}
                        />
                    </Drawer.Section>
                    <View style={styles.students}>
                            <View>
                                <Caption style={styles.caption}>Reglage</Caption>
                            </View>
                        </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <TouchableRipple
                            onPress={() => toggleDarckTheme()}
                        >
                            
                            <View style={styles.settings}>
                                <Text> Mode sombre</Text>
                                <View pointerEvents='none'>
                                    <Switch value={isDark} />
                                </View>
                            </View>
                            
                            
                        </TouchableRipple>
                    </Drawer.Section>
                    
                    
                </DrawerContentScrollView> 
                <Drawer.Section style={styles.logOutSection}>
                    <DrawerItem 
                                label='Déconnection'
                                icon={(color, size) => <MaterialIcons name="logout" size={24} color={color} />}
                                onPress={() => props.navigation.navigate('SignIn')}
                            />
                </Drawer.Section>
        </View>
    )
}
const styles = StyleSheet.create({ 

    container: {flex: 1},
    drawerCotentContainer: { flex: 1},
    userInfoContainer:{ paddingLeft: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 10 },
    userInfoDetails: { marginTop: 10 },
    name: { marginTop: 10,    justifyContent: 'center' },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 3,
    },
    captionTitre: {fontSize: 15, fontWeight: 'bold', color: 'black' },
    caption: {fontSize: 15},

    students: {
        marginTop: 5,
        paddingLeft: 20
    },
    drawerSection: {
        marginTop: 5,
        paddingHorizontal: 20,
              
    },
    settings: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    logOutSection: {
        marginBottom: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
        backgroundColor: colors.cleangreen
    }
})


export default CostomDrawerContent;












