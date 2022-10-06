import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { TextInput } from "react-native";

const initialValues = {
  eventName: "Event name",
  date: "Date/Month",
  startTime: "Start Time",
  endTime: "End Time",
}


export default function CreatePage() {
  const [inputValues, setInputValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
    console.log(inputValues)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Your New Event
      </Text>
      <TextInput
        label= "Name of event"
        name = "Name of event"
        style={styles.input}
        value={inputValues.eventName}
        onChangeText={handleChange}
        mode="outlined"
      />
      <TextInput
        label="Month/Date"
        name = "Month/Date"
        style={styles.input}
        value={inputValues.date}
        onChangeText={handleChange}
        mode="outlined"
      />
        <TextInput
        label="startTime"
        name = "startTime"
        style={styles.input}
        value={inputValues.startTime}
        onChangeText={handleChange}
        mode="outlined"
      />
        <TextInput
        label="endTime"
        name = "endTime"
        style={styles.input}
        value={inputValues.endTime}
        onChangeText={handleChange}
        mode="outlined"
      />
      <Pressable style={styles.button}>
        <Text>Create Event</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'pink',
  },
  input: {
    width: 100,
    height: 20,
    backgroundColor: 'pink',
    marginVertical: 10,
  },
});