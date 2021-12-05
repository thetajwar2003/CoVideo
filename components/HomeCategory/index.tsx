import * as React from "react";
import { Image, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, View } from "../../components/Themed";

import categories from "../../assets/data/categories";
import { RootTabScreenProps } from "../../types";
import styles from "./styles";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

export default function HomeCategory(props: HomeCategoryProps) {
  const { category } = props;

  const navigation = useNavigation();

  const onMoviePress = (movie: { id: any; poster?: string }) => {
    navigation.navigate("MovieDetailsScreen", { id: movie.id });
  };
  return (
    <>
      <Text style={styles.title}> {category.title} </Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable onPress={() => onMoviePress(item)}>
            <Image
              style={styles.image}
              source={{
                uri: item.poster,
              }}
            />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}
