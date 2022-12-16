import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";

import DropDown0 from "./components/Dropdown0";
import DropDown1 from "./components/Dropdown1";
import DropDown2 from "./components/Dropdown2";
import Checkbox1 from "./components/Checkbox1";
import Checkbox2 from "./components/Checkbox2";
import Checkbox3 from "./components/Checkbox3";



export default function Main() {

  return (
    <PaperProvider>
      <DropDown0/>
    </PaperProvider>
  );


}

AppRegistry.registerComponent(appName, () => Main);
