import React from 'react' 
   import { View, Text, Image,StyleSheet, ScrollView } from 'react-native'
   import { Card, ListItem, Button, Icon } from 'react-native-elements'
   import NavigationBar from "../component/NavigationBar"; 
   export default class Merchants extends React.Component {
    render() {
   // implemented without image with header
        return( 
            <Image source={require("../Image/special.png")} style={{width:"100%",height:100,borderRadius:7,marginVertical:10}}/> 
        
      )
    }
} 
   const styles = StyleSheet.create({
  
});
 