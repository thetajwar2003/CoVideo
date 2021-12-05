import React, { useState } from "react";
import { Image, Pressable, FlatList } from "react-native";

import { Text, View } from "../../components/Themed";
import styles from "./styles";

import movie from "../../assets/data/movie";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import VideoPlayer from "../../components/VideoPlayer";

export default function MovieDetailsScreen() {
  const firstSeason = movie.seasons.items[0];
  const seasonNames = movie.seasons.items.map((season) => season.name);

  const [currentEpisode, setcurrentEpisode] = useState(
    firstSeason.episodes.items[0]
  );
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  return (
    <View>
      <VideoPlayer episode={currentEpisode} />
      <FlatList
        style={{ marginBottom: 250 }}
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
          <EpisodeItem episode={item} onPress={setcurrentEpisode} />
        )}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>

              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>

              <Text style={styles.seasons}>
                {movie.numberOfSeasons} seasons
              </Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>

            {/* Play Button */}
            <Pressable
              style={styles.playButton}
              onPress={() => console.warn("Play")}
            >
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16} color="black" />
                Play
              </Text>
            </Pressable>

            {/* Download Button */}
            <Pressable
              style={styles.downloadButton}
              onPress={() => console.warn("Download")}
            >
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white" /> Download
              </Text>
            </Pressable>

            <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            {/* Row with icons */}
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Ionicons name="share-social" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>

            {/* TODO: USE SOMETHIG ELSE THAN PICKER */}
            <PickerIOS
              itemStyle={{ height: 50, color: "white", width: 130 }}
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex]);
              }}
              style={{ color: "white", width: 130 }}
              // dropdownIconColor={"white"}
            >
              {seasonNames.map((seasonName) => (
                <Picker.Item
                  label={seasonName}
                  value={seasonName}
                  key={seasonName}
                />
              ))}
            </PickerIOS>
          </View>
        }
      />
    </View>
  );
}
