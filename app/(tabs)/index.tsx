import { Image, StyleSheet, Platform, Text, View, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import FancyBox from "@/components/FancyBox";

export default function HomeScreen() {
  const [fruit, setFruit] = useState("kiwi");

  const [counter, setCounter] = useState(0);

  return (
    <View
      style={{
        backgroundColor: "blue",
        flex: 1,
      }}
    >
      <View
        style={{ backgroundColor: "white", height: 120, flexDirection: "row" }}
      >
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Ruta 1</Text>
        </View>

        <View
          style={{
            backgroundColor: "green",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Ruta 2</Text>
        </View>
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Ruta 3</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "yellow",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{fruit}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 50,
            fontWeight: "bold",
            color: "red",
          }}
        >
          {counter}
        </Text>
        <FancyBox />
      </View>
      <View style={{ backgroundColor: "red", height: 60 }}>
        <Button
          title="Tryck här"
          onPress={() => {
            console.log("Tryck här");
            setFruit("Apelsin");
            setCounter(counter + 1);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
