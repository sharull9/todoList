import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import { useState } from "react";

function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  function addingTask() {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }
  function removingTask(index) {
    let copyTaskItems = [...taskItems];
    copyTaskItems.splice(index, 1);
    setTaskItems(copyTaskItems);
  }
  console.log(taskItems);
  return (
    <View className="flex-1 container bg-[#eaeaed]">
      <View className="pt-9 px-3">
        <Text className="text-2xl font-bold">Task's To do</Text>
        <View className="flex pt-2">
          {taskItems.map((task, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  removingTask(index);
                }}
              >
                <Task key={index} title={task} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View className="absolute bottom-4 flex justify-center items-center">
        <KeyboardAvoidingView>
          <View className="flex flex-row container px-3">
            <TextInput
              className="text-sm w-5/6 text-slate-900 h-12 bg-slate-100 rounded-tl-xl rounded-bl-xl pl-2"
              value={task}
              placeholder="Write a task"
              onChangeText={setTask}
            />
            <View className="w-1/6 h-10">
              <TouchableOpacity
                className="rounded-tr-xl rounded-br-xl w-full h-12 bg-slate-200 flex justify-center items-center"
                onPress={addingTask}
              >
                <Text className="text-xl">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

export default App;
