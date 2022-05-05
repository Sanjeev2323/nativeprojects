import { useState } from "react";

import { TextInput, View, StyleSheet,Alert } from "react-native";
import PrimaryButton from "../components/primaryButton";

function StartGameScreen({onPickNumber}) {
const [enteredNumber,setEnterNumber]=useState('');

function numberInput(enteredText){
  setEnterNumber(enteredText);
}

function resetHandler(){
  setEnterNumber('');
}

function confirmInput(){
  const chosenNumber=parseInt(enteredNumber);

  if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
    Alert.alert('inValid Number','number has to be between 0 top 99',[{text:"okay",style:"destructive",onPress:resetHandler}])
    return ;
  }
  
  
  onPickNumber(chosenNumber);

}

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numberInput}
      />
      <View style={styles.buttonscontainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetHandler} >reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInput} >confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
    borderRadius: 16,
    elevation: 4,
    margin: 4,
  },

  numberInput: {
    height: 50,
    width: 50,

    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    color: "yellow",
    fontWeight: "bold",
    textAlign: "center",
    margin: 4,
  },
  buttonscontainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
