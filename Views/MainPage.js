import { StyleSheet, Text, View, Pressable } from "react-native";
import { useEvent } from "../context/EventContext";
// import style from './mainPage.css'
export default function MainPage(props) {
  const event = useEvent();
  const { route, navigation } = props;
  console.log(props);
  // const { eventProps } = route.params;

  function onCreateEvent() {
    navigation.navigate("CreatePage");
  }

  return (
    <View style={style.container}>
      <Text style={style.header}></Text>
      <Pressable
        style={style.button}
        onPress={() => {
          onCreateEvent();
        }}
      >
        <Text>Create Event</Text>
      </Pressable>
      <Text>{event.name}</Text>
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
