import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";
import { KeyboardAvoidingView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Task's To do</Text>
        <View style={styles.items}>
          <Task title="task1" />
          <Task title="task2" />
          <Task title="task3" />
          <Task title="task4" />
        </View>
      </View>
      <KeyboardAvoidingView></KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaed",
    width: "100%",
  },
  taskWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    paddingTop: 10,
    display: "flex",
    gap: 15,
  },
});
