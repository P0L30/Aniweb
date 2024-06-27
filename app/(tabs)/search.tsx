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
import { Link } from "expo-router";

const App = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredAnimeList = animeList.filter((anime) =>
    anime.attributes.canonicalTitle
      .toLowerCase()
      .startsWith(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What do you want to watch"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.searchbox}>
        {searchQuery ? (
          <ScrollView style={styles.scroll}>
            {filteredAnimeList.map((anime) => (
              <TouchableOpacity key={anime.id} style={styles.textbox}>
                <Link href="../watch">
                  <Text style={styles.text}>
                    {anime.attributes.canonicalTitle}
                  </Text>
                </Link>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : null}
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
    color: "white",
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
