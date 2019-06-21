import React from "react";
import { Provider } from "./context";
import HomeScreen from "./screens/Homescreen";

export default function App() {
  return (
    <Provider>
      <HomeScreen />
    </Provider>
  );
}
