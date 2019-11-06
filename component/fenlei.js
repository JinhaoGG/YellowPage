import React from 'react';
import { Button, Text, View,StyleSheet,Image } from 'react-native'; 
 

export default class App extends React.Component {
  render(){ 
    return( 
      <View>
          <View style={styles.container}> 
         <View style={styles.parts}>
            <Image source={require('../Image/yellowCircle.png')} style={styles.imgs}/> 
            <Text>黄页</Text> 
         </View>
         <View style={styles.parts}>
            <Image source={require('../Image/yellowCircle.png')}  style={styles.imgs}/> 
            <Text>餐饮美食</Text> 
         </View>
         <View style={styles.parts}>
            <Image source={require('../Image/yellowCircle.png')}  style={styles.imgs}/> 
            <Text>休闲娱乐</Text> 
         </View>
         <View style={styles.parts}>
            <Image source={require('../Image/yellowCircle.png')}  style={styles.imgs}/> 
            <Text>居家生活</Text> 
         </View>
         <View style={styles.parts}>
            <Image source={require('../Image/yellowCircle.png')}  style={styles.imgs}/> 
            <Text>商家热卖</Text> 
         </View> 
      </View>
      <View style={styles.container}> 
         <View style={styles.parts}>
            <Image source={require('../Image/yellowCircle.png')} style={styles.imgs}/> 
            <Text>搬家接送</Text> 
         </View>
         <View style={styles.parts}>
            <Image source={require('../Image/yellowCircle.png')}  style={styles.imgs}/> 
            <Text>房屋相关</Text> 
         </View>
         <View style={styles.parts}>
            <Image source={require('../Image/yellowCircle.png')}  style={styles.imgs}/> 
            <Text>教育培训</Text> 
         </View>
         <View style={styles.parts}>
            <Image source={require('../Image/yellowCircle.png')}  style={styles.imgs}/> 
            <Text>汽车相关</Text> 
         </View>
         <View style={styles.parts}>
            <Image source={require('../Image/yellowCircle.png')}  style={styles.imgs}/> 
            <Text>财会法律</Text> 
         </View> 
      </View>
        

      </View>
    )  
    
  }
}
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center", 
        flexDirection:"row",
        paddingTop:20,
        width:"100%"
    }, 
    parts:{
        width:"20%",
        alignItems:"center",
        justifyContent:"center"
    },
    imgs:{
        height:60,
        width:60,
        marginBottom:5
    }
}) 