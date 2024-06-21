import React from "react";
import { Button as RnButton, StyleSheet, View } from "react-native";

export default function Button({
  title,
  onPress,
  color,
}: {
  title: string;
  onPress: () => void;
  color: string;
}) {
  return (
    <View style={styles.container}>
      <RnButton title={title} onPress={onPress} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
