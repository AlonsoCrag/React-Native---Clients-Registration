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
import Home from './screens/Home';
import Clients from './screens/Clients';
//
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {  ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

import Works from './screens/Works';

const CustomDrawer = ({ navigation }) => {
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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
const Stack = createNativeStackNavigator();

let client = new ApolloClient({
  uri: 'https://decrag.xyz/graphql/',
  cache: new InMemoryCache()
});


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
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Drawer.Navigator
              initialRouteName='Home' // Change this to test routes
              screenOptions={{
                header: AppBar,
                drawerActiveTintColor: "#fff",
                drawerActiveBackgroundColor: "#121212",
                drawerContentContainerStyle: {backgroundColor: '#0E5848'},
                drawerStyle:{backgroundColor: "#121212"},
                drawerItemStyle: {backgroundColor: null},
              }}
              drawerContent={CustomDrawer}          
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
              <Drawer.Screen
                name='Clients'
                component={Clients}
                options={{
                  drawerIcon: ({focused}) => (
                    <Icon name='home' size={25} color="#fff" />
                  )
                }}
              />
              <Drawer.Screen 
                name='Works'
                component={Works}
              />
            </Drawer.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }

};



export default App;
