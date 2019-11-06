import React from 'react' 
   import { View, Text, Image,StyleSheet, ScrollView } from 'react-native'
   import { Card, ListItem, Button, Icon } from 'react-native-elements'
   
   export default class Merchants extends React.Component {
    render() {
   // implemented without image with header
        return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false}>
            <Card  
                image={require('../Image/steak.png')} imageStyle={styles.image} wrapperStyle={{borderRadius:5}}>
                <Text style={styles.title}>商家名称 </Text> 
                <Text  style={styles.caption}> 简介简介简介 </Text> 
                </Card>
                <Card 
                image={require('../Image/steak.png')} imageStyle={styles.image}>
                 <Text style={styles.title}>商家名称 </Text> 
                <Text  style={styles.caption} > 简介简介简介 </Text> 
                </Card>
                <Card 
                image={require('../Image/steak.png')} imageStyle={styles.image}>
                <Text style={styles.title}>商家名称 </Text> 
                <Text style={styles.caption}> 简介简介简介 </Text> 
            </Card>
        </ScrollView>
      
      )
    }
} 
   const styles = StyleSheet.create({
    image:{
         height:100,
         width:140,
         marginVertical:0,
         paddingVertical:0,
         borderRadius:5,     
    },  
    title:{
        fontSize:20,
        fontWeight:"400",
        paddingBottom:5
    },
    caption:{
        color:"#777777"
    }
});
 