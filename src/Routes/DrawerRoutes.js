import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Configuracao } from "../screens/Configuracao";
import { Contatos } from "../screens/Contatos";
import { Home } from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Configuração" component={Configuracao} />
        <Drawer.Screen name="Contatos" component={Contatos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
