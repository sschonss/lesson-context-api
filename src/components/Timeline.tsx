import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Timeline() {
  const app = useAppContext();
  const { theme } = useThemeContext();

  const currentTheme = theme === "light" ? themeLight : themeDark;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.backgroundColor },
      ]}
    >
      <Text style={{ color: currentTheme.color }}>
        Timeline - Track {app.track}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 16,
  },
});
