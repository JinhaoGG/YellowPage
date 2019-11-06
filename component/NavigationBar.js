import React from "react";
import { View, Text ,StyleSheet,FlatList } from 'react-native';
import {ButtonGroup} from 'react-native-elements'
export default class NavigationBar extends React.Component{
    constructor () {
        super()
        this.state = {
          selectedIndex:0
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
       
      render () { 
        const buttons = ['首页', '附近商家', '热门商家',"推荐服务"]
        const { selectedIndex } = this.state
      
        return (
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={styles.btnGroup} 
            textStyle={styles.btnText}
            buttonStyle={styles.btnStyle} 
          />
        )
      } 
      
}
const styles = StyleSheet.create({
    btnGroup:{
        height:48,
        borderWidth:0, 
        marginLeft:0
        // paddingHorizontal:30
    },
    btnStyle:{
       width:80,
       marginHorizontal:20, 
       borderRadius:15 
      //  backgroundColor:"white" 
    },
    btnText:{
        color:"#8A8A8A",  
        paddingVertical:20,
        borderBottomColor: "black",  
        fontSize:18
    }
}) 
