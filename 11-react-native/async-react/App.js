import { useEffect, useState } from "react";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import rock from "./assets/rock.png";
import scissors from "./assets/scissors.png";
import paper from "./assets/paper.png";

//components
import ChiceButton from "./ChiceButton";

const choice = { rock, scissors, paper };
const choiceWord = { rock: "rock", paper: "paper", scissors: "scissors" };
const choicesArr = Object.values(choiceWord);

export default function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);

  useEffect(() => {

    if (userChoice) {
      const randomIndex = Math.floor(Math.random() * choicesArr.length);

      if (randomIndex >= 0 && randomIndex < 3) {
        const _cmpChoice = choicesArr[randomIndex];
        console.log("_cmpChoice", _cmpChoice);
        setComputerChoice(_cmpChoice);
        console.log(_cmpChoice);

        const win = whatWins(userChoice,_cmpChoice);
        if(win === 1) setUserPoints(userPoints+1);
        if(win === 2) setComputerPoints(computerPoints + 1);
        console.log('win',win)

        setTimeout(()=>{
          setUserChoice(null);
          setComputerChoice(null);
        },2000);
       
      }
    }
  }, [userChoice]);

  return (
    <View style={styles.container}>
      <Text style={styles.points}>User {userPoints} | {computerPoints} Comp</Text>
      <Text>Chose one</Text>
      <StatusBar style="auto" />
      <View style={styles.choices}>
        <ChiceButton
          img={choice.paper}
          value={choiceWord.paper}
          setUserChoice={setUserChoice}
        />
        <ChiceButton
          img={choice.scissors}
          value={choiceWord.scissors}
          setUserChoice={setUserChoice}
        />
        <ChiceButton
          img={choice.rock}
          value={choiceWord.rock}
          setUserChoice={setUserChoice}
        />
      </View>
      <Text>Computer choice</Text>
      {computerChoice ? (
        <ChiceButton img={choice[computerChoice]}></ChiceButton>
      ) : null}
      {computerChoice ? (
        <Text>{whoWins(userChoice, computerChoice)}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  points:{
    fontSize:40
  },
  choices: {
    flexDirection: "row",
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});

function whoWins(userChoice, computerChoice) {
  const win = whatWins(userChoice, computerChoice);
  if (win === 0) {
    return "tie";
  } else if (win === 1) {
    return "user win";
  } else {
    return "computer win";
  }
}

function whatWins(a, b) {
  if (a === b) return 0;
  if (a === "rock" && b === "scissors") {
    return 1;
  } else if (a === "scissors" && b === "rock") {
    return 2;
  } else if (a === "scissors" && b === "paper") {
    return 1;
  } else if (a === "paper" && b === "scissors") {
    return 2;
  } else if (a === "paper" && b === "rock") {
    return 1;
  } else if (a === "rock" && b === "paper") {
    return 2;
  } else {
    return 0;
  }
}
