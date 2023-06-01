
import React, { useState, useEffect, useLayoutEffect } from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
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


const OnePathway = ({navigation, route}) => {
    const [data, setData] = useState([]);
    const [isLoding, setIsLoading] = useState(false);
    const myData = route.params;
    const id = myData._id;
    const niveau = myData.niveau;

    
    useLayoutEffect(() => {
        const url = `http://10.0.2.2:8080/api/pathways/${id}`

        const fetchDataToDelete = () => {
            fetch(url, {
                method: 'DELETE'
                })
                .then(response => {
                if (response.status === 200) {
                    console.log('Element supprimé avec succès');
                    alert(` Le parcour ${myData.niveau}a été supprimé avec success`);
                    navigation.navigate('Home');
                    
                } else {
                    console.log('Une erreur s\'est produite lors de la suppression de l\'élément');
                }
                })
                .catch(error => {
                console.log('Une erreur s\'est produite lors de la suppression de l\'élément : ' + error.message);
                });
        }


        navigation.setOptions({
            headerTitle: `Details ${niveau}`,
            headerRight: () => (
            <HeaderButtons
                HeaderButtonComponent={MaterialIconHearder}
            >
                <Item 
                    title='edit'
                    iconName='edit'
                    onPress={() => {
                        
                            navigation.navigate('EditPathway', {
                            id: id,
                            niveau: niveau,
                            speciality: myData.speciality,
                            salle: myData.salle,
                            comment: myData.comment
                        
                        })                    
                    }
                
                    
                }
                />
                <Item 
                    title='delete'
                    iconName='delete'
                    onPress={() =>
                        Alert.alert('Attention!', 'Vous allez supprimer definitivement un parcour de la Base de donnée. Etes vous sure de continuer?', [
                        {
                          text: 'Annuler',
                          onPress: () => {console.log('Cancel Pressed')},
                          style: 'cancel',
                        },
                        {text: 'Oui', onPress: () => fetchDataToDelete()},
                      ]) 
                    }
                   
                />
            </HeaderButtons>
            )
        
        });


    }, [navigation])
    
    

    useEffect(() => {
        setIsLoading(true);
        fetchData();
        return () => {
    
        }
      }, []);
    
    
   function fetchData() {
    console.log('eeeeeeee')
    const url = `http://10.0.2.2:8080/api/pathways/${id}`
    console.log('ggggggggggg')

    fetch(url)
    .then((response) => response.json())
    .then((resJson) => {
        console.log(resJson)
        setData(resJson)
        console.log(data)

    })
    .catch(console.error())
    .finally(() => setIsLoading(false));

  }

    
    
  
 return (
    <View style={styles.container}>
      {
        isLoding ? <ActivityIndicator /> :
        (
            <ScrollView>
            <View style={styles.contPathwayItem}>
                <View style={styles.parcourInfos}>
                    <Text style={styles.parcourInfosTitle} > Détails parcour {data.niveau}</Text>
                    <View style={styles.pathwayItem}>
                    <MaterialIcons name="cast-for-education" size={24} color="black" style={styles.icondDetails} />
                        <View style={styles.pathwayItemText}>
                            <Text style={styles.pathwayItemText1}>Niveau</Text>
                            <Text style={styles.pathwayItemText2}> {data.niveau}</Text>
                        </View>
                    </View>
                    <View style={styles.pathwayItem}>
                    <MaterialIcons name="confirmation-number" size={24} color="black" style={styles.icondDetails} />
                    <View style={styles.pathwayItemText}>
                            <Text style={styles.pathwayItemText1}>Salle</Text>
                            <Text style={styles.pathwayItemText2}> {data.salle}</Text>
                        </View>
                    </View>
                    <View style={styles.pathwayItem}>
                        <MaterialIcons name="perm-data-setting" size={24} color="black" style={styles.icondDetails} />
                        <View style={styles.pathwayItemText}>
                            <Text style={styles.pathwayItemText1}>Specialité</Text>
                            <Text style={styles.pathwayItemText2}> {data.speciality}</Text>
                        </View>
                    </View>
                    <View style={styles.pathwayItem}>
                        <Foundation name="comment" size={24} color="black" style={styles.icondDetails}  />
                        <View style={styles.pathwayItemText}>
                            <Text style={styles.pathwayItemText1}>Commentaire</Text>
                            <Text style={styles.pathwayItemText2}> {data.comment}</Text>
                        </View>
                    </View>

                </View>



                <View style={styles.parcourInfos}>
                    <Text style={styles.parcourInfosTitle}> Tous les etudiants de {data.niveau} </Text>
                   
                </View>
            </View>
      </ScrollView>
        )
      }
    </View>
 )   
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.test,
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    contPathwayItem: {
        justifyContent: 'center',
        padding: 5
    },
    pathwayItem : {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 90, 
        borderBottomWidth: 0.8,
        borderBottomColor: '#ccc'       
    },
    parcourInfos: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20
    },
    parcourInfosTitle: {
        marginVertical: 20,
        paddingVertical: 20, 

        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 0.5,
        borderBottomEndRadius: '#ccc'
    },
    icondDetails: {
         paddingHorizontal: 20,
          height: 60, width: 60, 
          paddingVertical: 20, 
          borderRadius: 50, 
          color: '#000', 
          backgroundColor: colors.cleangreen
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