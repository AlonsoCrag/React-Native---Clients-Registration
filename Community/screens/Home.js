import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
} from 'react-native';

import AppBar from '../src/components/AppBar';
import Form from '../src/components/Form';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HomeManager() {
    return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <AppBar /> */}
        <View style={styles.child}>
          <Text style={styles.text}>Añadir cliente</Text>
          <Form />
        </View>
      </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: "#121212",
  },
  child: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  }
});