import React from "react";
import { View, Platform } from "react-native";
import { SearchBar } from "react-native-elements";

import styles from "./LiveSearchStyle";

export default function LiveSearch(props) {
  return (
    <View style={styles.searchBarContainer}>
      {Platform.OS === "ios" && (
        <SearchBar
          platform="ios"
          placeholder="Search here..."
          onChangeText={props.onChangeText}
          value={props.value}
          showCancel
          containerStyle={{ width: props.width }}
          showLoading={props.loading}
          containerStyle={{ backgroundColor: "white" }}
          inputContainerStyle={{ height: 25 }}
        />
      )}
      {Platform.OS === "android" && (
        <SearchBar
          platform="android"
          placeholder="Search here..."
          onChangeText={props.onChangeText}
          value={props.value}
          cancelIcon
          containerStyle={{ width: props.width }}
          showLoading={props.loading}
        />
      )}
    </View>
  );
}
