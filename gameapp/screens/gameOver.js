import { Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/primaryButton";

function GameOver({roundsNumber,userNumber,onStartNewGame}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Game over!!!</Text>
      <Text style={styles.text2Container}>your phone needs <Text> {roundsNumber} </Text> rounds to guess the <Text>{userNumber}</Text></Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign:"center",
    margin:10,
    padding:30
  },
  textContainer: {
    color: "yellow",
    fontWeight: "bold",
    marginLeft:90
  },
  text2Container: {
    color: "rgb(12, 247, 255)",
    fontWeight: "bold",
  }
});

export default GameOver;
