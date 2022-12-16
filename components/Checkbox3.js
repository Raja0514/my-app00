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
const Checkbox3 = () => {
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
          Categeroy C Faults
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

                <Text>Minor Oil Leaks </Text>

                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Wipers/Washers </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>First Aid Kit </Text>
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Damage</Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Vehicle Housekeeping </Text>
                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Air conditioner </Text>

                <Checkbox
                  style={{ margin: 10 }}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Fuel Level </Text>
              </View>
            </View>
          </SafeAreaView>
        </Surface>
      </ThemeProvider>
      <Button mode="outlined" style={{ margin: 10 }}>
        Previous
      </Button>
      <Button mode="outlined" style={{ margin: 10 }}>
        Submit
      </Button> 
      {/* submit button need to write condition ussing terniary operator */}
    </Provider>
  );
};

export default Checkbox3;

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
