import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Home from "./src/pages/Home";
import AppContextProvider from "./src/contexts/AppContext";
import ThemeContextProvider, {
  useThemeContext,
} from "./src/contexts/ThemeContext";

function AppContent() {
  const { activeTheme, toggleTheme, theme } = useThemeContext();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={toggleTheme}>
          <Text style={{ color: theme.color }}> Change Theme </Text>
        </TouchableOpacity>
      </View>
      <Home />
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
    justifyContent: "flex-end",
    padding: 16,
    marginTop: 32,
  },
  button: {
    padding: 8,
    backgroundColor: "red",
    borderRadius: 4,
  },
});
