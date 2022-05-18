import { StyleSheet } from "react-native";
import React from "react";
import WebView from "react-native-webview";

export default function DetailScreen(props) {
  const { route } = props;
  const { article } = route.params;
  return <WebView style={styles.container} source={{ uri: article.url }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
