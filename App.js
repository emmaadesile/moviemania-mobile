import React from "react";
import { colors } from "./src/styles/theme";
import AppScreen from "./src/navigator/AppNavigator";
import { Container } from "./AppStyles";

export default function App() {
  return (
    <Container>
      <AppScreen />
    </Container>
  );
}
