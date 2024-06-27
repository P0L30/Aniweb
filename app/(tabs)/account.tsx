"use client";
import React, { useEffect, useState } from "react";
import { fetchTrendingAnime, Anime } from "../../services/apiService";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

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
      <ScrollView>
        <View style={styles.top1}>
          <Text style={styles.headerText}>My AniWeb</Text>
          <TouchableOpacity>
            <Icon name="navicon" style={styles.headerText} />
          </TouchableOpacity>
        </View>
        <View style={styles.top2}>
          <Image
            source={require("@/assets/images/8485a9142f18fe790a0ed40e190dbe9a.jpeg")}
            style={styles.acc}
          />
          <Text style={styles.headerText}>User name</Text>
        </View>
        <View style={styles.vidbox}>
          <Text style={styles.headerText}>Animes you liked</Text>
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
          <Text style={styles.headerText}>My List</Text>
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
          <Text style={styles.headerText}>Continue Watching</Text>
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
      </ScrollView>
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
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  top1: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  top2: {
    width: "100%",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginLeft: 10,
    marginBottom: 10,
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
    fontWeight: 900,
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
  acc: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
export default App;
