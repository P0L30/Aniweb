import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Image
          source={require("@/assets/images/8485a9142f18fe790a0ed40e190dbe9a.jpeg")}
          style={styles.backgroundImage}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.roundButton}></TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={require("@/assets/images/Title.png")}
            style={styles.titleImage}
          />
        </View>
        <View>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.mainTitle}>One Piece</Text>
              <Text style={styles.subTitle}>
                1999 - | Action , Advancer , Comedy | 5.0
              </Text>
            </View>
            <TouchableOpacity style={styles.playButton}></TouchableOpacity>
          </View>
          <Text style={styles.description}>
            Follows the adventures of Monkey D. Luffy and his pirate crew in
            order to find the greatest treasure ever left by the legendary
            Pirate, Gold Roger. The famous mystery treasure named "One Piece"
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
    </View>
  );
};

const styles = StyleSheet.create({
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
    top: -180,
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
    paddingLeft: 15,
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
