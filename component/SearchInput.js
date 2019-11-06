 
import React from 'react';
import { SearchBar } from 'react-native-elements';
import ReactDOM from 'react-dom'; 
import { View } from 'react-native'; 

export default class SearchInput extends React.Component {
  state = {
    search: '',
  }; 

  updateSearch = search => {
    this.setState({ search });
  }; 
  
  render() {
    const { search } = this.state;
 
    return (
       <View style={{justifyContent:"center"}} {...this.props.style}>
         <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search} 
        inputContainerStyle={{backgroundColor:"white", borderRadius:15}}
        // containerStyle={{backgroundColor:"white"}}
        lightTheme={true}
        style={{justifyContent:"center",alignItems:"center"}}
      />
       
       </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  } 
}





