import React from 'react';
import { StyleSheet, View, Text } from "react-native";

import LoginSVG from "./assets/images/logo.svg";
import { Link } from "expo-router";

const login = () => {
    return (
        <View style={styles.container}>
            <LoginSVG x={93} y={116} height={212} width={217} style={styles.logo}/>
            <Text>Logi Screehoiiohohoihohohoohoihoiiohiohohion</Text>
            <Link href="/">Back Home</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#7fc893',
    },
    logo:{
        marginBottom:50,
        marginTop:116
    }

})

export default login