import React from 'react';
import { Button, Text, View,StyleSheet,Image } from 'react-native';  
 

export default class MerchantTitle extends React.Component {
  render(){ 
    return( 
       <View style={styles.container} >
            <Image source={require('../Image/tag.png')} style={styles.leftYellowTag} />
            <Text style={styles.title}>{this.props.title}</Text>
           <Image source={require('../Image/RightArrow.png')} style={styles.rightArrow} />
       </View>
    )  
    
  }
} 
const styles = StyleSheet.create({
  container:{ 
      alignItems:"center", 
      flexDirection:"row",
      paddingTop:20, 
      width:"100%"
  },   
  title:{
    fontSize:20,
    fontWeight:"500"
  },
  rightArrow:{
    height:30,
    width:40, 
    position:"absolute",
    right:0,
     top:25
  },
  leftYellowTag:{
    height:40,width:20
  }
}) 