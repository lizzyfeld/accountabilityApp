import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  FlatList,
} from "react-native";
import { TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { supabase } from "../supabase";
import { MainPage, getEvent } from "./MainPage";

export default function CreatePage({ navigation }) {
  const [eventName, setEventName] = useState("Event name");
  const [date, setDate] = useState("");
  const [startTime, setStart] = useState("");
  const [endTime, setEnd] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isStartTimeVisible, setStartTimeVisibility] = useState(false);
  const [isEndTimeVisible, setEndTimeVisibility] = useState(false);
  const [dateChosen, setDateChosen] = useState(false);
  const [startTimeChosen, setStartTimeChosen] = useState(false);
  const [endTimeChosen, setEndTimeChosen] = useState(false);
  const [currentMode, setCurrentMode] = useState("date");

  const showDatePicker = (mode) => {
    setCurrentMode(mode);
  };

  const hideDateTimePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
    setDateChosen(true);
    hideDateTimePicker();
  };

  const handleStartTimeConfirm = (time) => {
    console.warn("hey", time);
    setStart(time);
    setStartTimeChosen(time);
    setStartTimeVisibility(false);
  };

  const handleEndTimeConfirm = (time) => {
    console.warn("hello", time);
    setEnd(time);
    setEndTimeChosen(time);
    setEndTimeVisibility(false);
  };

  const getEvent = async () => {
    try {
      const { data, error } = await supabase.from("events").select("*");
      // setEvent(data);
      console.log("hii get all the names", data, "error: ", error);
      // console.log("event data, ", event);
    } catch (err) {
      console.log(err);
    }
  };

  const addEvent = async () => {
    try {
      const { data, error } = await supabase.from("events").insert({
        event_name: eventName,
        event_date: date,
        start_time: startTime,
        end_time: endTime,
      });
      navigation.navigate("MainPage", {
        eventProps: eventName,
        dateProps: date.toString(),
        startTimeProps: startTime.toString(),
        endTimeProps: endTime.toString(),
      });
      console.warn("supbase added event name", error);
      getEvent();
    } catch (err) {
      console.log(err);
    }
  };

  const DateChosen = () => {
    return (
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={currentMode}
        onConfirm={handleDateConfirm}
        onCancel={hideDateTimePicker}
      />
    );
  };

  const StartTimeChosen = () => {
    return (
      <DateTimePickerModal
        isVisible={isStartTimeVisible}
        mode={currentMode}
        onConfirm={handleStartTimeConfirm}
        onCancel={() => {
          setStartTimeVisibility(false);
        }}
      />
    );
  };

  const EndTimeChosen = () => {
    return (
      <DateTimePickerModal
        isVisible={isEndTimeVisible}
        mode={currentMode}
        onConfirm={handleEndTimeConfirm}
        onCancel={() => {
          setEndTimeVisibility(false);
        }}
      />
    );
  };

  return (
    // This returns the flat list for objects, missign here!

    // <View style = {styles.container}>
    //   <FlatList
    //     data = {event}
    //     renderItem = {(event) => <Event name = {event.item.event_name} /> }
    //     keyExtractor = {(item) => item.id}
    //   </FlatList>
    // </View>

    <View style={styles.container}>
      {/* <FlatList
        data={event}
        renderItem={(eventData) => (
          <Event
            name={eventData.item.event_name}
            date={eventData.item.event_date}
          />
        )}
        keyExtractor={(item) => item.id}
      /> */}

      <Text style={styles.header}>Make your new event perra!</Text>
      <TextInput
        label="Name of event"
        name="Name of event"
        style={styles.input}
        value={eventName}
        onChangeText={(newText) => setEventName(newText)}
        mode="outlined"
        defaultValue={eventName}
      />
      {/* {!dateChosen && <Button title="Pick Date" onPress={showDatePicker} />} */}
      <Button
        title="Pick Date"
        onPress={() => {
          showDatePicker("date");
          setDatePickerVisibility(true);
        }}
      />
      <DateChosen />
      {/* {!startTimeChosen && (
        <Button title="Pick Start Time" onPress={showDatePicker} />
      )} */}
      <Button
        title="Pick Start Time"
        onPress={() => {
          showDatePicker("time");
          setStartTimeVisibility(true);
        }}
      />
      <StartTimeChosen />
      {/* {!endTimeChosen && (
        <Button title="Pick End Time" onPress={showDatePicker} />
      )} */}
      <Button
        title="Pick End Time"
        onPress={() => {
          showDatePicker("time");
          setEndTimeVisibility(true);
        }}
      />
      <EndTimeChosen />
      <Pressable style={styles.button} onPress={addEvent}>
        <Text style={styles.buttontext}>Create Event</Text>
      </Pressable>
      {/* <Pressable style={styles.button} onPress={getEvent}>
        <Text style={styles.buttontext}>Back to Home</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "pink",
    marginTop: "5%",
  },
  input: {
    width: 100,
    height: 20,
    backgroundColor: "pink",
    marginVertical: 10,
  },
  buttontext: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
