import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Text,
  Platform,
} from "react-native";

import { TaskItem } from "./components/TaskItem";
import { AddTask } from "./components/AddTask";

export default function App() {
  const [modalISVisible, setModalIsVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  const startAddTaskHandler = () => {
    setModalIsVisible(true);
  };
  const endAddTaskHandler = () => {
    setModalIsVisible(false);
  };
  const addTaskHandler = (title, desc) => {
    setTasks((currentTasks) => [
      ...tasks,
      {
        id: Math.random().toString(),
        name: title,
        description: desc,
        done: false,
      },
    ]);
    endAddTaskHandler();
  };

  const deleteTaskHandler = (id) => {
    console.log(id);
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  };
  const doneTaskHandler = (id) => {
    const tasksHelper = tasks.map((task) => {
      if (task.id === id) {
        task.done = true;
        // Increment the clicked counter
        return task;
      } else {
        // The rest haven't changed
        return task;
      }
    });

    setTasks(tasksHelper);
  };
  const notDoneTaskHandler = (id) => {
    const tasksHelper = tasks.map((task) => {
      if (task.id === id) {
        task.done = false;
        // Increment the clicked counter
        return task;
      } else {
        // The rest haven't changed
        return task;
      }
    });

    setTasks(tasksHelper);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Task List</Text>
        </View>

        {modalISVisible && (
          <AddTask
            addTask={addTaskHandler}
            onCancel={endAddTaskHandler}
            visible={modalISVisible}
          />
        )}
        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={(itemData) => {
              return (
                <TaskItem
                  title={itemData.item.name}
                  desc={itemData.item.description}
                  done={itemData.item.done}
                  id={itemData.item.id}
                  onDeleteItem={deleteTaskHandler}
                  onDoneItem={doneTaskHandler}
                  onNotDoneItem={notDoneTaskHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
        <Button
          title="Add Task"
          color="#b180f0"
          onPress={startAddTaskHandler}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontFamily: Platform.OS == "ios" ? "Helvetica-Bold" : "sans-serif",
    fontSize: 36,
    color: "#b180f0",
  },
  tasksContainer: {
    marginTop: 30,
    flex: 5,
  },
});
