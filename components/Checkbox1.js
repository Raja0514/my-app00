import * as React from "react";
import { Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
import {
  Appbar,
  Provider,
  Surface,
  ThemeProvider,
  TextInput,
  Button,
} from "react-native-paper";

import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

const Checkbox1 = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Provider>
      <ThemeProvider>
        <StatusBar />
        <Appbar.Header>
          <Appbar.Content title="Page - 2" color="" />

          <Appbar.Action />
        </Appbar.Header>

        <Text style={{ textAlign: "center", marginTop: 50 }}>
          Categeroy A Faults
        </Text>
        <Surface style={styles.containerStyle}>
          <SafeAreaView style={styles.safeContainerStyle}>
            <View style={styles.Container}>
              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Engine Oil level</Text>

                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Engine Coolant Level </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Power Steering Fluid Level </Text>
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Fuel Leaks </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Fire Extinguisher </Text>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Locking Pins on Tray </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Steering</Text>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Tyre Rims, Wheel Nuts </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Seat Belts </Text>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Flag (Opencut only) </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Foot Brake </Text>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Park Brake </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Hom</Text>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Brake & Indicator Lights </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Lights</Text>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Flashing light </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Reversing Alarm </Text>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>2-Way radio </Text>
              </View>
            </View>
          </SafeAreaView>
        </Surface>
      </ThemeProvider>
      <Button mode="outlined" style={{ margin: 10 }}>
        Next
      </Button>
      <Button mode="outlined" style={{ margin: 10 }}>
        Previous
      </Button>
    </Provider>
  );
};

export default Checkbox1;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 0.75,
    margin: 20,
  },

  safeContainerStyle: {
    flex: 1,
    margin: 10,
  },

  Container: {
    flex: 1,
  },

  row: {
    flexDirection: "row",

    flexWrap: "wrap",

    alignItems: "center",
  },
});
