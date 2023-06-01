import React , {useState}from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView , Alert} from 'react-native';
import colors from '../../colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const emptyfields = () => {
    setPassword('');
    setEmail('');
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^@\s]+@[^@\s]+.[^@\s]+$/;
    return emailRegex.test(email);
    };

  const handleLinkSignUp = () => {
    navigation.navigate('SignUp');
  }

  const submitSignUpInfo = () => {

    const url = 'http://10.0.2.2:8080/api/login'

    if (!isValidEmail(email) || password.length < 3  ) {

      Alert.alert('Désolé', 'Vous devez remplir CORRECTEMENT tous les champs', [
        {
          text: 'Compris'
        }
      ]);

      return;
    } else {
      try {
        const data = {
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
            Alert.alert('Error', 'EMAIL ou MOT DE PASSE incorrect', [
              {
                'text': 'Retour',
                onPress: () => {
                  
                }
              }
            ])
            
            return;
          }
          emptyfields();
          navigation.navigate('Home');
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
         <Text style={styles.titleSignup}> Connection </Text>
      </View>
      <ScrollView>
      <View style={styles.containerInputs}>
        
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
          <Text style={styles.btnSignupText}> Se connecter</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 10}}> ou </Text>
        <TouchableOpacity
          onPress={handleLinkSignUp}
        >
        <Text style={{marginTop: 10, color: 'red'}}> S'inscrire </Text>
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
    marginTop: '20%',
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