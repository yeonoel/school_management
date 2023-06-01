import { useState } from 'react';
import {Alert, View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import colors from '../../../colors';
import { MaterialIcons } from '@expo/vector-icons'; 



const AddPathway = () => {

    const [niveau, setNiveau] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [salle, setSalle] = useState('');
    const [comment, setComent] = useState('');
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function emptyField () {
        console.log('okay');
        setNiveau('');
        setSalle('');
        setComent('');
        setSpeciality('');
    
    }
    const handleCancel = () => {
        emptyField();
    }

    

     const student = {
         niveau: capitalizeFirstLetter(niveau),
         salle: salle,
         speciality: capitalizeFirstLetter(speciality),
         comment: comment
     }
 
     
    const submitHandle = async () => {
        if (
          niveau.length <= 2 ||
          salle == '' ||
          speciality.length < 2
        ) {
          Alert.alert('Désolé', 'Vous devez remplir tous les champs', [
            {
              text: 'Compris',
              onPress: () => console.warn('refusé')
            }
          ]);
    
          return;
        } else {
            
        //emptyField();

        try {
            const data ={ 
                niveau: capitalizeFirstLetter(niveau),
                salle: salle,
                speciality: capitalizeFirstLetter(speciality),
                comment: comment
            }
            console.log(data);
            await fetch(
                "http://10.0.2.2:8080/api/pathways",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }
            )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.error) {
                    Alert.alert('Refusé!', 'Ce parcour exite déja', [
                        {
                          text: 'Retour',
                          //onPress: () => console.warn('refusé')
                        }]
                    )
                    
                    return;

                }
                if (data.message) {
                    Alert.alert('Reussi!', 'Parcour ajouté avec success.', [
                        {
                          text: 'Bien',
                          //onPress: () => console.warn('accepté')
                        }]
                    )
                    emptyField();
                    return;
                }
            })
            .catch(error => console.log(error))
            
           
        } catch (error) {
            console.log(error);
        }

        
      };  

    }  

    return (
        <View style={styles.container}>
            
            <View style={styles.container_add_students}> 
                <Text style={styles.AddStudentTitle}> Ajouter un parcour </Text>
                
               <ScrollView>

               <View style={styles.form}>

                    <View style={styles.inputContent}>
                    <MaterialIcons name="cast-for-education" size={24} color="black" />
                    <TextInput 
                        style={styles.input}
                        placeholder="niveau"
                        value={niveau}
                        onChangeText={setNiveau}
                        
                    />
                    </View>
                    <View style={styles.inputContent}>
                    <MaterialIcons name="grade" size={24} color="black" />
                    <TextInput 
                        style={styles.input}
                        placeholder="specialité"
                        value={speciality}
                        onChangeText={setSpeciality}
                    />
                    </View>
                   
                    <View style={styles.inputContent}>
                    <MaterialIcons name="confirmation-number" size={24} color="black" />
                    <TextInput 
                        style={styles.input}
                        placeholder="Le numero de salle de classe"
                        value={salle}
                        onChangeText={setSalle}
                        keyboardType='numeric'
                    />
                    </View>
                    <View style={styles.inputContent}>
                    <MaterialIcons name="add-comment" size={24} color="black" />
                    <TextInput
                        style={styles.input}
                        placeholder="Commentaire"
                        value={comment}
                        onChangeText={setComent}
                    />
                    </View>
                    

                    
                    
                    <View style={styles.photoStudent}>                        
                            
                            
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
                            onPress={submitHandle}
                        >
                            <Text
                                style={styles.btn_text}
                            > 
                                Valider 
                            </Text>
                        </TouchableOpacity>
                        
                    </View>
                    
               </View>

               </ScrollView>

               
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.test
    },
    title_add_student: {
        padding: 10,
        textAlign: "center",
        color: "#000000",
        fontSize: 20,
    },
    AddStudentTitle: {
        marginVertical: 20,
        paddingVertical: 20, 
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 0.5,
        borderBottomEndRadius: '#ccc'
    },
    container_add_students: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 10,
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 8,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    form: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 3,
        },
    },
    inputContent: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: colors.cleangreen
    },
    input: {
        paddingLeft: 20,
        width: '90%',
        fontSize: 15,
        
    },
    photoStudent: {
        marginTop: 10,
        flexDirection: 'row',
        //width: "50%",
    },
    chooseImg: {
        backgroundColor: '#E9E9E9',
        paddingVertical: 10,
    },
    btnchooseImgText: {
        color: '#000',
        paddingHorizontal: 5
    },
    photo: {
        width: '100%',
        height: '100%'
    },
    wrapper: {
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 9,
        borderColor: 'white',
        borderWidth: 1,
        color: '#000',
        
    },
    group_btn_add_student: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
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

export default AddPathway;