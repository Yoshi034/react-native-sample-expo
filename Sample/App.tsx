import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import NewsScreen from "./screens/NewsScreen";
import DetailScreen from "./screens/DetailScreen";
import WeatherScreen from "./screens/WeatherScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ニューストップ" component={NewsScreen} />
      <Stack.Screen name="詳細ページ" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const WeatherStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="天気予報トップ" component={WeatherScreen} />
    </Stack.Navigator>
  );
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName: "newspaper-o" | "sun-o" = "newspaper-o";

    if (route.name === "ニュース") {
      iconName = "newspaper-o";
    } else if (route.name === "天気予報") {
      iconName = "sun-o";
    }

    return <FontAwesome name={iconName} color={color} size={size} />;
  },
  headerShown: false,
});

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="ニュース" component={NewsStack} />
        <Tab.Screen name="天気予報" component={WeatherStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
