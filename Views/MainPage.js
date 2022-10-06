import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
// import style from './mainPage.css'

{
  /* <link rel="stylesheet" href="mainPage.css"></link> */
}

export default function MainPage({ navigation, route }) {
  function onCreateEvent() {
    navigation.navigate("CreatePage");
  }

  return (
    <View style={style.container}>
      <Text style={style.header}>Events</Text>
      <Text style={style.header}>{route.params.paramKey.name}</Text>
      <Pressable
        style={style.button}
        onPress={() => {
          onCreateEvent();
        }}
      >
        <Text>Create Event</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "pink",
  },
});
