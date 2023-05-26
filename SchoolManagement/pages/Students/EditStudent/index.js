
import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Alert } from 'react-native';


const EditStudent = ({navigation}) => {
    
    const [nom, setNom] = useState(navigation.getParam('nom'));
    const [matricule, setMatricule] = useState(navigation.getParam('matricule'));
    const [prenom, setPrenom] = useState(navigation.getParam('prenom'));
    const [niveau, setNiveau] = useState(navigation.getParam('niveau'));
    const [moyenMath, setMoyenMath] = useState(navigation.getParam('moyenMath'));
    const [moyenInfo, setMoyenInfo] = useState(navigation.getParam('moyenInfo'));

    const idStudent = navigation.getParam('id');

    function capitalizeFirstLetter(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      }

      console.log(navigation.getParam('matricule'))

      function emptyField () {
        console.log('okay');
        setMatricule('');
        setMoyenInfo('');
        setMoyenMath('');
        setNom('');
        setPrenom('');
        setSelectedClass('');
    
    }
    const handleCancel = () => {
        emptyField();
    }
    const handleUpdate = () => {
        // Créer un objet qui contient les nouvelles informations de l'étudiant
        const updatedStudent = {
            nom: nom,
            matricule: matricule,
            prenom: prenom,
            niveau: niveau,
            moyenMath: moyenMath,
            moyenInfo: moyenInfo
        };

        // Envoyer une requête PUT à l'API backend pour mettre à jour les informations de l'étudiant
        fetch(`http://10.0.2.2:8080/api/students/${idStudent}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedStudent)
        })
        .then(response => {
            if (response.ok) {
                console.log('L\'élève a été mis à jour avec succès !');
                
                    Alert.alert('Reussi!', `L'etudiant ${nom} a été mis à jour correctement.`, [
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
                            <Text style={styles.studentsecondItemText1}> Matricule   </Text>
                            <TextInput
                                style={styles.input}
                                value={matricule}
                                onChangeText={text => setMatricule(text)}
                            />
                        </View>
                        
                        
                        <View style={styles.studentsecondItem}>
                            <Text style={styles.studentsecondItemText1}> Niveau:  </Text>
                            <TextInput
                                style={styles.input}
                                value={niveau}
                                onChangeText={text => setNiveau(text)}
                            />
                        </View>
                        <View style={styles.studentsecondItem}>
                            <Text style={styles.studentsecondItemText1}> Nom:   </Text>
                            <TextInput
                                style={styles.input}
                                value={nom}
                                onChangeText={text => setNom(text)}
                            />
                        </View>
                        <View style={styles.studentsecondItem}>
                            <Text style={styles.studentsecondItemText1}> Prénom   </Text>
                            <TextInput
                                style={styles.input}
                                value={prenom}
                                onChangeText={text => setPrenom(text)}
                            />
                        </View>
                        <View style={styles.studentsecondItem}>
                            <Text style={styles.studentsecondItemText1}> Moyen Mathematique </Text>
                            <TextInput
                                style={styles.input}
                                value={moyenMath}
                                keyboardType='numeric'
                                onChangeText={text => setMoyenMath(text)}
                            />
                        </View>
                        <View style={styles.studentsecondItem}>
                            <Text style={styles.studentsecondItemText1}> Moyen Informatique   </Text>
                            <TextInput
                                style={styles.input}
                                value={moyenInfo}
                                keyboardType='numeric'
                                onChangeText={text => setMoyenInfo(text)}
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

export default EditStudent;