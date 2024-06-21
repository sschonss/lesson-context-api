import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Timeline from "../components/Timeline";
import Control from "../components/Control";
import { ThemeContextProps, useThemeContext } from "../contexts/ThemeContext";

interface HomeProps {
  theme: ThemeContextProps;
}

export default function Home() {
  const {
    theme: { backgroundColor, color },
  } = useThemeContext();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={{ color }}>Home - Music Player</Text>
      <Timeline />
      <Control />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
