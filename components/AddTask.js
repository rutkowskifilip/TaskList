import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
export const AddTask = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const taskTitleHandler = (enteredText) => {
    setTaskTitle(enteredText);
  };
  const taskDescHandler = (enteredText) => {
    setTaskDesc(enteredText);
  };
  const addTaskHandler = () => {
    props.addTask(taskTitle, taskDesc);
    setTaskTitle("");
    setTaskDesc("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="title"
          onChangeText={taskTitleHandler}
          value={taskTitle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="description"
          onChangeText={taskDescHandler}
          value={taskDesc}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Task" onPress={addTaskHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    color: "#120438",
    borderRadius: 6,
    marginVertical: 4,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 0,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
