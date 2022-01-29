/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AppBar from './src/components/AppBar';
import Form from './src/components/Form';


const App = () => {

  console.log("Height", Dimensions.get('window').height);
  console.log("Width", Dimensions.get('window').width);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AppBar />
        <View style={styles.child}>
          <Text style={styles.text}>Añadir cliente</Text>
          <Form />
        </View>
      </View>
    </SafeAreaView>
  );
};

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

export default App;
