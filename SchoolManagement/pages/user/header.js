import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';


const Header = () => {

  return (
    <View style={styles.header}>
      <View style={styles.header}>
        <Image source={require('test/assets/favicon.png')}/>
      </View>
      <Text></Text>
      <Text>ENSIT Administration prefere une photo</Text>
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    width: '100%',
    heigth:'15%',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 30,
  }


});
export default Header;
