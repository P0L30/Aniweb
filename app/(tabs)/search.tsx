import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";
const App = () => {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="What do you want to watch"
        />
      </View>
      <View style={styles.searchbox}>
        <ScrollView style={styles.scroll}>
          {[
            "One piece",
            "Naruto",
            "Bleach",
            "Attack on Titan",
            "Moonlit Fantasy",
            "Food wars",
            "Dragon ball super",
            "Bofuri",
            "Mushoku tensei",
            "Boruto",
            "By the grace of the gods",
            "Tower of Gods",
          ].map((season) => (
            <TouchableOpacity key={season} style={styles.textbox}>
              <Text style={styles.text}>{season}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#040B1C",
    paddingTop: 30,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#000",
    borderRadius: 20,
    borderBottomWidth: 5,
    borderColor: "#071432",
  },
  textbox: {
    width: "100%",
    justifyContent: "center",
    height: 70,
    borderBottomWidth: 5,
    borderColor: "#071432",
    paddingLeft: 20,
  },
  searchbox: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  scroll: {
    width: "100%",
    height: "auto",
  },
  text: {
    color: "white",
    fontSize: 17,
  },
});

export default App;
