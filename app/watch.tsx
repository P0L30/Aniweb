"use client";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  fetchTrendingAnime,
  Anime,
  fetchAnimeGenre,
  Genre,
} from "../services/apiService";
// import { Link } from "expo-router";

const App = () => {
  const [fontsLoaded] = useFonts({
    Blacknorthdemo: require("@/assets/fonts/Blacknorthdemo-mLE25.otf"),
  });

  const [genreList, setGenreList] = useState<Genre[]>([]);
  useEffect(() => {
    const getAnimeGenre = async () => {
      try {
        const data = await fetchAnimeGenre();
        setGenreList(data);
      } catch (error) {
        console.error(error);
      }
    };

    getAnimeGenre();
  }, []);

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
      {/* <ScrollView style={styles.scrollbox}> */}
      {animeList.length > 0 && (
        <View style={styles.centered}>
          <Image
            source={{
              uri: animeList[0].attributes.posterImage.large,
            }}
            style={styles.backgroundImage}
          />
          <LinearGradient
            colors={["transparent", "#040B1C"]}
            style={styles.gradient}
          >
            <Text style={styles.title}>
              {animeList[0].attributes.canonicalTitle}
            </Text>
          </LinearGradient>
        </View>
      )}
      {animeList.map((anime) => (
        <View style={styles.infoContainer}>
          <View>
            <View style={styles.rowBetween}>
              <View>
                <Text style={styles.mainTitle}>
                  {animeList[0].attributes.canonicalTitle}
                </Text>
                <Text style={styles.subTitle}>
                  1999 - | Action , Advancer , Comedy | 5.0
                </Text>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play" style={styles.playbt} />
              </TouchableOpacity>
            </View>
            <Text style={styles.description}>
              {animeList[0].attributes.synopsis}
            </Text>
          </View>
          <ScrollView horizontal style={styles.seasonsContainer}>
            {["S1", "S2", "S3", "S4", "S5", "S6"].map((season) => (
              <TouchableOpacity key={season} style={styles.seasonButton}>
                <Text style={styles.seasonText}>{season}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Image
            source={require("@/assets/images/ep.jpeg")}
            style={styles.episodeImage}
          />
        </View>
      ))}
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollbox: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: "white",
    fontFamily: "Blacknorthdemo",
    fontSize: 40,
    textAlign: "center",
  },
  playbt: {
    color: "white",
    fontSize: 30,
  },
  container: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#040B1C",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    top: -100,
    zIndex: 0,
    opacity: 0.95,
    width: "100%",
    height: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 368,
    height: 56,
    position: "absolute",
    top: 38,
    zIndex: 40,
  },
  roundButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "53%",
  },
  infoContainer: {
    position: "absolute",
    bottom: 0,
    height: 326,
    backgroundColor: "#040B1C",
    padding: 20,
    width: "100%",
  },
  titleContainer: {
    width: "100%",
    height: 70,
    position: "absolute",
    bottom: 326,
    zIndex: 40,
    justifyContent: "center",
    alignItems: "center",
    left: 19,
  },
  titleImage: {
    width: 177,
    height: 60,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  mainTitle: {
    color: "#ffffff",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 36,
  },
  subTitle: {
    color: "#ffffff",
    fontFamily: "sans-serif",
    fontSize: 12,
    fontWeight: "600",
  },
  playButton: {
    backgroundColor: "#CC3838",
    width: 70,
    height: 68,
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
  },
  description: {
    color: "#ffffff",
    fontFamily: "sans-serif",
    fontSize: 12,
    fontWeight: "600",
  },
  seasonsContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  seasonButton: {
    height: 22,
    width: 49,
    backgroundColor: "#CC3838",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  seasonText: {
    color: "#ffffff",
    fontSize: 12,
  },
  episodeImage: {
    width: 153,
    height: 78,
    borderRadius: 5,
  },
});

export default App;
