import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { Header } from "../../Components/Header";
import { CardHibrida } from "../../Components/CardHibrida";

const data = [ "Híbrida 1", "Híbrida 2", "Híbrida 3", "Híbrida 4", "Híbrida 5", "Híbrida 6", "Híbrida 7", "Híbrida 8" ]

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {
          data.map((hibrida, index) => {
            return(
            <CardHibrida
              key={index}
              title={hibrida}
            />)
            
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
