import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  Button,
} from "react-native";
import { TextInput } from "react-native";
// import DatePicker from "react-datepicker";
// import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

//import DateTimePicker from '@react-native-community/datetimepicker';

// import ReactDateInputs from "react-date-inputs";

export default function CreatePage({ navigation }) {
  const [eventName, setEventName] = useState("Event name");

  const [date, setDate] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [dateChosen, setDateChosen] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  // const [startDate, setDate] = useState("DD/MM");

  const [startTime, setStart] = useState("Start time");
  const [endTime, setEnd] = useState("End time");

  const createEvent = () => {
    console.warn([date]);
    navigation.navigate("MainPage", {
      eventProps: eventName,
      dateProps: date.toString(),
      startTimeProps: startTime,
      endTimeProps: endTime,
    });
  };

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
      {/* <TextInput
        label="Month/Date"
        name="Month/Date"
        style={styles.input}
        value={startDate.format}
        onChangeText={(newText) => setDate(newText)}
        mode="outlined"
        defaultValue={startDate}
      /> */}
      {!dateChosen && (
        <Button title="Show Date Picker" onPress={showDatePicker} />
      )}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TextInput
        label="startTime"
        name="startTime"
        style={styles.input}
        value={startTime}
        onChangeText={(newText) => setStart(newText)}
        mode="outlined"
        defaultValue={startTime}
      />
      <TextInput
        label="endTime"
        name="endTime"
        style={styles.input}
        value={endTime}
        onChangeText={(newText) => setEnd(newText)}
        mode="outlined"
        defaultValue={endTime}
      />
      <Pressable style={styles.button} onPress={createEvent}>
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
