import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';


const Boxes = () => {

    return (
      <View style={styles.box}>
        <Text></Text>
        <Text>ENSIT Administration prefere une photo</Text>
        <StatusBar style="auto" />
      </View>
    );
    
  }
  
  const styles = StyleSheet.create({
    box:{
      width: '100%',
      heigth:'85%',
      backgroundColor:'red',
      padding:5,
      flexDirection:'row',
      flexWrap:'wrap,',
      borderRadius:10
    }
  
  });
  export default Boxes;