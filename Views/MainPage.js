import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

// import style from './mainPage.css'

{
  /* <link rel="stylesheet" href="mainPage.css"></link> */
}

// props: {  route: sadsdsd, navigation: asdsads, jeff: 'bezos' }
export default function MainPage(props) {
  const { route, navigation } = props;
  console.log(route);
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
        <Text>Create New Event</Text>
      </Pressable>
      <View style={style.eventInfoContainer}>
        <Text style={style.eventInfoText}>
          Event Name: {route.params.eventProps}
        </Text>
        <Text style={style.eventInfoText}>
          Date: {route.params.startTimeProps}
        </Text>
        <Text style={style.eventInfoText}>
          Start Time: {route.params.startTimeProps}
        </Text>
        <Text style={style.eventInfoText}>
          End Time: {route.params.endTimeProps}
        </Text>
      </View>
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
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "pink",
  },
  eventInfoContainer: {
    justifyContent: "space-evenly",
    height: "30%",
    width: "50%",
    borderRadius: 20,
  },
  eventInfoText: {
    color: "black",
    backgroundColor: "pink",
    color: "black",
    height: "10%",
    paddingLeft: 10,
    borderRadius: 20,
  },
});
