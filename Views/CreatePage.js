import React, { useState }  from 'react';
import { StyleSheet, Text, View, Pressable,} from 'react-native';
import { TextInput } from "react-native";




export default function CreatePage() {
  const [eventName, setEventName] = useState("Event name");
  const [date, setDate] = useState("Date/Month");
  const [startTime, setStart] = useState("Start time");
  const [endTime, setEnd] = useState("End time");


  return (
    <View style={styles.container}>
      <Text style={styles.header}>
       Make your new event perra!
      </Text>
      <TextInput
        label="Name of event"
        name="Name of event"
        style={styles.input}
        value={eventName}
        onChangeText={newText => setEventName(newText)}
        mode="outlined"
        defaultValue={eventName}
      />
      <TextInput
        label="Month/Date"
        name = "Month/Date"
        style={styles.input}
        value={date}
        onChangeText={newText => setDate(newText)}
        mode="outlined"
        defaultValue={date}
      />
        <TextInput
        label="startTime"
        name = "startTime"
        style={styles.input}
        value={startTime}
        onChangeText={newText => setStart(newText)}
        mode="outlined"
        defaultValue= {startTime}
      />
        <TextInput
        label="endTime"
        name = "endTime"
        style={styles.input}
        value={endTime}
        onChangeText={newText => setEnd(newText)}
        mode="outlined"
        defaultValue= {endTime}

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