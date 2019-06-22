import React from "react";
import { Provider } from "./context";
import HomeScreen from "./screens/Homescreen";
import AppNavigator from "./navigator/AppNavigator";

export default function App() {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
}
