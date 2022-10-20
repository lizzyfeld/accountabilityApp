import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

// import style from './mainPage.css'

{
  /* <link rel="stylesheet" href="mainPage.css"></link> */
}

// props: {  route: sadsdsd, navigation: asdsads, jeff: 'bezos' }
export default function MainPage(props) {
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
