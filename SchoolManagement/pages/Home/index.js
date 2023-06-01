
import React from 'react';
import {StyleSheet, View, Image, Text, Button, Pressable} from 'react-native';
import colors from '../../colors'
import MaterialIconHearder from '../../component/MaterialIconHearder';

// import {
//     HeaderButtons,
//     HeaderButton,
//     Item,
//     HiddenItem,
//     OverflowMenu,
//   } from 'react-navigation-header-buttons';


const Home = ({navigation}) => {
    
    const HhandleListStudent = () => {
        navigation.navigate('ListStudents');
    }

    const handleAddStudent = () => {
        navigation.navigate('AddStudents');
    }

    const handleAddPathway = () => {
        navigation.navigate('AddPathway')
    }

    const handleListPathways = () => {
        navigation.navigate('ListPathways')
    }

    const handleSingIn = () => {
        navigation.navigate('SignIn');
    }

    const handleSingUp = () => {
        navigation.navigate('SignUp');
    }
 return (
    <View style={styles}>

        <View style={styles.HomeContainer}>
            <View style={styles.homeheader}>
                <View style={styles.homeHeadercontent}>
                <Image 
                    style={styles.homeHeaderImg}
                    source={require('../../assets/logo1.png')}
                />
                </View>
            </View>
            <View style={styles.contentImgs}>

                <View style={styles.contentHome}>
                    <View style={styles.imgContent}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/educator.png')}
                        />
                        <Text> Educateur</Text>
                    </View>
                    
                    <View style={styles.imgContent}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/certification.png')}
                        />
                        <Text> Certificat</Text>
                    </View>
                    <View style={styles.imgContent}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/graduate.png')}
                        />
                        <Text> diplômé </Text>
                    </View>
                    
                    
                </View>
                <View style={styles.contentHome}>
                    <View style={styles.imgContent}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/education.png')}
                        />
                        <Text> Education</Text>
                    </View>
                    <View style={styles.imgContent}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/certificate.png')}
                        />
                        <Text> Certification</Text>
                    </View>
                    
                    <View style={styles.imgContent}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/discount.png')}
                        />
                        <Text> Certificate</Text>
                    </View>
                
                </View>
            </View>

         </View>
    </View>
)
}
const styles = StyleSheet.create({ 
     container: {
         backgroundColor: '#fff',
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
     }, 
     HomeContainer: {
        backgroundColor: colors.cleangreen,

     },
     text : {
         fontFamily: 'InriaSans_700Bold_Italic',
         fontSize: 25
     },
     btn: {
         marginTop: 20,
     },


     homeheader: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
     },
     homeHeadercontent: {
        height: 270,
        width: 270,
     },
     homeHeaderImg: {
        height: '100%',
        width: '100%',
     },
     contentHome: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
     },
     contentImgs: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        borderTopLeftRadius: 60 ,
        borderTopRightRadius: 60 ,

     },
     imgContent: {
        height: 115,
        width: 105,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
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
        img: {
            height: '100%',
            width: '100%'
        },
        

})


export default Home;












