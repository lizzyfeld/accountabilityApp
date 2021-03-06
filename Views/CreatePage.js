import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { TextInput } from "react-native";



export default function CreatePage() {
    const [inputValues, setInputValues] = React.useState({
        name: "",
        email: "",
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
        label="Name"
        style={styles.input}
        value={inputValues.name}
        onChangeText={(text) => handleChange('Name', text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Email"
        style={styles.input}
        value={inputValues.email}
        onChangeText={(text) => handleChange('Email', text)}
        mode="outlined"
        style={styles.input}
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
    backgroundColor: 'blue',
    marginVertical: 10,
  },
});