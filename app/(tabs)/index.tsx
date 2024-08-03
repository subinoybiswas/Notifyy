import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground } from "react-native";
import { usePushNotifications } from "@/helpers/usePushNotifications";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
// import { BlurView } from 'expo-blur';
export default function App() {
  const { expoPushToken, notification, token } = usePushNotifications();
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="m-4 space-y-6">
        <View className="flex flex-col gap-0 ">
          <Text className="text-gray-100 font-pmedium text-sm">Welcome Back</Text>
          <Text className="font-pmedium text-xl text-white">Subinoy</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 rounded-xl m-2">
          <ImageBackground source={require("../../assets/images/grid-bg.png")} resizeMode="cover" className="flex-1 rounded-xl" imageStyle={{ borderRadius: 16 }} >

            <View className="flex-1 flex flex-col gap-2">

              <View className="flex-1 flex-row flex gap-x-2">
                <View className="flex-1 rounded-xl bg-secondary-100"></View>
                <View className="rounded-xl bg-secondary-100 w-[40%]"></View>
              </View>
              <View className="flex-1 flex-row flex gap-x-2 ">
                <View className=" rounded-xl bg-secondary-100 w-[40%]"></View>
                <View className="flex-1 rounded-xl bg-secondary-100"></View>
              </View>
              <View className="flex-1 flex-row flex gap-x-2 ">
                <View className="flex-1 rounded-xl bg-secondary-100"></View>
                {/* <View className="flex-1 rounded-xl bg-secondary-100"></View> */}
              </View>
              <View className="flex-1 flex-row flex gap-x-2 ">
                <View className="flex-1 rounded-xl bg-secondary-100">
                  <Text className="text-lg font-pmedium">{token}</Text>
                </View>
                {/* <View className="flex-1 rounded-xl bg-secondary-100"></View> */}
              </View>

            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

