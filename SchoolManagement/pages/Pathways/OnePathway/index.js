
import React, { useState } from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';
import colors from '../../../colors';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons' ; 
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

import MaterialIconHearder from '../../../component/MaterialIconHearder';
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
  } from 'react-navigation-header-buttons';
import { Alert } from 'react-native';

const OnePathway = ({navigation}) => {
    
    
  
 return (
    <View style={styles.container}>
      <ScrollView>
            <View style={styles.contPathwayItem}>
                <View style={styles.pathwayItem}>
                <FontAwesome name="level-up" size={24} color="black" style={{fontSize: 30, paddingHorizontal: 30, height: 80, width: 80, paddingVertical: 20, borderRadius: 50, color: 'red', backgroundColor: '#E9E9E9'}} />
                <View style={styles.pathwayItemText}>
                        <Text style={styles.pathwayItemText1}>Niveau</Text>
                        <Text style={styles.pathwayItemText2}> {navigation.getParam('niveau')}</Text>
                    </View>
                </View>
                <View style={styles.pathwayItem}>
                <MaterialIcons name="confirmation-number" size={24} color="black" style={{fontSize: 30, paddingHorizontal: 30, height: 80, width: 80, paddingVertical: 30, borderRadius: 50, color: 'red', backgroundColor: '#E9E9E9'}} />
                <View style={styles.pathwayItemText}>
                        <Text style={styles.pathwayItemText1}>Salle</Text>
                        <Text style={styles.pathwayItemText2}> {navigation.getParam('salle')}</Text>
                    </View>
                </View>
                <View style={styles.pathwayItem}>
                    <MaterialIcons name="perm-data-setting" size={24} color="black" style={{fontSize: 30, paddingHorizontal: 20, height: 80, width: 80, paddingVertical: 20, borderRadius: 50, color: 'red', backgroundColor: '#E9E9E9'}} />
                    <View style={styles.pathwayItemText}>
                        <Text style={styles.pathwayItemText1}>Specialité</Text>
                        <Text style={styles.pathwayItemText2}> {navigation.getParam('speciality')}</Text>
                    </View>
                </View>
                <View style={styles.pathwayItem}>
                <Foundation name="comment" size={24} color="black" style={{fontSize: 20, paddingHorizontal: 10, paddingVertical: 10, height: 50, width: 50, borderRadius: 50, color: 'red', backgroundColor: '#E9E9E9',}}  />
                    <View style={styles.pathwayItemText}>
                        <Text style={styles.pathwayItemText1}>Commentaire</Text>
                        <Text style={styles.pathwayItemText2}> {navigation.getParam('comment')}</Text>
                    </View>
                </View>
            </View>
      </ScrollView>
    </View>
 )   
}

OnePathway.navigationOptions = (navigateDate) => {
    const niveau = navigateDate.navigation.getParam('niveau');
    const id = navigateDate.navigation.getParam('_id');
    const url = `http://10.0.2.2:8080/api/pathways/${id}`
   
    const fetchData = () => {
        fetch(url, {
            method: 'DELETE'
            })
            .then(response => {
            if (response.status === 200) {
                console.log('Element supprimé avec succès');
                alert('Parcour supprimé avec success');
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
        headerTitle: `Details ${niveau}`,
        headerRight: () => (
        <HeaderButtons
            HeaderButtonComponent={MaterialIconHearder}
        >
            <Item 
                title='edit'
                iconName='edit'
                onPress={() => {
                    
                    navigateDate.navigation.navigate('EditPathway', {
                        id: id,
                        niveau: niveau,
                        speciality: navigateDate.navigation.getParam('speciality'),
                        salle: navigateDate.navigation.getParam('salle'),
                        comment: navigateDate.navigation.getParam('comment')
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
        backgroundColor: colors.lightyellow,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    contPathwayItem: {
        
        justifyContent: 'center',
    },
    pathwayItem : {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 100,
        marginVertical: 5,
        
    },
    pathwayItemText: {
        marginHorizontal: 50,
        paddingVertical: 10,
            
    },
    pathwayItemText2 : {
        fontWeight: '500',
        fontSize:   20,
        flexWrap: 'wrap',
        paddingVertical: 10,
    }

})

export default OnePathway;