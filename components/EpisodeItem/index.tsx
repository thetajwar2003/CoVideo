import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import { View, Text } from "../../components/Themed";
import styles from "./styles";

interface EpisodeItemProps {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
}

export default function EpisodeItem(props: EpisodeItemProps) {
  const { episode } = props;
  return (
    <View style={{ margin: 10 }}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: episode.poster }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>

        <AntDesign name="download" color="white" size={24} />
      </View>
      <Text style={styles.plot}>{episode.plot}</Text>
    </View>
  );
}
