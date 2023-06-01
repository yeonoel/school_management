import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Pressable } from 'react-native';
import colors from '../../../colors';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons' ; 
import MaterialIconHearder from '../../../component/MaterialIconHearder';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


const ListPathways = ({navigation}) => {
    const [datas, setDatas] = useState([]);
    const [isLoding, setIsLoading] = useState(false);

    const numColumns = Dimensions.get('window').width < 600 ? 2 : 4;

    useEffect(() => {
        setIsLoading(true);
        fetchDatas();
        return () => {

        }
    }, []);

    function fetchDatas () {
      fetch('http://10.0.2.2:8080/api/all/pathways')
      .then((res) => res.json())
      .then(({courses}) => { 
        //console.log(JSON.stringify(resJson))
        setDatas(courses)
        console.log(courses)
        
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
      
    }
    const renderPathways = ({item}) => {
      console.log(item)
      return (

            <View style={styles.pathway_contain}>
              <Pressable
                onPress={() => navigation.navigate('OnePathway', item)}
              >
                <View style={styles.pathway_item}>
                    <MaterialIcons name="cast-for-education" size={24} color="black" />
                    <Text style={styles.pathway_text} >{item.niveau}</Text>
                </View>
            </Pressable>
            </View>

        
      )
    }

    return (
      <View style={styles.container}>
        
          <View>
          {
            isLoding ? <ActivityIndicator /> :
              (
                 <FlatList
                     data={datas}
                     renderItem={renderPathways}
                     keyExtractor={(item) => item.id}
                     numColumns={numColumns}
                     contentContainerStyle={{
                         padding: 20
                       }}
                        
                 />
             )            
          }
          </View>
        
      </View>
    )
   
  }










  // ListPathways.navigationOptions = ({navigation}) => {
    
  //   return {        
  //   headerTitle: 'Liste des étudiants',
  //   headerLeft: () => (
  //       <HeaderButtons
  //          HeaderButtonComponent={MaterialIconHearder}
  //       >
  //          <Item 
  //               title='menu'
  //               iconName='menu'
  //               onPress={() => { navigation.toggleDrawer()}}
  //           />
  //       </HeaderButtons>
  //   )
  // }
  // }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.test,
  },
  pathway_contain: {
    flex: 1,
  },
  pathway_item: {
    paddingVertical: 15,
    borderRadius: 12,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: colors.lightyellow,
    alignItems: 'center',
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
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  pathway_text: {
    fontSize: 15,
    borderRadius: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
    color: 'red'
    
  }
});

export default ListPathways;