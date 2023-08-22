import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export function Contatos() {
    return (
      <View style={styles.container}>
        <Text>Contatos</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})