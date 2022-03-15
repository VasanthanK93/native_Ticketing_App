import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Navbar() {
    
    return(
        <View style={style.header}>
            <Text style={style.title}>E-Cube</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        height:80,
        paddingTop: 38,
        backgroundColor: 'blue'
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})