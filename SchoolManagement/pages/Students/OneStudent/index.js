
import React, { useState } from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';
import colors from '../../../colors';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIconHearder from '../../../component/MaterialIconHearder';
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
  } from 'react-navigation-header-buttons';
import { Alert } from 'react-native';


const OneStudent = ({navigation}) => {
    
    function capitalizeFirstLetter(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      }
  
  
 return (
    <View style={styles.container}>
        <View style={styles.studentsbannier}>
            <Image
                style={styles.image}
                source={require('../../../assets/onestudentimg.png')}
            />
      
        </View>
        <View style={styles.studentName}>
                    <Text style={styles.studentNameText}> {capitalizeFirstLetter(navigation.getParam('nom'))} {capitalizeFirstLetter(navigation.getParam('prenom'))}  </Text>
        </View>
        <ScrollView>
            <View style={styles.studentText}>
               
                <View style={styles.constinainerstudentsecondItem}>
                    <View style={styles.studentsecondItem}>
                        <Text style={styles.studentsecondItemText1}> Matricule   </Text>
                        <Text style={styles.studentsecondItemText2}>{navigation.getParam('matricule')}</Text>
                    </View>
                    <View style={styles.studentsecondItem}>
                        <Text style={styles.studentsecondItemText1}> Niveau  </Text>
                        <Text style={styles.studentsecondItemText2}> {navigation.getParam('niveau')}</Text>
                    </View>
                    <View style={styles.studentsecondItem}>
                        <Text style={styles.studentsecondItemText1}> Moyen Mathematique </Text>
                        <Text style={styles.studentsecondItemText2}> {navigation.getParam('moyenMath')} </Text>
                    </View>
                    <View style={styles.studentsecondItem}>
                        <Text style={styles.studentsecondItemText1}> Moyen Informatique   </Text>
                        <Text style={styles.studentsecondItemText2}> {navigation.getParam('moyenInfo')} </Text>
                    </View>
                    
                </View>
            </View>
            
        </ScrollView>
            
        
    </View>
 )   
}

OneStudent.navigationOptions = (navigateDate) => {
    const nom = navigateDate.navigation.getParam('nom');
    const id = navigateDate.navigation.getParam('_id');
    const url = `http://10.0.2.2:8080/api/students/${id}`
   
    const fetchData = () => {
        fetch(url, {
            method: 'DELETE'
            })
            .then(response => {
            if (response.status === 200) {
                console.log('Element supprimé avec succès');
                alert(`${nom } a été supprimé avec success`);
                navigateDate.navigation.navigate('Home');
                
            } else {
                console.log('Une erreur s\'est produite lors de la suppression de l\'élément');
            }
            })
            .catch(error => {
            console.log('Une erreur s\'est produite lors de la suppression de l\'élément : ' + error.message);
            });
    }
    
    return {
        headerTitle: `Details sur ${nom}`,
    headerRight: () => (
        <HeaderButtons
            HeaderButtonComponent={MaterialIconHearder}
        >
            <Item 
                title='edit'
                iconName='edit'
                onPress={() => {
                    
                    navigateDate.navigation.navigate('EditStudent', {
                        id: id,
                        nom: nom,
                        prenom: navigateDate.navigation.getParam('prenom'),
                        matricule: navigateDate.navigation.getParam('matricule'),
                        niveau: navigateDate.navigation.getParam('niveau'),
                        moyenMath: navigateDate.navigation.getParam('moyenMath'),
                        moyenInfo: navigateDate.navigation.getParam('moyenInfo')
                    })
                }}
            />
            <Item 
                title='delete'
                iconName='delete'
                onPress={() =>
                    Alert.alert('Attention!', 'Vous allez supprimer definitivement un(e) etudiant(e) de la Base de donnée. Etes vous sure de continuer?', [
                    {
                      text: 'Annuler',
                      onPress: () => {console.log('Cancel Pressed')},
                      style: 'cancel',
                    },
                    {text: 'Oui', onPress: () => fetchData()},
                  ]) 
                }
               
            />
        </HeaderButtons>
    )
    }
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightyellow
    },
    studentsbannier: {
        height: 180,
        
    },
    image: {
        width: '100%',
        height: '100%',
        
    },
    studentText: {
        padding: 10
    },
    studentName: {
        marginVertical: 10,
        marginHorizontal: 10,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    studentNameText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    constinainerstudentsecondItem: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    studentsecondItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        height: 60,      
        backgroundColor: '#fff',
    },
    studentsecondItemText2: {
        width: '48%',
        flexWrap: 'nowrap',
        textAlign: 'center',
        fontSize: 15,
    },
    studentsecondItemText1: {
        width: '48%',
        flexWrap: 'nowrap',
        fontWeight: 'bold',
        fontSize: 15,
    },
    btns: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    btn1: {
        height: 40,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 50,
        backgroundColor: '#00703C', // 
        color: '#fff' // définit la couleur du texte en blanc
    },
    btn2: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#e64537', // définit la couleur de fond du bouton en vert
        color: '#fff' ,// définit la couleur du texte en blanc
        alignItems: 'center'
    },
    btn_text: {
        color: '#fff'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      optionsContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
      },
      optionText: {
        fontSize: 18,
        marginBottom: 10,
      },


})

export default OneStudent;