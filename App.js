import * as React from "react";
import Tabs from "./components/BottomTab";
import HomeScreen from "./Screens/Home";
import ReadingScreen from "./Screens/Reading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Article" component={ReadingScreen}  />
        <Stack.Screen
          name="Tab"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
