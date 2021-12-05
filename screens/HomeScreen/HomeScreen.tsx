import * as React from "react";
import { Image, FlatList } from "react-native";

import { Text, View } from "../../components/Themed";

import categories from "../../assets/data/categories";
import { RootTabScreenProps } from "../../types";
import styles from "./styles";
import HomeCategory from "../../components/HomeCategory";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      {/* List of categories */}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
