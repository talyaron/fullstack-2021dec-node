import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function App() {
  const [counter, setCounter] = useState<number>(0);
  const dogUrl = ['./assets/blacki.jpg', './assets/smily.jpg']
  const [dog, setDog] = useState<string>(dogUrl[0]);
  const [dogURI, setDogURI] = useState<string>('')
  function handlePress() {
    setCounter(counter + 1);
  }
  
  function changeDog() {
    setDog(randomArray(dogUrl))
  }
  function randomArray(arr: Array<any>){
    const randomElement = Math.floor(Math.random() * arr.length)
    console.log(randomElement);
    
    return arr[randomElement]
  }
  return (
    <View style={styles.container}>
      <Text>you pressed me {counter} times</Text>
      <Button onPress={handlePress} title={"press me"}></Button>
      <TouchableHighlight onPress={changeDog}>
        <Image source={{uri:dogUrl[0]}} style={styles.dog} />
      </TouchableHighlight>
     

      <StatusBar style="auto" />
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
  dog: {
    height: 120,
    width: 120,
    margin: "auto",
  },
});
