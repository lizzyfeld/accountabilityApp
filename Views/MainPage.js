import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import { supabase } from "../supabase";
import React, { useState } from "react";
import gregorian_en from "react-date-object/locales/gregorian_en";

export default function MainPage(props) {
  const { route, navigation } = props;
  console.log(route);
  const date = route.params.dateProps.split(" ");
  const [event, setEvent] = useState([]);
  console.warn("here", date);

  function onCreateEvent() {
    navigation.navigate("CreatePage");
  }

  React.useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    try {
      const { data, error } = await supabase.from("events").select("*");
      setEvent(data);
      console.log("hii get all the names", data, "error: ", error);
      console.log("event data, ", event);
    } catch (err) {
      console.log(err);
    }
  };

  const Event = ({ name, date }) => {
    console.log(name);
    return (
      <View style={style.eventCard}>
        <Text>{name}</Text>
        <Text>{date}</Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <Text style={style.header}> Your Upcoming Perra</Text>
      <View style={style.buttonContainer}>
        <Pressable
          style={style.button}
          onPress={() => {
            onCreateEvent();
          }}
        >
          <Text>Create New Event</Text>
        </Pressable>
      </View>
      <View style={style.flatListContent}>
        <FlatList
          data={event}
          renderItem={(eventData) => (
            <Event
              name={eventData.item.event_name}
              // date={eventData.item.event_date}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* <View style={style.eventInfoContainer}></View> */}
    </View>
  );
}

{
  /* <Text style={style.eventInfoText}>
          Event Name: {route.params.eventProps}
        </Text>
        <Text style={style.eventInfoText}>Date: {route.params.dateProps}</Text>
        <Text style={style.eventInfoText}>
          Start Time: {route.params.startTimeProps}
        </Text>
        <Text style={style.eventInfoText}>
          End Time: {route.params.endTimeProps}
        </Text> */
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 40,
  },
  button: {
    // alignItems: "center",
    // justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    // elevation: 3,
    backgroundColor: "pink",
  },
  buttonContainer: {
    paddingTop: 5,
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
  flatListContent: {
    height: "auto",
    width: "50%",
    backgroundColor: "yellow",
  },
  eventCard: {
    backgroundColor: "green",
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
});
