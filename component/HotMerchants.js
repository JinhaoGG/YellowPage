import React,{useState} from 'react' 
   import { View, Text, Image,StyleSheet, ScrollView, Alert,FlatList,TouchableHighlight } from 'react-native'
   import {  ListItem, Button,Rating} from 'react-native-elements'
    
   export default class HotNavigation extends React.Component { 
    render() { 
        const { rating } = this.props;
   // implemented without image with header
        return( 
            <View>
                <View style={styles.container}>
              <Image source={require('../Image/hotpot.png')} style={{width:"30%",borderRadius:5}}/>
               <View style={styles.text}>
                    <Text style={styles.title}>刘一手火锅店(万锦店)</Text>
                    <View>
                        <Rating
                        imageSize={15}
                        readonly
                        startingValue={4}
                        style={ styles.rating}
                        /> 
                    </View> 
                    <Text style={styles.fenlei}>火锅 提供夜宵 有车位</Text>
               </View>
           </View>
           <View style={styles.container}>
              <Image source={require('../Image/hotpot.png')} style={{width:"30%",borderRadius:5}}/>
               <View style={styles.text}>
                    <Text style={styles.title}>刘一手火锅店(万锦店)</Text>
                    <View>
                        <Rating
                        imageSize={15}
                        readonly
                        startingValue={4}
                        style={ styles.rating}
                        /> 
                    </View> 
                    <Text style={styles.fenlei}>火锅 提供夜宵 有车位</Text>
               </View>
           </View>

            </View>
      )
    }
} 
   const styles = StyleSheet.create({
   container:{
       flexDirection:"row",
       width:"100%",
       height:130,
       padding:15,
       marginVertical:10,
       backgroundColor:"white"
   }, 
   text:{
    marginHorizontal:10
   },
   title:{
       fontSize:20
   },
   rating:{
       alignItems:'flex-start'
   },
   fenlei:{
       position:"relative",
       top:40
    }
});
 