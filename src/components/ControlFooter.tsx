import { StyleSheet, Text } from "react-native";
import { useAppContext } from "../contexts/AppContext";

export default function ControlFooter() {
  const app = useAppContext();

  return (
    <Text style={styles.text}>
      {app.musicTime} remaining on Track {app.track}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 16,
    fontSize: 12,
    color: "grey",
  },
});
