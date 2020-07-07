import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Basic Counter</Text>
      <Text>{count}</Text>
      <Button title="increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
