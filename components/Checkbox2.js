import * as React from "react";
import { Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
import {
  Appbar,
  Provider,
  Surface,
  ThemeProvider,
  Button,
} from "react-native-paper";

import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
const Checkbox2 = () => {
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
          Categeroy B Faults
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

                <Text>Gauges & Warning lights </Text>

                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Mirrors </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Drive Belt Tensions </Text>
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Water Leaks </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Major Oil Leaks </Text>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Tyre Condition </Text>
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

export default Checkbox2;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 0.5,
    margin: 20,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 10,
  },
  Container: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
});
