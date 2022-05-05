import { useState, useEffect } from "react";

import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/title";

import NumberContainer from "../components/numberContainer";
import PrimaryButton from "../components/primaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(
    1,
    100,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds,setGuessRounds]=useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(()=>{
    minBoundary=1;
    maxBoundary=100;
  },[])

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower'&& currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("you lied dumbo", "you know you entered wrong sign", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary,maxBoundary,currentGuess)
    const newRndNumber = generateRandomBetween(1, 100, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(previousRounds=>[newRndNumber,...previousRounds])
  }
let guess;
  return (
    <View style={styles.gameContainer}>
      <Title>opponents guess</Title>

      <NumberContainer style={styles.gameContainer}>
        {currentGuess}
      </NumberContainer>
      <Text style={styles.textContainer}>Higher or lower</Text>
      <View style={styles.buttonsContainer}>
        <View  style={styles.buttonContainer}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
          -
        </PrimaryButton>
        </View>
        <View  style={styles.buttonContainer}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
          +
        </PrimaryButton>
        </View>
      </View>
      <View>
        {guessRounds.map(guessRound=><Text key={guess}>{guessRound}</Text>)}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 40,
  },
  buttonsContainer: {
    
    flexDirection: 'row',
  },
  textContainer: {
    color: "rgb(12, 247, 255)",
    padding:8,
    margin:10,
    justifyContent:"center",
    textAlign:"center",
    fontWeight:"bold",
    
  },
  buttonContainer:{
    flex:1
  }
});
export default GameScreen;
