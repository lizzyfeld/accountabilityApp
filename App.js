import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainPage from "./Views/MainPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePage from "./Views/CreatePage";
import { EventContextProvider } from "./context/EventContext";

const Stack = createNativeStackNavigator();

function Test(props) {
  console.log("In test", props);
  return <View />;
}
export default function App() {
  return (
    <EventContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Test" component={Test} /> */}
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            // getId={({ params }) => params.id}
          />
          <Stack.Screen name="CreatePage" component={CreatePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </EventContextProvider>
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
