import React from 'react';
import { Button, Text, View,StyleSheet,Image,ImageBackground,ScrollView } from 'react-native';  
import { Tile } from 'react-native-elements';
import {Lunbotu} from '../component/lunbotu';
export default class Jingxuan extends React.Component {
  render(){ 
    return( 
       <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator ={false}>
          <ImageBackground source={{uri: 'https://facebook.github.io/react-native/img/opengraph.png'}} style={styles.backgroundImg} imageStyle={{borderRadius:10}}>
              <Text style={styles.title}>网红店榜</Text>
              <Text style={styles.caption}>122家好店</Text>
          </ImageBackground>
          <ImageBackground source={{uri: 'https://facebook.github.io/react-native/img/opengraph.png'}} style={styles.backgroundImg} imageStyle={{borderRadius:10}}>
              <Text style={styles.title}>网红店榜</Text>
              <Text style={styles.caption}>122家好店</Text>
          </ImageBackground>
          <ImageBackground source={{uri: 'https://facebook.github.io/react-native/img/opengraph.png'}} style={styles.backgroundImg} imageStyle={{borderRadius:10}}>
              <Text style={styles.title}>网红店榜</Text>
              <Text style={styles.caption}>122家好店</Text>
          </ImageBackground>
          

       </ScrollView>
       
    )  
    
  }
} 
const styles = StyleSheet.create({
   container:{
    flex: 1,  
    paddingVertical:10,
    // paddingHorizontal:15,
    marginLeft:0
   },
   backgroundImg:{
    width:160,height:80,margin:10,
    marginLeft:0,
    marginBottom:0,
    paddingVertical:15,
    paddingHorizontal:10
},
   title:{
       color:"white",
       fontSize:20,
       marginBottom:5
   },
   caption:{
       color:"white", 
       fontSize:16
   }
}) 