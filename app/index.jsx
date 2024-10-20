import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          borderWidth: 5,
          borderColor: "white",
        }}
      >
        <View
          className="w-full items-center h-full px-4"
          style={{ borderWidth: 5, borderColor: "blue" }}
        >
          <Image
            style={{ borderWidth: 5, borderColor: "red" }}
            source={images.logo}
            className="w-[96px] h-[80px]"
            resizeMode="contain"
          />

          <Image
            style={{ borderWidth: 5, borderColor: "red" }}
            source={images.cards}
            className="max-w-[300px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View
            className="relative mt-5"
            style={{ borderWidth: 5, borderColor: "red" }}
          >
            <Text className="text-3xl text-white font-bold text-center">
              {" "}
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">HoopNow</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[200px] h-[15px] absolute -bottom-3 -right-10"
              resizeMode="contain"
            />
          </View>
          <Text
            className="text-sm text-pregular text-gray-100 mt-7 text-center"
            style={{ borderWidth: 5, borderColor: "red" }}
          >
            Where creativity meets innovation: embark on a journey of limitless
            exploration with HoopNow
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
