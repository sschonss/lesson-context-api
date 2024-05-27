import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Home from "./src/pages/Home";
import AppContextProvider from "./src/contexts/AppContext";
import ThemeContextProvider, {
  useThemeContext,
  themeDark,
  themeLight,
} from "./src/contexts/ThemeContext";

function AppContent() {
  const { theme, toggleTheme } = useThemeContext();

  const currentTheme = theme === "light" ? themeLight : themeDark;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.backgroundColor },
      ]}
    >
      <View style={styles.header}>
        <Text style={{ color: currentTheme.color }}>
          Current Theme: {theme}
        </Text>
        <TouchableOpacity style={styles.button} onPress={toggleTheme}>
          <Text style={{ color: currentTheme.color }}> Change Theme </Text>
        </TouchableOpacity>
      </View>
      <Home theme={currentTheme} />
    </View>
  );
}

export default function App() {
  return (
    <AppContextProvider>
      <ThemeContextProvider>
        <AppContent />
      </ThemeContextProvider>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  button: {
    padding: 10,
  },
});
