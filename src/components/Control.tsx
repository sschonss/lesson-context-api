import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useAppContext } from "../contexts/AppContext";
import ControlFooter from "./ControlFooter";
import { ThemeContextProps } from "../contexts/ThemeContext";

interface ControlProps {
  theme: ThemeContextProps;
}

export default function Control({ theme }: ControlProps) {
  const app = useAppContext();

  const handlePrev = () => {
    app.prev();
  };
  const handleNext = () => {
    app.next();
  };

  return (
    <>
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <Button title="Prev" onPress={handlePrev} color={theme.color} />
        <Button title="Next" onPress={handleNext} color={theme.color} />
      </View>
      <ControlFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
