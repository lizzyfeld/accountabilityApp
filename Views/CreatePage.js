import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { TextInput } from "react-native";



export default function CreatePage() {
  const [inputValues, setInputValues] = React.useState({
    eventName: "Event name",
    date: "Date/Month",
    startTime: "Start Time",
    endTime: "End Time",

  });

  const handleChange = (name, text) => {
    setInputValues({
      //   ...inputValues,
      [name]: text,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Your New Event
      </Text>
      <TextInput
        label="Name of event"
        style={styles.input}
        value={inputValues.eventName}
        onChangeText={newText => setInputValues(newText)}
        mode="outlined"
      />
      <TextInput
        label="Month/Date"
        style={styles.input}
        value={inputValues.date}
        onChangeText={newText => setInputValues(newText)}
        mode="outlined"
      />
        <TextInput
        label="startTime"
        style={styles.input}
        value={inputValues.startTime}
        onChangeText={newText => setInputValues(newText)}
        mode="outlined"
      />
        <TextInput
        label="endTime"
        style={styles.input}
        value={inputValues.endTime}
        onChangeText={newText => setInputValues(newText)}
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