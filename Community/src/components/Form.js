import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import  { useForm, Controller } from 'react-hook-form';

const Form = () => {

    let  { control, handleSubmit, errors } = useForm();
    
    let [ username, updateUsername ] = useState('Empty-Username');
    let [ email, updateEmail ] = useState('Empty-Email');
    let [ password, updatePassword ] = useState('Empty-Password');

    function getData() {
        console.log("Data from input fields")
        console.log(username, email, password);
    }

    return (
        <>
            <View style={styles.view}>
                <Controller
                    control={control}
                    render={( {field: { onChange, value } } ) => {
                        return (
                            <TextInput
                                style={{marginHorizontal: 15, flex: 1, marginTop: 5, paddingHorizontal: 10, borderWidth: 2, borderColor: '#0E5848', paddingVertical: 8, color: "#fff", backgroundColor: "#212121"}}
                                onChangeText={text => {
                                    console.log("Current value ->", value);
                                    return onChange(text);
                                }}
                                placeholder="Username"
                            />
                        )
                    }}
                    name="username"
                    rules={{ required: true }}
                />
            </View>
            <View style={styles.view}>
                <Controller
                    control={control}
                    render={( {field: { onChange, value } } ) => {
                        return (
                            <TextInput
                                style={{marginHorizontal: 15, flex: 1, marginTop: 5, paddingHorizontal: 10, borderWidth: 2, borderColor: '#0E5848', paddingVertical: 8, color: "#fff", backgroundColor: "#212121"}}
                                onChangeText={text => {
                                    console.log("Current value ->", value);
                                    return onChange(text);
                                }}
                                placeholder="Email"
                            />
                        )
                    }}
                    name="email"
                    rules={{ required: true }}
                />
            </View>
            <View style={styles.view}>
                <Controller
                    control={control}
                    render={( {field: { onChange, value } } ) => {
                        return (
                            <TextInput
                                style={{marginHorizontal: 15, flex: 1, marginTop: 5, paddingHorizontal: 10, borderWidth: 2, borderColor: '#0E5848', paddingVertical: 8, color: "#fff", backgroundColor: "#212121"}}
                                onChangeText={text => {
                                    console.log("Current value ->", value);
                                    return onChange(text);
                                }}
                                placeholder="Password"
                            />
                        )
                    }}
                    name="password"
                    rules={{ required: true }}
                />
            </View>
            <View style={{marginTop: 10, display: "flex", flexDirection: "row"}}>
                <TouchableOpacity style={{backgroundColor: '#0E5848', flex: 1, marginHorizontal: 15}}>
                    <Text style={{textAlign: "center", fontSize: 22, color: "#fff", paddingVertical: 5}}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

let styles = StyleSheet.create({
    input: {
        backgroundColor: "#282828",
        color: "#fff",
        borderRadius: 10,
        paddingHorizontal: 25,
        borderColor: "#fff",
        marginTop: 5,
    },
    view: {
        display: "flex",
        flexDirection: "row",
        marginTop: 5,
        // padding: 15,
    }
});

export default Form;