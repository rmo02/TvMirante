import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { Component, useState } from "react";
import nario from "../../../assets/nario.png";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  { label: "Nario", value: "1", profissao: "Repórter", tel: "(98)91234-5678" },
  {
    label: "Ramon",
    value: "2",
    profissao: "Camera",
    tel: "(98)91234-5678",
  },
  { label: "Fylip", value: "3", profissao: "Repórter", tel: "(98)91234-5678" },
  {
    label: "Neto",
    value: "4",
    profissao: "Camera",
    tel: "(98)91234-5678",
  },
  {
    label: "Vinicius",
    value: "5",
    profissao: "Repórter",
    tel: "(98)91234-5678",
  },
  {
    label: "Arlindo",
    value: "6",
    profissao: "Camera",
    tel: "(98)91234-5678",
  },
  {
    label: "Pablo",
    value: "7",
    profissao: "Camera",
    tel: "(98)91234-5678",
  },
  { label: "Edson", value: "8", profissao: "Repórter", tel: "(98)91234-5678" },
];

const options = ["Live1", "Live2", "Live3", "Live4", "Live5", "Live6"];

export function CardHibrida({ title }) {
  const [value, setValue] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // Novo estado para controlar a opção selecionada

  // Retrieve the selected item from the data array
  const selectedDataItem = data.find((item) => item.value === value);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  const renderLiveOptions = () => {
    return options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.touchableOpacity,
          selectedOption === index && styles.selectedLive,
        ]}
        onPress={() => setSelectedOption(index)} // Atualizar a opção selecionada
      >
        <Text style={styles.text}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View
      style={{
        height: 300,
        width: 300,
        backgroundColor: "#284255",
        borderRadius: 36,
        paddingHorizontal: 30,
        marginVertical: 10,
        marginHorizontal: 10,
      }}
    >
      {/* Dados da pessoa */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 60, height: 180 }}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
            }}
            source={nario}
          />
        </View>

        <View style={{ marginLeft: 10, marginTop: 10 }}>
          <View
            style={{
              width: 150,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "#FFFFFF",
              padding: 5,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>{title}</Text>
          </View>

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="black"
                name="Safety"
                size={20}
              />
            )}
            renderItem={renderItem}
          />

      {/* Profissao, Contato, and Telefone */}
      {selectedDataItem && (
        <View style={{ marginTop: 5 }}>
          {selectedDataItem.profissao === "Camera" ? (
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <MaterialCommunityIcons
                name="camera-gopro"
                size={24}
                color="#5084AB"
              />
              <Text style={{ color: "white", marginLeft: 20 }}>
                Cinegrafista
              </Text>
            </View>
          ) : (
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <FontAwesome name="microphone" size={24} color="#5084AB" />
              <Text style={{ color: "white", marginLeft: 20 }}>Repórter</Text>
            </View>
          )}

          <View style={{ flexDirection: "row" }}>
            <Feather name="phone-call" size={24} color="#5084AB" />
            <Text style={{ color: "white", marginLeft: 10 }}>
              {selectedDataItem.tel}
            </Text>
          </View>
        </View>
      )}
        </View>
      </View>

      {/* Lives */}
      <View style={styles.ContainerLives}>{renderLiveOptions()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    width: 190,
    marginVertical: 16,
    height: 40,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  ContainerLives: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  touchableOpacity: {
    width: 75,
    padding: 10,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  selectedItem: {
    backgroundColor: "#467495",
    borderColor: "#2D4B60",
  },
  selectedTextItem: {
    color: "#2D4B60",
  },
  selectedLive: {
    backgroundColor: "#467495",
    borderColor: "#2D4B60",
  },
});
