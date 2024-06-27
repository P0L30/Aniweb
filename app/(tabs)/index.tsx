"use client";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  fetchTrendingAnime,
  Anime,
  fetchAnimeGenre,
  Genre,
} from "../../services/apiService";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";

const AniwebHome: React.FC = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animeList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [animeList.length]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        {animeList.length > 0 && (
          <TouchableOpacity style={styles.top}>
            <Link href={`../watch/${animeList[currentIndex].id}`}>
              <Image
                source={{
                  uri: animeList[currentIndex].attributes.posterImage.large,
                }}
                style={styles.rec}
              />
            </Link>
            <LinearGradient
              colors={["transparent", "#040B1C"]}
              style={styles.gradient}
            >
              <Text style={styles.title}>
                {animeList[currentIndex].attributes.canonicalTitle}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        <View style={styles.genres}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {genreList.map((genre) => (
              <TouchableOpacity key={genre.id} style={styles.genrebt}>
                <Text style={styles.animeName}>{genre.attributes.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.vidbox}>
          <Text style={styles.headerText}>Popular</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {animeList.map((anime) => (
              <TouchableOpacity key={anime.id} style={styles.midbt}>
                <Link href={`../watch/${anime.id}`}>
                  <Image
                    source={{ uri: anime.attributes.posterImage.small }}
                    style={styles.midvid}
                  />
                  <View style={styles.info}>
                    <Text style={styles.animeName}>
                      {anime.attributes.canonicalTitle}
                    </Text>
                    <Text style={styles.smallInfo}>
                      {anime.attributes.createdAt} | ep number
                    </Text>
                  </View>
                </Link>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.vidbox}>
          <Text style={styles.headerText}>For you</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {animeList.map((anime) => (
              <TouchableOpacity key={anime.id} style={styles.midbt}>
                <Link href={`../watch/${anime.id}`}>
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
        <View style={styles.vidbox}>
          <Text style={styles.headerText}>Continue Watching</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {animeList.map((anime) => (
              <TouchableOpacity key={anime.id} style={styles.midbt}>
                <Link href={`../watch/${anime.id}`}>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontFamily: "Blacknorthdemo",
    fontSize: 30,
    textAlign: "center",
  },
  info: {
    width: 146,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    top: "76%",
    left: 0,
    height: 100,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#040B1C",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  genre: {
    color: "white",
    fontFamily: "sans-serif",
    fontWeight: 600,
    fontSize: 13,
  },
  genres: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: "auto",
    marginBottom: 20,
  },
  top: {
    width: 390,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    height: "auto",
    marginHorizontal: 10,
  },
  genrebt: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: 30,
    borderRadius: 43,
    backgroundColor: "#3F4042",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
  },
  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginLeft: 10,
    marginBottom: 20,
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
  },
  animeName: {
    color: "white",
    fontSize: 15,
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  smallInfo: {
    color: "white",
    fontSize: 12,
    fontFamily: "sans-serif",
    marginLeft: 10,
  },
  rec: {
    width: 390,
    height: 500,
    borderRadius: 30,
    marginTop: 30,
  },
});

export default AniwebHome;
