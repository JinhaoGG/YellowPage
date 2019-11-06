import * as React from "react";
import { View, Text ,StyleSheet,ScrollView, Image,Button} from 'react-native';
import SearchBar from "../component/SearchInput";
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import NavigationBar from "../component/NavigationBar";  
import Lunbotu from '../component/lunbotu';
import Fenlei from "../component/fenlei"; 
import MerchantTitle from "../component/MerchantTitle"; 
import Jingxuan from "../component/Jingxuan"; 
import JingxuanLunbo from "../component/JingxuanLunbo"; 
import Merchants from "../component/Merchants"; 
import Hot from "../component/Hot"; 
import HotNavigation from "../component/HotNavigation"; 
import HotMerchants from "../component/HotMerchants"; 
export default class Home extends React.Component {
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
        
        <View style={styles.container}>
          <Lunbotu/>
          <Fenlei/> 
          <MerchantTitle title="精选商家"/>
          <Jingxuan/>
          <JingxuanLunbo/>
          <Merchants/>
          <MerchantTitle title="热门商家"/>
          <Hot/>
          <HotNavigation/>
          <HotMerchants/>
          <MerchantTitle title="推荐服务"/>
        </View> 
        {/* <Image style={{width:"100%",height:2100}} source={require('../Image/YellowPage_首页.png')} /> */}

    </ScrollView> 
    );
  }   
}
 
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:10,
        paddingHorizontal:15
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
        margin:5, 
      },
       swiper: {},
      img: {
          width:"100%",
          height: 200,
      }

});

 

