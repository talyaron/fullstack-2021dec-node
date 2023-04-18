import React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";

const ChiceButton = ({ img, value, setUserChoice }) => {
  function handleChoose(ev) {
    try {
        setUserChoice(value)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Pressable onPress={handleChoose}>
      <View style={styles.button}>
        <Image style={styles.image} source={img} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  button: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 3,
  },
});

export default ChiceButton;
