import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { Link } from "expo-router";

import FormField from "../../components/FormField";
import CustomButton from "../../components/custom_button";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setisSubmitting] = useState(false);
  const submit = async () => {
    if (!Form.email || !Form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }

    setisSubmitting(true);

    try {
      await signIn(Form.email, Form.password);
      // set it to global state ...

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[82vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[140px] h-[65px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log into HoopNow{" "}
          </Text>

          <FormField
            title="Email"
            value={Form.email}
            handleChangeText={(e) => setForm({ ...Form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={Form.password}
            handleChangeText={(e) => setForm({ ...Form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              {" "}
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
