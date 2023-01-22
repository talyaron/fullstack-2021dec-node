import { useEffect, useState } from "react";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://dog.ceo/api/breed/hound/images"
        );
        if (!data) throw new Error("couldnt get data");
        if (!data.message) throw new Error("No images");
        if(!Array.isArray(data.message)) throw new Error('Images is not an array');
        console.log(data.message.length);
        setImages(data.message.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <ScrollView>
        {images.map((image,i) => (
          <Image
          key={i}
            style={styles.imageStyle}
            source={{
              uri: image,
            }}
          />
        ))}
      </ScrollView>
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
  imageStyle: {
    width: 100,
    height: 100,
  },
});
