import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, ActivityIndicator, Animated, Pressable } from 'react-native';
import colors from '../../../colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIconHearder from '../../../component/MaterialIconHearder';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const marginBottomItem = 20;
const paddingItem = 30;
const imgHeight = 70;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

 
const ListStudents = ({navigation}) => {
    const [datas, setDatas] = useState([]);
    const [isLoding, setIsLoading] = useState(false);
    const Yscroll = React.useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        setIsLoading(true);
        fetchDatas();
        return () => {

        }
    }, []);

    function fetchDatas () {
      fetch('http://10.0.2.2:8080/api/all/students')
      .then((res) => res.json())
      .then((resJson) => { 
        //console.log(JSON.stringify(resJson))
        setDatas(resJson)
        console.log(resJson)
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
      
    }

  const renderProfiles = ({item, index}) => {
    const scale = Yscroll.interpolate({
      inputRange: [
        -1, 0,
        sizeOfItem * index,
        sizeOfItem * (index + 2)
      ],
      outputRange: [1, 1, 1, 0]
    })
    return (
      <Pressable
        onPress={() => navigation.navigate('OneStudent', item)}
        // style={({pressed}) => [
        //   { backgroundColor: pressed ? 'red': '', padding: 10}
        // ]}
      >
        <Animated.View style={
          [styles.item,
          {
            transform: [{ scale }]
          }
          ]
        }>
        
        <View style={styles.wrapText}>
          <View style={styles.nameFirstChar}>
            <Text style={styles.nameChar} >{item.nom.charAt(0).toUpperCase()}</Text>
          </View>
          <View style={styles.student_text}>
            <Text style={styles.textname}>{item.nom}</Text>
            <Text style={styles.textimp}>{item.matricule}</Text>
            
          </View>
        </View>
      </Animated.View>
      </Pressable>
    )
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.wrapper}>
        <View style={styles.inputView}>
          <TextInput 
          style={styles.search}
          placeholder="Nom de l'étudiant" />
          <TouchableOpacity 
          
          />
        </View>
        
          {
            isLoding ? <ActivityIndicator /> :
              (
                 <Animated.FlatList
                     data={datas}
                     renderItem={renderProfiles}
                     keyExtractor={(item) => item.id}
                     contentContainerStyle={{
                         padding: 20
                       }}
                        onScroll={
                          Animated.event(
                            [{ nativeEvent: { contentOffset: { y: Yscroll } } }],
                            { useNativeDriver: true }
                          )}
                 />
             )            
          }
      </View>
    </View>
  );
};



// ListStudents.navigationOptions = ({navigation}) => {
    
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
  wrapper: {
    backgroundColor: colors.lightyellow,
    paddingTop: 5
  },
  search : {
    backgroundColor: '#fff',
    color: 'black' ,
    width: '99%',
    paddingLeft: 20,
    height: 40,
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
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',

  },
  fontSize: {
    fontSize: 10
  },
  wrapText: {
    flex: 1,
    flexDirection: 'row',
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
  student_text: {
    width: '80%',
    paddingLeft: 70,
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    

  }, 
  item: {
    flexDirection: 'row',
    marginBottom: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .3,
    shadowRadius: 30,
    padding: 3
  },
  nameFirstChar: {
    backgroundColor: '#E9E9E9',
    width: 70,
    height: 50,
    borderRadius: 18,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameChar: {
    fontSize: 20,
    color: 'red'
  },
  textname: {
    fontSize: 15,
    color: 'red',
  },
  textimp: {
    fontWeight: 'bold',
    flexWrap: 'wrap',
    fontSize: 15,
  }
});

export default ListStudents;