import React from "react";
import Naruto from "@/assets/images/naruto.jpeg";
import Bleach from "@/assets/images/bleach.jpeg";
import AOT from "@/assets/images/AOT.jpeg";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const images = [
  { src: Naruto, key: "Anime" },
  { src: Bleach, key: "profile" },
  { src: AOT, key: "aoy" },
  { src: Naruto, key: "Anime" },
  { src: Bleach, key: "profile" },
  { src: AOT, key: "aoy" },
];

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <Image
            source={require("@/assets/images/8485a9142f18fe790a0ed40e190dbe9a.jpeg")}
            style={styles.rec}
          />
        </View>
        <View style={styles.genres}>
          <ScrollView horizontal>
            {["Action", "Drama", "Fantasy", "Romance", "More"].map((season) => (
              <TouchableOpacity key={season} style={styles.genrebt}>
                <Text style={styles.genre}>{season}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.vidbox}>
          <Text style={styles.headerText}>Popular</Text>
          <View>
            <ScrollView horizontal>
              {images.map((image) => (
                <TouchableOpacity key={image.key} style={styles.midbt}>
                  <Image source={image.src} style={styles.midvid} />
                  <Text style={styles.animeName}>Anime Name</Text>
                  <Text style={styles.smallInfo}>Year | ep number</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.vidbox}>
          <Text style={styles.headerText}>For you</Text>
          <View>
            <ScrollView horizontal>
              {images.map((image) => (
                <TouchableOpacity key={image.key} style={styles.midbt}>
                  <Image source={image.src} style={styles.midvid} />
                  <Text style={styles.animeName}>Anime Name</Text>
                  <Text style={styles.smallInfo}>Year | ep number</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.vidbox}>
          <Text style={styles.headerText}>Continue Watching</Text>
          <View>
            <ScrollView horizontal>
              {images.map((image) => (
                <TouchableOpacity key={image.key} style={styles.midbt}>
                  <Image source={image.src} style={styles.midvid} />
                  <Text style={styles.animeName}>Anime Name</Text>
                  <Text style={styles.smallInfo}>Year | ep number</Text>
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
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#040B1C",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
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
    fontWeight: 900,
    fontFamily: "sans-serif",
    marginLeft: 10,
    marginBottom: 20,
  },
  vidbox: {
    width: "100%",
    height: "auto",
  },
  midbt: {
    width: 144,
    height: "auto",
    borderRadius: 25,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  midvid: {
    width: 144,
    height: 205,
    borderRadius: 25,
    marginBottom: 5,
  },
  animeName: {
    color: "white",
    fontSize: 20,
    fontWeight: 900,
    fontFamily: "sans-serif",
    marginLeft: 10,
  },
  smallInfo: {
    color: "white",
    fontSize: 12,
    fontWeight: 100,
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
export default App;
