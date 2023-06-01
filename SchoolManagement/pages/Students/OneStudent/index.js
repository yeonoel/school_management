
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {StyleSheet, ScrollView, View, Text, Image, ActivityIndicator, Alert} from 'react-native';
import colors from '../../../colors';
import MaterialIconHearder from '../../../component/MaterialIconHearder';
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
  } from 'react-navigation-header-buttons';


const OneStudent = ({navigation, route}) => {
    
    const [data, setData] = useState([]);
    const [isLoding, setIsLoading] = useState(false);
    

    function capitalizeFirstLetter(name) {
        if (name) {
            return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        }
        return '';
    }
  
  const myData = route.params;
  
  const id = myData._id
  console.log('ddddddd:' + myData._id)

  useLayoutEffect(() => {
    const id = myData._id

    const url = `http://10.0.2.2:8080/api/students/${id}`
   
    const fetchDataToDelete = () => {
        fetch(url, {
            method: 'DELETE'
            })
            .then(response => {
            if (response.status === 200) {
                console.log('Element supprimé avec succès');
                alert(`${myData.nom } a été supprimé avec success`);
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
        headerTitle: `Profile de  ${myData.nom}`,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={MaterialIconHearder}>
                <Item 
                    title='edit'
                    iconName='edit'
                    onPress={() => {
                        navigation.navigate('EditStudent', myData)
                    }}
                />
              <Item
                title="Supprimer"
                iconName="delete"
                onPress={() => {
                        Alert.alert('Attention!', 'Vous allez supprimer definitivement un(e) etudiant(e) de la Base de donnée. Etes vous sure de continuer?', [
                        {
                          text: 'Annuler',
                          onPress: () => {console.log('Cancel Pressed')},
                          style: 'cancel',
                        },
                        {text: 'Oui', onPress: () => 
                        fetchDataToDelete()
                        
                        },
                      ]) 
                    
                }}
              />
              
            </HeaderButtons>
            
          )
    })
  }, [navigation])

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    return () => {

    }
  }, []);



   function fetchData() {
    console.log('eeeeeeee')
    const url = `http://10.0.2.2:8080/api/students/${id}`
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
        <View style={styles.studentsbannier}>
            <Image
                style={styles.image}
                source={require('../../../assets/onestudentimg.png')}
            />
      
        </View>
        {
            isLoding ? <ActivityIndicator /> : (


                <View>
                    <View style={styles.studentName}>
                    <Text style={styles.studentNameText}> {capitalizeFirstLetter(data.nom) } {capitalizeFirstLetter(data.prenom)} </Text>
                </View>
        <ScrollView>
            <View style={styles.studentText}>
               
                <View style={styles.constinainerstudentsecondItem}>
                    <View style={styles.studentsecondItem}>
                        <Text style={styles.studentsecondItemText1}> Matricule:   </Text>
                        <Text style={styles.studentsecondItemText2}>{data.matricule}</Text>
                    </View>
                    <View style={styles.studentsecondItem}>
                        <Text style={styles.studentsecondItemText1}> Niveau:  </Text>
                        <Text style={styles.studentsecondItemText2}> {data.niveau}</Text>
                    </View>
                    <View style={styles.studentsecondItem}>
                        <Text style={styles.studentsecondItemText1}> Moyen Mathematique: </Text>
                        <Text style={styles.studentsecondItemText2}> {data.moyenMath} </Text>
                    </View>
                    <View style={styles.studentsecondItem}>
                        <Text style={styles.studentsecondItemText1}> Moyen Informatique:   </Text>
                        <Text style={styles.studentsecondItemText2}> {data.moyenInfo} </Text>
                    </View>
                    
                </View>
            </View>
            
        </ScrollView>
                </View>









            )
        }
            
        
    </View>
 )   
}

// OneStudent.navigationOptions = (navigateDate) => {
//     const nom = navigateDate.navigation.getParam('nom');
//     const id = navigateDate.navigation.getParam('_id');

    
//     return {
//         headerTitle: `Details sur ${nom}`,
    
//                 }}
//             />
//             <Item 
//                 title='delete'
//                 iconName='delete'
                
               
//             />
//         </HeaderButtons>
//     )
//     }
    
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.test
    },
    studentsbannier: {
        height: 220,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
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