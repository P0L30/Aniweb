"use client";
import React, { useEffect, useState } from "react";
import { fetchTrendingAnime, Anime } from "../../services/apiService";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

const App = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  useEffect(() => {
    const getTrendingAnime = async () => {
      try {
        const data = await fetchTrendingAnime();
        setAnimeList(data);
      } catch (error) {
        console.error(error);
      }
    };

    getTrendingAnime();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="What do you want to watch"
        />
      </View>
      <View style={styles.searchbox}>
        <ScrollView style={styles.scroll}>
          {animeList.map((anime) => (
            <TouchableOpacity style={styles.textbox}>
              <Text style={styles.text}>{anime.attributes.canonicalTitle}</Text>
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
    color: "#FCFBFC",
    fontSize: 17,
  },
});

export default App;
