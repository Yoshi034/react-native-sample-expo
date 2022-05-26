import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function NewsKizi({ imageurl, title, subtext, onPress }) {
  const date: Date = new Date(subtext);
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();
  const koukaihiduke: string = `${year}年${month}月${day}日`;

  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.moziBox}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{koukaihiduke}</Text>
      </View>
      <View style={styles.gazoBox}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: imageurl }} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row",
  },
  moziBox: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  gazoBox: {
    width: 100,
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "black",
  },
});
