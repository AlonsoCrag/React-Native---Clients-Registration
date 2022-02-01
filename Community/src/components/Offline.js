import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
}
from 'react-native'

const OfflineStatus = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Lo sentimos...</Text>
                    <Text style={{ color: "#fff" }}>
                        No tienes Internet. Verifica tu conexión.
                    </Text>
                    <View style={{ display:"flex", flexDirection:"row", justifyContent: "center", marginTop: 10 }}>
                        <Image source={require('../assets/images/INTELRED.png')} style={{ width: 150, height: 150, }} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

let styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: "#121212",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#fff",
        fontSize: 25,
        textAlign: "center"
    }
});

export default OfflineStatus;