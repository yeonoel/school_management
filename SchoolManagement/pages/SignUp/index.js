import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView, Alert} from 'react-native';
import colors from '../../colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignIn = ({navigation}) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emptyfields = () => {
    setNom('');
    setPassword('');
    setEmail('');
    setPrenom('');
  }
  const isValidEmail = (email) => {
    const emailRegex = /^[^@\s]+@[^@\s]+.[^@\s]+$/;
    return emailRegex.test(email);
    };
  const handleLinkSignIn = () => {
    navigation.navigate('SignIn');
  }

  const submitSignUpInfo = () => {
    const url = 'http://10.0.2.2:8080/api/signup'

    if (nom.length < 2 || prenom.length < 2 || !isValidEmail(email) || password.length < 3  ) {

      Alert.alert('Désolé', 'Vous devez remplir CORRECTEMENT tous les champs', [
        {
          text: 'Compris',
          onPress: () => console.warn('refusé')
        }
      ]);

      return;
    } else {
      try {
        const data = {
          nom,
          prenom,
          email,
          password
        };
        console.log(data)
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.error) {
            Alert.alert('Error', ' Ce utilisateur exite déja', [
              {
                'text': 'Retour',
                onPress: () => {
                  emptyfields();
                }
              }
            ])
            
            return;
          }
          if (data.message) {
            Alert.alert('Reussi!', `${nom} à été ajouté avec success.`, [
                {
                  text: 'Bien',
                  onPress: () => {
                    emptyfields();
                    navigation.navigate('Home')
                  }
                }]
            )
            
            return;
        }
        })
        
      } catch (error) {
        
      }
    }

    

  }
  
  return (
     
    <View style={styles.container}>
       
          <View style={styles.containerImage}>
            <Image 
              style={styles.img}
              source={require('../../assets/logo1.png')}
            />
          </View>
      <View style={styles.itemsContainer}>
      
      
      <View>
         <Text style={styles.titleSignup}> Inscription </Text>
      </View>
      <ScrollView>
      <View style={styles.containerInputs}>

      <TextInput 
          style={styles.input}
          value={nom}
          onChangeText={setNom}
          placeholder='Nom'
        />
        <TextInput 
          style={styles.input}
          value={prenom}
          onChangeText={setPrenom}
          placeholder='Prenom(s)'
        />
        
        <TextInput 
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder='Email'
        />
        <TextInput 
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder='Mot de passe'
        /> 
      </View>

      <View style={styles.link}>
        <TouchableOpacity
          style={styles.btnSignup}
          onPress={submitSignUpInfo}
        >
          <Text style={styles.btnSignupText}> S'inscrire </Text>
        </TouchableOpacity>
        <Text style={{marginTop: 10}}> ou </Text>
        <TouchableOpacity
          onPress={handleLinkSignIn}
        >
        <Text style={{marginTop: 10, color: 'red'}}> Se connecter </Text>
        </TouchableOpacity>
      </View>
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAD7D7',
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  itemsContainer: {
    marginTop: '10%',
    width: '100%',
    textAlign: 'center',
  },
  containerImage: {
    marginTop: '20%',
    height :100,
    width: 200
  },
  img: {
    height: '100%',
    width: '100%'
  },
  titleSignup: {
    color: '#525151',
    fontSize: 30,
    fontWeight: 'bold'
  },
  containerInputs: {
    width: '100%',
    marginTop: 20
  },
  input: {
    height: 40,
    borderRadius: 10,
    width: '100%',
    borderWidth: 2,
    borderColor: colors.lightyellow,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  link: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnSignup: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.cleangreen,
  },
  btnSignupText: {
    fontSize: 20
  }

  
});


export default SignIn;