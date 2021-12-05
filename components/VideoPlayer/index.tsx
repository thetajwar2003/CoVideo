import { ResizeMode, Video } from "expo-av";
import { Playback } from "expo-av/build/AV";
import React, { useRef, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { EpisodeType } from "../../types";
import styles from "./styles";

interface VideoPlayerProps {
  episode: EpisodeType;
}

export default function VideoPlayer(props: VideoPlayerProps) {
  const { episode } = props;
  const video = useRef<Playback>(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (!video) {
      return;
    }
    async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: episode.video }, {}, false);
    };
  }, [episode]);
  return (
    <Video
      ref={video}
      style={styles.video}
      source={{ uri: episode.video }}
      posterSource={{ uri: episode.poster }}
      usePoster={true}
      posterStyle={{ resizeMode: "cover" }}
      useNativeControls
      resizeMode="contain"
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
  );
}
