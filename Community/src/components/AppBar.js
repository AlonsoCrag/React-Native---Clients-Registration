import { AppBar } from '@react-native-material/core';
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Text, View, StyleSheet } from 'react-native';


const ApplicationBar = () => {
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
                        <Icon name="reorder" size={25} color="#044335" />
                    </View>
                )
            } }
            trailing={props => {
                return (
                    <View>
                        <Icon name="database" size={25} color="#044335" />
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