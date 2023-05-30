import { useState } from 'react';
import {Picker} from "@react-native-picker/picker";
import {Alert, View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import colors from '../../../colors';


const AddStudents = () => {

    const [classes, setClasses] = useState(["Prepa1", "Prepa2", "Prepa3", "Eng1", "Eng2", "Eng3"]);
    const [selectClass, setSelectedClass] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [moyMath, setMoyMath] = useState('')
    const [moyInfo, setMoyInfo] = useState('')
    const [matricule, setMatricule] = useState('');

    function capitalizeFirstLetter(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }
   

    function emptyField () {
        console.log('okay');
        setMatricule('');
        setMoyInfo('');
        setMoyMath('');
        setNom('');
        setPrenom('');
        setSelectedClass('');
    
    }
    const handleCancel = () => {
        emptyField();
    }

    

     const student = {
         matricule: matricule,
         nom: capitalizeFirstLetter(nom),
         prenom: capitalizeFirstLetter(prenom),
         moyenInfo: moyInfo,
         moyenMath: moyMath,
         niveau: selectClass
     }
 
     
    const submitHandle = async () => {
        if (
          matricule.length <= 1 ||
          moyInfo == '' ||
          moyMath == '' ||
          nom.length < 1 ||
          prenom.length < 1 ||
          selectClass == ''
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
                matricule: matricule,
                nom: nom,
                prenom: prenom,
                niveau: selectClass,
                moyenMath : moyMath,
                moyenInfo: moyInfo, 
        }   
            console.log(data);
            await fetch(
                "http://10.0.2.2:8080/api/students",
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
                    Alert.alert('Refusé!', 'Un etudiant avec ce matricule existe déjà.', [
                        {
                          text: 'Retour',
                          //onPress: () => console.warn('refusé')
                        }]
                    )
                    
                    return;

                }
                if (data.message) {
                    Alert.alert('Reussi!', 'Etudiant ajouté avec success.', [
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
                
               <ScrollView>

               <View style={styles.form}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Matricule"
                        value={matricule}
                        onChangeText={setMatricule}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="nom"
                        value={nom}
                        onChangeText={setNom}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="prenom"
                        value={prenom}
                        onChangeText={setPrenom}
                    />
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
                    <TextInput 
                        style={styles.input}
                        placeholder="Moyenne Math"
                        value={moyMath}
                        onChangeText={setMoyMath}
                        keyboardType='numeric'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Moyenne Infor"
                        value={moyInfo}
                        onChangeText={setMoyInfo}
                        keyboardType='numeric'
                    />

                    
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
        backgroundColor: colors.lightyellow
    },
    title_add_student: {
        padding: 10,
        textAlign: "center",
        color: "#000000",
        fontSize: 20,
    },
    container_add_students: {
        backgroundColor: colors.lightyellow,
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
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
    form: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginBottom: 20,
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
    input: {
        height: 40,
        marginTop: 30,
        paddingLeft: 20,
        fontSize: 15,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        borderColor: 'transparent',
        borderWidth: 0,
        
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

export default AddStudents;