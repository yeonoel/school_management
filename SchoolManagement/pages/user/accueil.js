import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, ScrollView} from 'react-native';
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
    <View >
      <View style={{paddingHorizontal:20}}>
      
      <View style={{marginTop:30,alignItems: 'flex-end'}}>
      <Image source={require('test/assets/favicon.png')}/>
      </View>
      <Header/>
      <View style={styles.inputView}>
          <TextInput 
          style={styles.search}
          placeholder="Rechercher" />
          <TouchableOpacity />
        </View>
      <ScrollView horizontal>
      <TouchableOpacity style={{ backgroundColor: '#D9D9D9', padding: 10, borderRadius: 30, marginTop: 20, marginHorizontal: 5, flexDirection:'row'}}>
        <Image style={{width: 20, height: 20, marginRight:10}}  source={require('test/assets/favicon.png')}/>
        <Text style={{ color: '#fff' , fontWeight:'bold',color:'black'}}>Ajouter parcours</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#D9D9D9', padding: 10, borderRadius: 30, marginTop: 20,marginHorizontal: 5, flexDirection:'row'}}>
        <Image style={{width: 20, height: 20, marginRight:10}}  source={require('test/assets/favicon.png')}/>
        <Text style={{ color: '#fff' , fontWeight:'bold',color:'black'}}>Ajouter étudiant</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#D9D9D9', padding: 10, borderRadius: 30, marginTop: 20, marginHorizontal: 5, flexDirection:'row'}}>
        <Image style={{width: 20, height: 20, marginRight:10}}  source={require('test/assets/favicon.png')}/>
        <Text style={{ color: '#fff' , fontWeight:'bold',color:'black'}}>Liste parcours</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#D9D9D9', padding: 10, borderRadius: 30, marginTop: 20, marginHorizontal: 5, flexDirection:'row'}}>
        <Image style={{width: 20, height: 20, marginRight:10}}  source={require('test/assets/favicon.png')}/>
        <Text style={{ color: '#fff' , fontWeight:'bold',color:'black'}}>Liste étudiant</Text>
      </TouchableOpacity>
      </ScrollView>
      <ScrollView>
      <View style={styles.container}>
      </View>
      </ScrollView>
      <View style={{paddingHorizontal:5, paddingBottom:'30'}}>
      <Text style={{borderBottomWidth:2, color:'#D9D9D9'}}>Dernières actions effectuées</Text>
      </View>
    </View>
    <View style={styles.footer}>
      <TouchableOpacity style={{ backgroundColor: 'orange', padding: 10, borderRadius: 30}}>
        <Text style={{ color: '#fff' , fontWeight:'bold',color:'black'}}>Accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'orange', padding: 10, borderRadius: 30}}>
        <Text style={{ color: '#fff' , fontWeight:'bold',color:'black'}}>Onglets</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
      color: 'black' ,
      width: '100%',
      paddingLeft: 20,
      height: 250,
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 50,
      justifyContent: 'center',
      marginTop:20
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
    justifyContent:'center'},
    
  search:{
      backgroundColor: '#D9D9D9',
      color: 'black' ,
      width: '99%',
      paddingLeft: 20,
      height: 50,
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 50,
      justifyContent: 'center'
    },
    inputView: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: 30,
      paddingBottom: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#fff' 
    },
    footer:{
      alignSelf:'',
      flexDirection:'row',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: '#D9D9D9',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 160,
      
    }
    
  
  
});
