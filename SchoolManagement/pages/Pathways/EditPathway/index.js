
import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Alert } from 'react-native';


const EditPathway = ({navigation}) => {
    
    const [niveau, setNiveau] = useState(navigation.getParam('niveau'));
    const [speciality, setSpeciality] = useState(navigation.getParam('specilaty'));
    const [salle, setSalle] = useState(navigation.getParam('salle'));
    const [comment, setComment] = useState(navigation.getParam('niveau'));

    const idPathway = navigation.getParam('id');

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
                            <Text style={styles.studentsecondItemText1}> Comment:   </Text>
                            <TextInput
                                style={styles.input}
                                value={comment}
                                
                                onChangeText={text => setComment(text)}
                            />
                        </View>
                        

                        <View style={styles.group_btn_add_student}>
                        <TouchableOpacity
                            style={styles.btn1}
                            color='#fff'
                            onPress={handleCancel}
                        >
                            <Text
                            style={styles.btn_text}
                            > Annuler </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn2}
                            onPress={handleUpdate}
                        >
                            <Text
                                style={styles.btn_text}
                            > 
                                Valider 
                            </Text>
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
        backgroundColor: colors.lightyellow
    },
    constinainerstudentsecondItem: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30
    },
    studentsecondItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#ccc",
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
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        borderRadius: 20,
    },
    btn1: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#e64537', // définit la couleur de fond du bouton en vert
        color: '#fff' ,// définit la couleur du texte en blanc
        alignItems: 'center'
    },
    btn2: {
        height: 40,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 50,
        backgroundColor: '#00703C', // 
        color: '#fff' // définit la couleur du texte en blanc
    },
    btn_text: {
        
        color: '#fff'
    }







})

export default EditPathway;