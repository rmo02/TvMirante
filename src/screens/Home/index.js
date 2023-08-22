import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Header } from '../../Components/Header'

export function Home() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{backgroundColor:'black'}}>
          <Text>Oiiiii</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})