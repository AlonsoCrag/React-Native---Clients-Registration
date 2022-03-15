import { AppBar } from '@react-native-material/core';
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {createAppContainer } from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ApplicationBar = ({navigation}) => {

    const BurguerAction = () => {
        console.log("Open menu");
        navigation.openDrawer();
    }

    return (
        <AppBar
            title="Intelred"
            subtitle="Approach to services"
            centerTitle={true}
            style={styles.container}
            tintColor='#fff'
            color='#0E5848'
            leading={ props => {
                return (
                    <View>
                        <TouchableOpacity onPress={BurguerAction}>
                            <Icon name="reorder" size={25} color="#044335" />
                        </TouchableOpacity>
                    </View>
                )
            } }
            trailing={props => {
                return (
                    <View>
                        <TouchableOpacity onPress={() => console.log("Database...", navigation.navigate('Clients')) }>
                            <Icon name="database" size={25} color="#044335" />
                        </TouchableOpacity>
                    </View>
                );
            }}
        />
    );
}

let styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    text: {
        color: "#fff",
        fontSize: 25,
    }
});

export default ApplicationBar;