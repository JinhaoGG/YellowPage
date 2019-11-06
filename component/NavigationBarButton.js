import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import Icon from "react-native-vector-icons/FontAwesome"; 
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs"; 
import Home from "../Screen/Home";
import NavigationBar from "../component/NavigationBar"
// import {createIconSetFromIcoMoon} from "react-native-vector-icons";
// import IcomoonConfig from "./font/icomoon.json"; 

class HomeScreen extends React.Component {
  
  static navigationOptions = {
    header: null
  };
  render() { 
    return (
      <Home /> 
      
    //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //       <Text>Person!</Text>
    //       <Button
    //       title="Go to Person"
    //       onPress={() => this.props.navigation.navigate('Person')}
    //     />
    //   </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home" 
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        {/* <Text><Icon name="rocket" /></Text> */}
        {/* <View>
          <Icomoon name="uniE900"/> 
        </View> */}
 
      </View>
    );
  }
}
class ServiceScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Service!</Text>
        <Button
          title="Go to Setting"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  } 
}
class MerchantPlatformScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Merchant Platform!</Text>
        <Button
          title="Go to Setting"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
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
class Person extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Person!</Text>
      </View>
    );
  } 
}

 
// const Icomoon = createIconSetFromIcoMoon(IcomoonConfig,'LineAwesome','./font/icomoon.ttf'); 
const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },   
  Person: { screen: Person }, 
});  

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});
const ServiceStack = createStackNavigator({
  Service: { screen: ServiceScreen }, 
  Details: { screen: DetailsScreen }, 
});
const MerchantPlatformStack = createStackNavigator({
  MerchantPlatform: { screen: MerchantPlatformScreen }, 
  Details: { screen: DetailsScreen }, 
}); 

export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: HomeStack },  
    Settings: { screen: SettingsStack },
    Service: { screen: ServiceStack }, 
    MerchantPlatform: { screen: MerchantPlatformStack },  
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `md-checkmark-circle`;
        } else if (routeName === 'Settings') {
          iconName =  `ios-airplane` ;
        } else if (routeName === 'Service') {
          iconName = `ios-alarm`;
        } else if (routeName === 'MerchantPlatform') {
          iconName = `ios-appstore`;
        } 

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },    
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }, 
  }
)
);
