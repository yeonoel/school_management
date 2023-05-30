import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

const singUp = () => {

  /*const hunderPress = () => {
    navigation.navigate('inscription')

  }*/
  
  return (
     
    <View style={styles.container}>
      <View style={styles.logoContent}>
        <Image 
          source={require('../../assets/logo.png')}
        />
      </View>
      <Text> SingUp </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

  
});


export default singUp;