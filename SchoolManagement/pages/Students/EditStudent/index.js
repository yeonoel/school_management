
import React, { useState } from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';


const EditStudent = ({navigation, route}) => {
    
    const myData = route.params;

    const [classes, setClasses] = useState(["Prepa1", "Prepa2", "Prepa3", "Eng1", "Eng2", "Eng3"]);
    const [nom, setNom] = useState(myData.nom);
    const [matricule, setMatricule] = useState(myData.matricule);
    const [prenom, setPrenom] = useState(myData.prenom);
    const [moyenMath, setMoyenMath] = useState(myData.moyenMath);
    const [moyenInfo, setMoyenInfo] = useState(myData.moyenInfo);
    const [selectClass, setSelectedClass] = useState('');

    const idStudent = myData._id;
    function capitalizeFirstLetter(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }


      function emptyField () {
        console.log('okay');
        
        setMoyenInfo(navigation.getParam('moyenInfo'));
        setMoyenMath(navigation.getParam('moyenMath'));
        setNom(navigation.getParam('nom'));
        setPrenom(navigation.getParam('prenom'));
        setMatricule(navigation.getParam('matricule'))
    
    }
    const handleCancel = () => {
        emptyField();
    }
    navigation.setOptions({
        headerTitle: `Modifier les infos de ${myData.nom}`
    })
    const handleUpdate = () => {
        // Créer un objet qui contient les nouvelles informations de l'étudiant
        const updatedStudent = {
            nom: capitalizeFirstLetter(nom),
            matricule: matricule,
            prenom: capitalizeFirstLetter(prenom),
            niveau: selectClass,
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
                            <Text style={styles.studentsecondItemText1}> Matricule:   </Text>
                            <TextInput
                                style={styles.input}
                                value={matricule}
                                onChangeText={text => setMatricule(text)}
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
                            <Text style={styles.studentsecondItemText1}> Prénom:  </Text>
                            <TextInput
                                style={styles.input}
                                value={prenom}
                                onChangeText={text => setPrenom(text)}
                            />
                        </View>
                        
                        <View style={styles.studentsecondItem}>
                            <Text style={styles.studentsecondItemText1}> Moyen Mathematique: </Text>
                            <TextInput
                                style={styles.input}
                                value={moyenMath}
                                keyboardType='numeric'
                                onChangeText={text => setMoyenMath(text)}
                            />
                        </View>
                        <View style={styles.studentsecondItem}>
                            <Text style={styles.studentsecondItemText1}> Moyen Informatique:   </Text>
                            <TextInput
                                style={styles.input}
                                value={moyenInfo}
                                keyboardType='numeric'
                                onChangeText={text => setMoyenInfo(text)}
                            />
                        </View>
                        <View>
                        <Picker
                            selectedValue={selectClass}
                            onValueChange={(itemValue, itemIdex) => setSelectedClass(itemValue)}
                        >
                            <Picker.Item label="Choisir un niveau" value="" />
                            {
                                classes.map((item, index) => (
                                    <Picker.Item key={index} label={item} value={item} />
                                ) )
                            }
                        </Picker>
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
        backgroundColor: '#EDECEC'
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
        height: 53,
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
        backgroundColor: '#FFD700', // 
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

export default EditStudent;