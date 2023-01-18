import { StatusBar } from 'expo-status-bar';
import { set } from 'mongoose';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState<any>()
  const  [randomNo, setRandomNo] = useState<number>(Math.floor(Math.random() * 10))
  const [counter, setCounter] = useState(1)
 
  useEffect(() =>{
    
    console.log(randomNo);
    
    
    
    const guessNo = Number(guess)
    if( guessNo &&  guessNo > randomNo){
      alert('go lower')
      setCounter(counter + 1)
    }else if( guessNo &&  guessNo < randomNo){
      alert('go higher')
      setCounter(counter + 1)
    } else if( guessNo &&  guessNo == randomNo){
      alert(`you won in ${counter} times` )
      setRandomNo(Math.floor(Math.random() * 10));
      setCounter(1)
    }
  }, [guess])
  return (
    <View style={styles.container}>
      <TextInput placeholder='guess number'   onChangeText={setGuess}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
