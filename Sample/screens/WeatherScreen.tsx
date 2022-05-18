import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import WeatherItem from "../components/WeatherItem";

//各地域のAPI情報
const Hokkaido = {
  name: "北海道",
  area: "Asahikawa",
};
const Touhoku = {
  name: "東北",
  area: "Yamagata",
};
const Kantou = {
  name: "関東",
  area: "Tokyo",
};
const Hokuriku = {
  name: "北陸",
  area: "Nagano",
};
const Toukai = {
  name: "東海",
  area: "Nagoya",
};
const Kinnki = {
  name: "近畿",
  area: "Osaka",
};
const Tyugoku = {
  name: "中国",
  area: "Hiroshima",
};
const sikoku = {
  name: "四国",
  area: "Matsuyama",
};
const Kyusyu = {
  name: "九州",
  area: "Ozu",
};
const Okinawa = {
  name: "沖縄",
  area: "Okinawa",
};

//各地域のAPI情報を配列に格納
const TotalUri = [
  Hokkaido,
  Touhoku,
  Kantou,
  Hokuriku,
  Toukai,
  Kinnki,
  Tyugoku,
  sikoku,
  Kyusyu,
  Okinawa,
];

export default function WeatherScreen() {
  const [weather, setWeathers] = useState([]);

  useEffect(() => {
    //それぞれの地域ごとに天気情報を取得
    TotalUri.forEach((info) => {
      getWeathers(info);
    });
  }, []);
  //天気情報を取得
  const getWeathers = async (info) => {
    //APIで非同期処理を実行
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${info.area}&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.manifest.extra.weatherApiKey}`
    );
    //取得したデータから天気情報を取得
    const uriData: { name: string; icon: string; description: string } = {
      name: info.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    };
    //weatherに天気情報・地域名を設定する
    setWeathers((weather) => [...weather, uriData]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={weather}
        renderItem={({ item }) => (
          <WeatherItem
            description={item.description}
            icon={item.icon}
            name={item.name}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
