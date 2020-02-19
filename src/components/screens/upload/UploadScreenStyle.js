import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  top: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 0.35,
    padding: 20
  }
});

export default styles;
