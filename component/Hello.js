import React from "react";
import { View, Text ,StyleSheet,ScrollView, Image,Button} from 'react-native';
import SearchBar from "./SearchInput";
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import NavigationBar from "../component/NavigationBar"; 

export default class Hello extends React.Component {
    render() {
      return (
        <ScrollView style={styles.home}>
          <View style={styles.header}>
             {/* location */}
            <Image source={require('../Image/location.png')}/> 
            {/* search bar */}
            <SearchBar style={{width:"55%"}}/>
            {/* language */}
            <Image source={require('../Image/language.png')} style={styles.language} />
            {/* More choices */}
            <Image source={require('../Image/more.png')} style={styles.language} />
          </View>   
          <View>
            <Text>ssss</Text>
         
          </View>
  
          {/* <Image style={{width:"100%",height:2100}} source={require('../Image/YellowPage_首页.png')} /> */}
    
      </ScrollView> 
      );
    }  
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }, 
      header:{
        paddingTop:30,
        paddingHorizontal:15,
        flexDirection:"row",
        marginVertical:10
      },
      home_search:{
        position:"relative",
        // right:30,
        width:"50%",
      },  
      language:{
        height:30,
        width:30, 
        position:"relative",
        margin:5
         
      }

});