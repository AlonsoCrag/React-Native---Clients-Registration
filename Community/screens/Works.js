import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const Works = ({ navigation, route }) => {

    const { data } = route.params;

    console.log("Route params", data)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Trabajos realizados a: </Text>
            <Text style={styles.text2}>{ data.Username }</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      height: Dimensions.get('window').height,
      backgroundColor: "#121212",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    text: {
      color: "#fff",
      fontSize: 18,
      textAlign: "center",
      marginTop: 10
    },
    text2: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        marginTop: 0
    }
});

export default Works;

