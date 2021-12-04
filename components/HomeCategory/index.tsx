import * as React from "react";
import { Image, FlatList } from "react-native";

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

  return (
    <>
      <Text style={styles.title}> {category.title} </Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
        horizontal
      />
    </>
  );
}
