import React,{useState} from 'react' 
   import { View, Text, Image,StyleSheet, ScrollView, Alert,FlatList,TouchableHighlight } from 'react-native'
   import {  ListItem, Button } from 'react-native-elements'
    
   export default class HotNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressStatus: true };
    }
    _onHideUnderlay() {
        this.setState({ pressStatus: false });
    }
    _onShowUnderlay() {
        this.setState({ pressStatus: true });
    }
    changeBg(){
        this.setState({ pressStatus : true});
    }
 
    render() { 
   
   // implemented without image with header
        return( 
            
           <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator ={false}>
           
                  <FlatList
                      horizontal={true}
                    data={DATA}
                    renderItem={({ item }) => (
                    <Button
                        id={item.id}
                        title={item.name} 
                        buttonStyle={
                            this.state.pressStatus
                                ? styles.buttonPress
                                : styles.button
                        }
                        // onHideUnderlay={this._onHideUnderlay.bind(this)}
                        // onShowUnderlay={this._onShowUnderlay.bind(this)}
                        onPress={this.changeBg}
                    />
                    )}
                    keyExtractor={item => item.id} 
                     
                    />      
                 
           </ScrollView>
      )
    }
} 
   const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        // backgroundColor:"transparent"
    }, 
    buttonPress:{    
        backgroundColor:"#fbcb54", 
        borderRadius:25,
        width:100,
        marginRight:10
    },
    button:{
        
    }
});
const DATA = [
    {
        id :"1",
      name: '家庭旅馆', 
    },
    {
        id:"2",
      name: '家庭旅馆', 
    },
    {
        id:"3",
      name: '家庭旅馆', 
    } ,
    {
        id:"4",
      name: '家庭旅馆', 
    } 
  ] 