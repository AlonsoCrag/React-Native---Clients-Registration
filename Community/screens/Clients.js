import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import {  ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, useLazyQuery } from '@apollo/client';
import { Card } from 'react-native-elements';

import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function Clients({ navigation }) {


  const GET_USERS = gql`
    query {
      allUsers {
        Username
        Email
        Picture
      }
    }
  `
  
  let [ final_data, updateData ] = useState(null)

  let [getUsers, { loading, error, data }] = useLazyQuery(GET_USERS, {
    onCompleted: () => { console.log("Its done man gg", data); updateData(data.allUsers); }
  });


  const request = async () => {
    getUsers();
  } 


  useEffect(() => {
    if (final_data !== null) {
      console.log("Data from graphql", final_data)
    }
  })

  const deleteClient = (data) => {
    console.log("Deleting the client...", data.Email);
    fetch(`https://decrag.xyz/api/v1/delete/${data.Email}/`)
    updateData(dataList => dataList.filter(element => element.Email !== data.Email ))
    console.log("New Data", final_data)
  }

  let leftAction = (progress, dragX, data) => {
    console.log("Swipe to the Right");
    return (
      <View style={{ borderRadius: 10, alignSelf: "center", marginHorizontal: 10 }}>
        <TouchableOpacity style={{ backgroundColor: "#580E15", borderRadius: 10 }} onPress={() => deleteClient(data)}>
          <Text style={{ color: "#fff", paddingVertical: 20, paddingHorizontal: 15, fontSize: 16 }}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  let rightAction = (progress, dragX, data) => {
    console.log("Swipe to the Right");
    return (
      <View style={{ borderRadius: 10, alignSelf: "center", marginHorizontal: 10 }}>
        <TouchableOpacity style={{ backgroundColor: "#194D33", borderRadius: 10 }} onPress={() => workByClient(data)}>
          <Text style={{ color: "#fff", paddingVertical: 20, paddingHorizontal: 15, fontSize: 16 }}>Mirar</Text>
        </TouchableOpacity>
      </View>
    );
  }


  let workByClient = (data) => {
    console.log('Getting works made to', data.Email);
    navigation.navigate('Works', {
      data
    })
  }
  

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Todos los clientes registrados podran visualizarse en esta sección.</Text>
        <View style={{ width: 200, borderRadius: 10 }}>
          <TouchableOpacity style={{ backgroundColor: "#0E5848", borderRadius: 10 }} onPress={request}>
            <Text style={styles.text}>Obtener clientes</Text>
          </TouchableOpacity>
        </View>
        {
          (loading == true) ? <Text style={styles.text}>Cargando...</Text> : null
        }
        <View style={{ marginVertical: 5, marginHorizontal: 10, width: Dimensions.get('window').width }}>
          {
            (final_data !== null) ? final_data.map(element => ( 
              <Swipeable renderLeftActions={(progress, dragX) => leftAction(progress, dragX, element)}  renderRightActions={(progress, dragX) => rightAction(progress, dragX, element)} key={element.Email}>
                  <TouchableOpacity>
                    <View key={element.Username} style={{ backgroundColor: "#0E5848", marginVertical: 5, marginHorizontal: 10, borderRadius: 10, display: "flex", flexDirection: "row", alignItems: "center"}}>
                      <Image 
                          source={{ uri: `https://decrag.xyz/media/${element.Picture}` }}
                          style={{ width: 50, height: 50, borderRadius: 100, marginStart: 10 }}
                      />
                      <Text style={{ color: "#fff", fontSize: 18, paddingHorizontal: 20, paddingVertical: 20 }}>{element.Username}</Text>
                    </View>
                </TouchableOpacity>
              </Swipeable>
            )) : null
          }
        </View>
      </View>
    </SafeAreaView>
  );
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
    marginVertical: 10
  }
});