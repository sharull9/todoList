import { StyleSheet, Text, View } from "react-native";
import { Motion } from "@legendapp/motion";

export default function Task({ title }) {
  return (
    <Motion.View
      style={styles.item}
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
    >
      <View style={styles.title}>
        <Text>{title}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.checkbox}></View>
      </View>
    </Motion.View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 60,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
    display: "flex",
    flexDirection: "row",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 10,
  },
  title: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  checkbox: {
    width: 12,
    height: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#55bcf6",
  },
  container: {
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
