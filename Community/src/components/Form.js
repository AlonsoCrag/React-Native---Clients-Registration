import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ActivityIndicator, NativeModules } from 'react-native';
import  { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const Form = () => {

    let  { control, handleSubmit, formState: {errors}, reset } = useForm();
    
    let [ username, updateUsername ] = useState('');
    let [ email, updateEmail ] = useState('');
    let [ password, updatePassword ] = useState('');

    let [ submit, updateSubmit ] = useState(null);
    let [ success, updateSuccess ] = useState(null);

    let [ errorsRegex, updateRegexErrors ] = useState(null);

    let [ uriFile, updateUri ] = useState('');

    const ValidateRegex = ({ email }) => {
        let emailPattern = /^.+@(gmail|outlook|hotmail)\.(mx|com)/
        console.log("Regex", emailPattern.test(email));
        (emailPattern.test(email) === true) ? updateRegexErrors(errorsRegex => errorsRegex = null) : updateRegexErrors(errorsRegex => errorsRegex = true);
    }
    

    function getData() {
        console.log("Data from input fields")
        console.log(username, email, password);
    }


    // async function sendBackend(data) {
    //     let formData = new FormData();
    //     Object.keys(data).forEach(key => formData.append(key, data[key]));
    //     // let url = 'http://143.198.163.80:8000/api/v1/register'
    //     // let url = 'https://decrag.xyz/api/v1/register' -> REAL HOST, UNCOOMENT BEFORE DEPLOY
    //     let url = 'http://10.0.2.2:8000/api/v1/register/'
    //     await axios.post(url, data, {
    //         hedars: {
    //             "content-type": "application/json;charset=utf-8"
    //         }
    //     });
    // }

    async function sendBackend(data) {
        
        let formData = new FormData();
        // let url = 'https://decrag.xyz/api/v1/register' -> REAL HOST, UNCOOMENT BEFORE DEPLOY
        formData.append("username", data.username);
        formData.append("password", data.password)
        formData.append("email", data.email)
        formData.append("picture", {
            name: 'image.jpg',
            type: 'image/jpg',
            uri: uriFile
        });
        console.log("FormData ->", formData);
        let resp = await fetch('https://decrag.xyz/api/v1/register/', {
            method: 'POST',
            body: formData,
            headers: 'multipart/form-data'
        });
        return resp.status
    }

    function Submit(data) {
        // console.log("Data", data, data.username)
        ValidateRegex(data);
        updateSubmit(true)

        sendBackend(data)
        .then(value => {
            updateSubmit(null);
            updateSuccess(true);
            updateUsername('');
            updateEmail('');
            updatePassword('');
            console.log("Submitted ->", value);
        })
        .catch(err => {
            updateSubmit(null);
            console.log("failed............");
        });

        console.log("EVERYTHING HAS BEEN DONE")
    }


    const takePicture = () => {
        image_picker();
    }

    async function image_picker () {
        console.log("Image picker")
        let result = await launchImageLibrary();
        let uri = result.assets[0].uri;
        console.log(uri);
        updateUri(uri);
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
                                    updateUsername(text)
                                    return onChange(text);
                                }}
                                placeholder="Username"
                                value={username}
                            />
                        )
                    }}
                    name="username"
                    rules={{ required: true }}
                />
            </View>
            {(errors.username?.type === 'required') ? <Text style={{color: "#C91C1C", marginVertical: 4}}>El campo username es requerido</Text> : null }
            <View style={styles.view}>
                <Controller
                    control={control}
                    render={( {field: { onChange, value } } ) => {
                        return (
                            <TextInput
                                style={{marginHorizontal: 15, flex: 1, marginTop: 5, paddingHorizontal: 10, borderWidth: 2, borderColor: '#0E5848', paddingVertical: 8, color: "#fff", backgroundColor: "#212121"}}
                                onChangeText={text => {
                                    updateEmail(text)
                                    return onChange(text);
                                }}
                                placeholder="Email"
                                value={email}
                            />
                        )
                    }}
                    name="email"
                    rules={{ required: true }}
                />
            </View>
            {(errors.email?.type === 'required') ? <Text style={{color: "#C91C1C", marginVertical: 4}}>El campo email es requerido</Text> : null }
            {(errorsRegex == true) ? <Text style={{color: "#C91C1C", marginVertical: 4}}>Email no aceptable</Text> : null}
            <View style={styles.view}>
                <Controller
                    control={control}
                    render={( {field: { onChange, value } } ) => {
                        return (
                            <TextInput
                                style={{marginHorizontal: 15, flex: 1, marginTop: 5, paddingHorizontal: 10, borderWidth: 2, borderColor: '#0E5848', paddingVertical: 8, color: "#fff", backgroundColor: "#212121"}}
                                onChangeText={text => {
                                    updatePassword(text)
                                    return onChange(text);
                                }}
                                placeholder="Password"
                                value={password}
                            />
                        )
                    }}
                    name="password"
                    rules={{ required: true }}
                />
            </View>
            <View style={{marginTop: 10, display: "flex", flexDirection: "row"}}>
                <TouchableOpacity style={{backgroundColor: '#0E5848', flex: 1, marginHorizontal: 15}} onPress={takePicture}>
                    <Text style={{textAlign: "center", fontSize: 22, color: "#fff", paddingVertical: 5}}>Foto</Text>
                </TouchableOpacity>
            </View>
            {(errors.password?.type === 'required') ? <Text style={{color: "#C91C1C", marginVertical: 4}}>El campo password es requerido</Text> : null }
            <View style={{marginTop: 10, display: "flex", flexDirection: "row"}}>
                <TouchableOpacity style={{backgroundColor: '#0E5848', flex: 1, marginHorizontal: 15}} onPress={handleSubmit(Submit)}>
                    <Text style={{textAlign: "center", fontSize: 22, color: "#fff", paddingVertical: 5}}>Enviar</Text>
                </TouchableOpacity>
            </View>
            {
                (submit === null) ? null : <View style={{marginVertical: 10}}> 
                    <ActivityIndicator  size="large" color="#0E5848" />
                </View>
            }
            {
                (success === null) ? null : <View style={{marginVertical: 10}}>
                    <Icon name="check" size={30} color="#044335" />
                </View>
            }
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