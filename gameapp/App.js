import { useState } from 'react';
import { StyleSheet,View ,ImageBackground, SafeAreaView} from 'react-native';

import StartGameScreen from './screens/startGameScreen';
import GameScreen from './screens/gameScreen';
import GameOver from './screens/gameOver';

export default function App() {
const [userNumber,setUserNumber]=useState();
const [gameisOver,setGameisOver]=useState(true);
const [guessNumber,setGuessNumber]=useState(0);

function pickedNumberHandler(pickedNumber){
  setUserNumber(pickedNumber);
  setGameisOver(false);
}

function gameOverHandler(){
  setGameisOver(true);
}

function startGameHandler(){
  setUserNumber(null);
  setGuessNumber(0);

}
let screen=<StartGameScreen  onPickNumber={pickedNumberHandler} />

if(userNumber){
 screen= <GameScreen  userNumber={userNumber}  onGameOver={gameOverHandler}/>

}
if(gameisOver  && userNumber){
  screen= <GameOver roundsNumber={guessNumber} userNumber={userNumber} onStartNewGame={startGameHandler}/>
}

  return (
    
    <View style={styles.rootContainer} >
     
      <SafeAreaView style={styles.rootContainer}>
      <ImageBackground  source={require('./assets/background.png')} resizeMode='cover' style={styles.rootContainer} imageStyle={styles.backggroundImage} >
    {screen}
    </ImageBackground>
    </SafeAreaView>
   
    </View>
   
   
    
  );
}

const styles=StyleSheet.create({
  rootContainer:{
    flex:1,
    backgroundColor:"black",
  },
  backggroundImage:{
    opacity:0.25
  }
})


