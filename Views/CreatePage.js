import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {supabase}  from "../supabase";

export default function CreatePage({ navigation }) {
  const [eventName, setEventName] = useState("Event name");
  const [date, setDate] = useState("");
  const [startTime, setStart] = useState("Start time");
  const [endTime, setEnd] = useState("End time");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateChosen, setDateChosen] = useState(false);
  const [startTimeChosen, setStartTimeChosen] = useState(false);
  const [endTimeChosen, setEndTimeChosen] = useState(false);
  const [currentMode, setCurrentMode] = useState("date");

  const showDatePicker = (mode) => {
    setCurrentMode(mode);
    setDatePickerVisibility(true);
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
    hideDateTimePicker();
  };

  const handleEndTimeConfirm = (time) => {
    console.warn("hello", time);
    setEnd(time);
    setEndTimeChosen(time);
    hideDateTimePicker();
  };

  const createEvent = () => {
    console.warn([date]);
    navigation.navigate("MainPage", {
      eventProps: eventName,
      dateProps: date.toString(),
      startTimeProps: startTime.toString(),
      endTimeProps: endTime.toString(),
    });
    
  };
  const addEvent = async () => {
    try {
      const {data, error } = await supabase.from('events').insert({
        event_name: eventName

      });
      console.log("supbase added event name", error);
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View style={styles.container}>
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
      <Button title="Pick Date" onPress={() => showDatePicker("date")} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={currentMode}
        onConfirm={handleDateConfirm}
        onCancel={hideDateTimePicker}
      />
      {/* {!startTimeChosen && (
        <Button title="Pick Start Time" onPress={showDatePicker} />
      )} */}
      <Button title="Pick Start Time" onPress={() => showDatePicker("time")} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={currentMode}
        onConfirm={handleStartTimeConfirm}
        onCancel={hideDateTimePicker}
      />
      {/* {!endTimeChosen && (
        <Button title="Pick End Time" onPress={showDatePicker} />
      )} */}
      <Button title="Pick End Time" onPress={() => showDatePicker("time")} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={currentMode}
        onConfirm={handleEndTimeConfirm}
        onCancel={hideDateTimePicker}
      />
      <Pressable style={styles.button} onPress={addEvent}>
        <Text style={styles.buttontext}>Create Event</Text>
      </Pressable>
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
    marginTop: "20%",
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
