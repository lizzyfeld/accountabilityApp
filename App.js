import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainPage from "./Views/MainPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePage from "./Views/CreatePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Test" component={Test} /> */}
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          initialParams={{
            eventProps: "",
            startTimeProps: "",
            endTimeProps: "",
          }}
        />
        <Stack.Screen name="CreatePage" component={CreatePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
