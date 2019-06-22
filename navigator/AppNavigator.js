import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/Homescreen";
import DetailsScreeen from "../screens/DetailsScreen";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreeen
});

export default createAppContainer(AppNavigator);
