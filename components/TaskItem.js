import { StyleSheet, View, Text, Pressable, Alert } from "react-native";

export const TaskItem = (props) => {
  const alert = () =>
    Alert.alert("Task: " + props.title, props.desc + props.id, [
      {
        text: "Delete",
        onPress: props.onDeleteItem.bind(this, props.id),
        style: "destructive",
      },

      { text: "Done!", onPress: props.onDoneItem.bind(this, props.id) },

      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  const alertTwo = () =>
    Alert.alert("Task: " + props.title, "", [
      {
        text: "Delete",
        onPress: props.onDeleteItem.bind(this, props.id),
        style: "destructive",
      },
      {
        text: "Doesn't done",
        onPress: props.onNotDoneItem.bind(this, props.id),
      },

      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  return (
    <View
      style={[
        styles.task,
        { backgroundColor: props.done ? "#b180f0" : "#5e0acc" },
      ]}
    >
      <Pressable
        onPress={!props.done ? alert : alertTwo}
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text
          style={[
            styles.taskTitle,
            { textDecorationLine: props.done ? "line-through" : "none" },
          ]}
        >
          {props.title}
        </Text>
        <Text
          style={[
            styles.taskDesc,
            { textDecorationLine: props.done ? "line-through" : "none" },
          ]}
        >
          {props.desc}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    margin: 8,
    borderRadius: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  taskTitle: {
    color: "white",
    padding: 8,
    fontSize: 24,
    fontWeight: "bold",
  },
  taskDesc: {
    color: "white",
    padding: 8,
    fontSize: 16,
  },
});
