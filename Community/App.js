/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

import NetInfo from "@react-native-community/netinfo";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// Screens
import AppBar from './src/components/AppBar';
import Form from './src/components/Form';
import Offline from './src/components/Offline';
import Home from './screens/Home'
//
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const Example = ({ navigation }) => {
  return (
    <View>
        <View style={{flexDirection: 'row', alignItems: "center", paddingStart: 10, paddingVertical: 10, backgroundColor: "#0A4135"}}>
          <Image 
            // source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            source={require('./src/assets/images/INTELRED.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{color: "#fff", fontSize: 25, marginLeft:20}}>Usuario</Text>
        </View>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row',height:50, backgroundColor: '#0E5848', alignItems: "center", paddingStart: 10} }>
            <Icon name='home' size={25} color="#fff" />
            <Text 
              style = {{color: '#fff',alignContent:'center',alignSelf:'center', marginLeft:20,}}
            >
              Home
            </Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
}

const Drawer = createDrawerNavigator();

class App extends React.Component {

  constructor() {
    super();
    this.state={
      connStatus: null
    }
  }

  componentDidMount() {
    NetInfo.addEventListener(state => {
      console.log("Connection changed", state);
      this.setState({ connStatus: state.isConnected });
    });
  }

  render() {

    if (this.state.connStatus == false) {
      return (
        <>
          <Offline />
        </>
      )
    }


    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Home'
          screenOptions={{
            header: AppBar,
            drawerActiveTintColor: "#fff",
            drawerActiveBackgroundColor: "#121212",
            drawerContentContainerStyle: {backgroundColor: '#0E5848'},
            drawerStyle:{backgroundColor: "#121212"},
            drawerItemStyle: {backgroundColor: null},
          }}
          drawerContent={Example}          
        >
          <Drawer.Screen
            name='Home'
            component={Home}
            options={{
              drawerIcon: ({focused}) => (
                <Icon name='home' size={25} color="#fff" />
              )
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

};



export default App;
