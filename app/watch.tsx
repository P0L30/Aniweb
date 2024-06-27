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
import { Link } from "expo-router";

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

  if (!fontsLoaded) {
    return null; // Or any other loading indicator you prefer
  }

  return (
    <View style={styles.watchBox}>
      <ScrollView>
        <View style={styles.posterBox}>
          {animeList.length > 0 && (
            <View>
              <Link href={`../watch/${animeList[0].id}`}>
                <Image
                  source={{
                    uri: animeList[0].attributes.posterImage.large,
                  }}
                  style={styles.poster}
                />
              </Link>
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
        </View>
        <View style={styles.infoBox}>
          {animeList.length > 0 && (
            <View>
              <View style={styles.infoBoxTop}>
                <View>
                  <Text style={styles.infoTitle}>
                    {animeList[0].attributes.canonicalTitle}
                  </Text>
                  <Text style={styles.smallInfo}>
                    1999 - | Action , Adventure , Comedy | 5.0
                  </Text>
                </View>
                <TouchableOpacity style={styles.playBT}>
                  <Icon name="play" style={styles.playBtFont} />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.story}>
                  {animeList[0].attributes.synopsis}
                </Text>
              </View>
              <View>
                <ScrollView horizontal>
                  {Array.from({ length: 20 }, (_, i) => (
                    <TouchableOpacity key={i + 1} style={styles.seasonButton}>
                      <Text style={styles.seasonText}>S{i + 1}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
              {animeList.length > 0 && (
                <TouchableOpacity>
                  <Link href="https://www.youtube.com/watch?v=-Pe5y3CbJqc">
                    <View style={styles.vidBox}>
                      <Image
                        source={{
                          uri: animeList[0].attributes.coverImage.small,
                        }}
                        style={styles.video}
                      />
                      <View style={styles.vidInfoBox}>
                        <Text style={styles.vidName}>
                          Ascend to the Dawn! A Pink Dragon Gets Agitated |
                          Season 20, Episode 1047
                        </Text>
                        <Text style={styles.vidInfo}>
                          One Piece episode 1047 is a solid entry in the ongoing
                          Wano arc. It has no real overt negatives to mention,
                          though it does suffer from following an absolute tour
                          de force in 1046
                        </Text>
                      </View>
                    </View>
                  </Link>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  vidInfoBox: {
    width: 183,
    height: 108,
    gap: 10,
  },
  vidName: {
    color: "white",
    fontSize: 9,
    fontWeight: "500",
  },
  vidInfo: {
    color: "white",
    fontSize: 8,
    fontWeight: "400",
  },
  vidBox: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
  },
  video: {
    width: 183,
    height: 108,
    borderRadius: 8,
    marginRight: 10,
  },
  seasonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "900",
  },
  seasonButton: {
    backgroundColor: "#CC3838",
    width: 59,
    height: 32,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  story: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "justify",
  },
  playBtFont: {
    color: "white",
    fontSize: 35,
  },
  infoBoxTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  playBT: {
    width: 90,
    height: 88,
    borderRadius: 50,
    backgroundColor: "#CC3838",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
  },
  infoBox: {
    padding: 15,
  },
  infoTitle: {
    color: "white",
    fontSize: 40,
    fontWeight: "900",
  },
  smallInfo: {
    color: "white",
  },
  poster: {
    width: "100%",
    height: 550,
  },
  posterBox: {
    width: "100%",
  },
  watchBox: {
    backgroundColor: "#040B1C",
    width: "100%",
    height: "100%",
  },
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    top: "82%",
    left: 0,
    height: 100,
  },
  title: {
    color: "white",
    fontFamily: "Blacknorthdemo",
    fontSize: 30,
    textAlign: "center",
  },
});

export default App;
