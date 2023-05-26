import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import Header from 'test/header.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StackNav from './SwitchPage';
import ButtonRadio from './radioButton';




export default function App(props) {

  /*const hunderPress = () => {
    navigation.navigate('inscription')

  }*/
  
  return (
     
    <View style={{paddingHorizontal:20}}>
      <Header/>
      <View>
      <Text style={{fontWeight:'bold', fontSize:30, color:'orange', marginTop:40, padding:5}}>Inscription</Text>
      </View>
      <View style={{paddingHorizontal:5 }}>
      <TextInput style={{height:60, borderBottomWidth:2}}
        placeholder = 'Nom'
      />
      <TextInput style={{height:60, borderBottomWidth:2}}
        placeholder = 'Prenom(s)'
      />
      <TextInput style={{height:60, borderBottomWidth:2}}
        placeholder = 'Email'
      />
      <TextInput style={{height:60, borderBottomWidth:2, marginBottom:50}}
        placeholder = 'Mot de passe'
      />
      </View>
      <ButtonRadio/>
      <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={{ backgroundColor: 'orange', padding: 10, borderRadius: 30, marginTop: 30}}>
        <Text style={{ color: '#fff' , fontWeight:'bold',color:'black'}}>S'inscrire'</Text>
      </TouchableOpacity>
      </SafeAreaView>
      <Text style={{marginTop:20, paddingLeft:100}}>ou se connecter avec</Text>
      <StatusBar style="auto" />
      <View style={styles.header}>
      <Image style={{marginTop:30}} source={require('test/assets/favicon.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  
  header:{
    width: '100%',
    heigth:'15%',
    alignItems:'center',
    justifyContent:'center'
  }
});
