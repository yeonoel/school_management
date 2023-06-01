
import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import colors from '../../../colors';


const EditPathway = ({navigation, route}) => {
    const myData = route.params;
    const idPathway = route.params.id;
    console.log(idPathway);
    const [niveau, setNiveau] = useState(myData.niveau);
    const [speciality, setSpeciality] = useState(myData.speciality);
    const [salle, setSalle] = useState(myData.salle);
    const [comment, setComment] = useState(myData.comment);


    function capitalizeFirstLetter(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      }


      function emptyField () {
        console.log('okay');
        niveau;
        salle;
        speciality;
    
    }
    const handleCancel = () => {
        emptyField();
    }

    navigation.setOptions({
        headerTitle: `Modifier le ${myData.niveau}`
    })
    const handleUpdate = () => {
        // Créer un objet qui contient les nouvelles informations de l'étudiant
        const updatedPathway = {
            niveau: niveau,
            speciality: speciality,
            salle: salle,
            comment: comment
        };

        // Envoyer une requête PUT à l'API backend pour mettre à jour les informations de l'étudiant
        fetch(`http://10.0.2.2:8080/api/pathways/${idPathway}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPathway)
        })
        .then(response => {
            if (response.ok) {
                console.log('Parcour mis à jour avec succès !');
                
                    Alert.alert('Reussi!', `Le parcour  ${niveau} a été mis à jour correctement.`, [
                        {
                          text: 'Bien',
                          //onPress: () => console.warn('accepté')
                        }]
                    )
                    navigation.navigate('Home');
                    return;
                
            } else {
                Alert.alert('Error!', 'essayez encore', [
                    {
                      text: 'Retour',
                      //onPress: () => console.warn('refusé')
                    }]
                )
                
                throw new Error('La mise à jour de l\'élève a échoué.');
            }
        })
        .catch(error => console.error(error));
    };

    return (
        <View style={styles.container}>
            
            
            <ScrollView>
                <View style={styles.studentText}>
                    <View style={styles.constinainerstudentsecondItem}>
                        
                    <View style={styles.studentsecondItem}>
                            <Text style={styles.studentsecondItemText1}> Niveau:  </Text>
                            <TextInput
                                style={styles.input}
                                value={niveau}
                                onChangeText={text => setNiveau(text)}
                            />
                        </View>
                        <View style={styles.studentsecondItem}>
                            <Text style={styles.studentsecondItemText1}> Specialité:   </Text>
                            <TextInput
                                style={styles.input}
                                value={speciality}
                                onChangeText={text => setSpeciality(text)}
                            />
                        </View>
                        
                        
                        <View style={styles.studentsecondItem}>
                            <Text style={styles.studentsecondItemText1}> Salle:   </Text>
                            <TextInput
                                style={styles.input}
                                value={salle}
                                keyboardType='numeric'
                                onChangeText={text => setSalle(text)}
                            />
                        </View>
                        <View style={styles.studentsecondItem}>
                            <Text style={styles.studentsecondItemText1}> Commentaire:   </Text>
                            <TextInput
                                style={styles.input}
                                value={comment}
                                onChangeText={text => setComment(text)}
                            />
                        </View>
                        

                        <View style={styles.group_btn_add_student}>
                        
                        <TouchableOpacity
                            style={styles.btn2}
                            onPress={handleUpdate}
                        >
                            <Text
                                style={styles.btn_text1}
                            > 
                                Valider 
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn1}
                            color='#fff'
                            onPress={handleCancel}
                        >
                            <Text
                            style={styles.btn_text2}
                            > Annuler </Text>
                        </TouchableOpacity>
                        
                    </View>
                        
                        
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDECEC',
    },
    constinainerstudentsecondItem: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 70
    },
    studentsecondItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#000",
        marginTop: 10,
        paddingHorizontal: 10
        
    },
    input: {
        backgroundColor: '#fff',
        flex: 2,
        height: '80%',
        paddingHorizontal: 10

        
    },

    studentsecondItemText1: {
        width: '40%',
        fontWeight: 'bold',
        fontSize: 14
    },


    group_btn_add_student: {
        marginTop: 20,
        justifyContent: 'space-around',
        
        borderRadius: 20,
    },
    btn1: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        height: 40,
        borderRadius: 5,
        color: 'red' ,// définit la couleur du texte en blanc
        alignItems: 'center'
    },
    btn2: {
        height: 40,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: colors.cleangreen, // 
        color: '#fff' // définit la couleur du texte en blanc
    },
    btn_text1: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold'
    },
    btn_text2: {
        color: 'red'
    }

})

export default EditPathway;