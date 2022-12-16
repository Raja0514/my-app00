import {
  Appbar,
  Provider,
  Surface,
  ThemeProvider,
  TextInput,
  Button,
} from "react-native-paper";

import React, { useState } from "react";

import { SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";

import DropDown from "react-native-paper-dropdown";

function DropDown1() {
  const [showDropDown, setShowDropDown] = useState(false);

  const [gender, setGender] = useState("");

  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);

  const [colors, setColors] = useState("");

  const [text, setText] = React.useState("");

  const [hours, setHours] = React.useState("");

  const genderList = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Others",
      value: "others",
    },
  ];

  const colorList = [
    {
      label: "White",
      value: "white",
    },
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Orange",
      value: "orange",
    },
  ];

  return (
    <Provider>
      <ThemeProvider>
        <StatusBar />

        <Appbar.Header>
          <Appbar.Content title=" PAGE - 2 " color="" />

          <Appbar.Action />
        </Appbar.Header>

        <Text style={{ textAlign: "center", marginTop: 40,marginBottom:40 }}>
          Pre-Start-This is where the operator does the check on the trucks.
        </Text>

        <Surface style={styles.containerStyle}>
          <SafeAreaView style={styles.safeContainerStyle}>
            <TextInput
              label="Odameter Reading"
              value={hours}
              mode={"outlined"}
              onChangeText={(text) => setHours(text)}
            />
            <View style={styles.spacerStyle} />
            <TextInput
              label="Engine Hours SOS"
              value={hours}
              mode={"outlined"}
              onChangeText={(text) => setHours(text)}
            />

            <View style={styles.spacerStyle} />
            <View style={styles.spacerStyle} />

            <Button
              mode="outlined"
              onPress={() => console.log("Pressed")}
              uppercase="true"
            >
              Next
            </Button>
          </SafeAreaView>
        </Surface>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 0.5,
  },

  spacerStyle: {
    marginBottom: 10,
  },

  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
});

export default DropDown1;
