import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 10,
    // backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: 100,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 5,
  },
});

export default styles;
