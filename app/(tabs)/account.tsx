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
        <View style={styles.top1}>
          <Text style={styles.headerText}>My AniWeb</Text>
          <Text style={styles.headerText}>drop</Text>
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
          <Text style={styles.headerText}>My List</Text>
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
    fontWeight: 900,
    fontFamily: "sans-serif",
    marginLeft: 10,
    marginBottom: 10,
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
  acc: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
export default App;
