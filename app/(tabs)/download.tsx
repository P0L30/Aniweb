"use client";
import React, { useEffect, useState } from "react";
import { fetchTrendingAnime, Anime } from "../../services/apiService";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
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
      <StatusBar style="light" />
      <View>
        <Text style={styles.headerText}>Your donwloads</Text>
      </View>
      <View>
        <View style={styles.vidbox}>
          <Text style={styles.headerText}>Recent</Text>
          <View>
            <ScrollView horizontal>
              {animeList.map((anime) => (
                <TouchableOpacity key={anime.id} style={styles.midbt}>
                  <Link href={"../watch"}>
                    <Image
                      source={{ uri: anime.attributes.posterImage.small }}
                      style={styles.midvid}
                    />
                    <View style={styles.info}>
                      <Text style={styles.animeName}>
                        {anime.attributes.canonicalTitle}
                      </Text>
                      <Text style={styles.smallInfo}>Year | ep number</Text>
                    </View>
                  </Link>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.vidbox}>
          <Text style={styles.headerText}>Been a while</Text>
          <View>
            <ScrollView horizontal>
              {animeList.map((anime) => (
                <TouchableOpacity key={anime.id} style={styles.midbt}>
                  <Link href={"../watch"}>
                    <Image
                      source={{ uri: anime.attributes.posterImage.small }}
                      style={styles.midvid}
                    />
                    <View style={styles.info}>
                      <Text style={styles.animeName}>
                        {anime.attributes.canonicalTitle}
                      </Text>
                      <Text style={styles.smallInfo}>Year | ep number</Text>
                    </View>
                  </Link>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    width: 146,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#040B1C",
    paddingTop: 50,
    gap: 30,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  vidbox: {
    width: "100%",
    height: "auto",
  },
  midbt: {
    width: 146,
    height: "auto",
    borderRadius: 25,
    margin: 10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
  midvid: {
    width: 144,
    height: 205,
    borderRadius: 25,
    marginBottom: 5,
  },
  animeName: {
    color: "white",
    fontSize: 15,
    fontFamily: "sans-serif",
    marginLeft: 10,
    textAlign: "center",
  },
  smallInfo: {
    color: "white",
    fontSize: 12,
    fontWeight: 100,
    fontFamily: "sans-serif",
    marginLeft: 10,
  },
});

export default App;
