import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useAppContext } from "../contexts/AppContext";
import ControlFooter from "./ControlFooter";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Control() {
  const app = useAppContext();
  const {
    theme: { color, backgroundColor },
  } = useThemeContext();

  const handlePrev = () => {
    app.prev();
  };
  const handleNext = () => {
    app.next();
  };

  return (
    <>
      <View style={[styles.container, { backgroundColor }]}>
        <Button title="Prev" onPress={handlePrev} color={color} />
        <Button title="Next" onPress={handleNext} color={color} />
      </View>
      <ControlFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
