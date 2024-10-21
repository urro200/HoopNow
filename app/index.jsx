import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/custom_button";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext;

  if (!isLoading || isLoggedIn) {
    return <Redirect href="/home" />
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View
          className="w-full items-center min-h-[85vh] px-4"
        >
          <Image
            source={images.logo}
            className="w-[96px] h-[80px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[300px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View
            className="relative mt-5"
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
          >
            Where creativity meets innovation: embark on a journey of limitless
            exploration with HoopNow
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
