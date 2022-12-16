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
          <Appbar.Content title=" PAGE - 1 " color="" />

          <Appbar.Action />
        </Appbar.Header>

        <Text style={{ textAlign: "center", margin: 10 }}>
          METS – TRUCK PLOD
        </Text>

        <Surface style={styles.containerStyle}>
          <SafeAreaView style={styles.safeContainerStyle}>
            <DropDown
              label={"Truck Number"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={gender}
              setValue={setGender}
              list={genderList}
            />

            <View style={styles.spacerStyle} />

            <TextInput
              label="Engine Hours in SOS"
              value={hours}
              mode={"outlined"}
              onChangeText={(text) => setHours(text)}
            />

            <View style={styles.spacerStyle} />

            <TextInput
              label="Date"
              value={text}
              mode={"outlined"}
              onChangeText={(text) => setText(text)}
            />

            <View style={styles.spacerStyle} />

            <TextInput
              label="Operator Name"
              value={text}
              mode={"outlined"}
              onChangeText={(text) => setText(text)}
            />

            <View style={styles.spacerStyle} />

            <DropDown
              label={"Hours Worked "}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={gender}
              setValue={setGender}
              list={genderList}
            />

            <View style={styles.spacerStyle} />

            <DropDown
              label={"Shift"}
              mode={"outlined"}
              visible={showMultiSelectDropDown}
              showDropDown={() => setShowMultiSelectDropDown(true)}
              onDismiss={() => setShowMultiSelectDropDown(false)}
              value={colors}
              setValue={setColors}
              list={colorList}
              multiSelect
            />

            <View style={styles.spacerStyle} />

            <DropDown
              label={"Crew"}
              mode={"outlined"}
              visible={showMultiSelectDropDown}
              showDropDown={() => setShowMultiSelectDropDown(true)}
              onDismiss={() => setShowMultiSelectDropDown(false)}
              value={colors}
              setValue={setColors}
              list={colorList}
              multiSelect
            />

            <View style={styles.spacerStyle} />
            <View style={styles.spacerStyle} />

            <Button
              mode="outlined"
              onPress={() => console.log("Pressed")}
              uppercase="true"
            >
              Submit
            </Button>
          </SafeAreaView>
        </Surface>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 0.85,
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
