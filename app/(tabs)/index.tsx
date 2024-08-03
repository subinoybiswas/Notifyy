import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground } from "react-native";
import { usePushNotifications } from "@/helpers/usePushNotifications";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, AvatarHelper, Colors, Typography, AvatarProps } from 'react-native-ui-lib';
import { Redirect, router } from "expo-router";
// import { BlurView } from 'expo-blur';
export default function App() {
  const { expoPushToken, notification, token } = usePushNotifications();
  useEffect(() => {
    fetch("https://2205-223-29-193-8.ngrok-free.app ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        notification: notification,
        expoPushToken: expoPushToken,
      }),
    }).then((response) => {
      console.log("response", response);
    });
    console.log("expoPushToken", expoPushToken);
    console.log("notification", notification);
  }, [expoPushToken, notification]);
  return (
    <SafeAreaView className="bg-primary h-full ">

      <View className="m-4 space-y-6 flex flex-row justify-between items-center">
        <View className="flex flex-col gap-0 ">
          <Text className="text-gray-100 font-pmedium text-sm">Welcome Back</Text>
          <Text className="font-pmedium text-xl text-white">Subinoy</Text>
        </View>
        <Avatar containerStyle={{ marginVertical: 5 }} source={require("@/assets/images/cards.png")} />
      </View>
      <View className="flex-1 rounded-xl m-2 mt-7">
        <ImageBackground source={require("../../assets/images/grid-bg.png")} resizeMode="cover" className="flex-1 rounded-xl items-center " imageStyle={{ borderRadius: 16 }} >
          <View className="w-[100%]">

            <View className="flex flex-col gap-2">
              <Text className="text-gray-100 text-xl px-2 font-pbold ">Dashboard</Text>
              <View className="flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">
                <View className="flex-1 rounded-xl bg-secondary-100 h-[100%]"><Text>H</Text></View>
                <View className="rounded-xl bg-secondary-100 w-[40%] h-[100%]"><Text>H</Text></View>
              </View>

              <Text className="text-gray-100 text-xl px-2 font-pbold mt-6">Dashboard</Text>
              <View className="flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">

                <View className=" rounded-xl bg-secondary-100 w-[40%] h-[100%]"></View>
                <View className="flex-1 rounded-xl bg-secondary-100 h-[100%]"></View>
              </View>

              <View className="flex-1 flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">
                <View className="flex-1 rounded-xl bg-secondary-100 h-[100%]"></View>
                {/* <View className="flex-1 rounded-xl bg-secondary-100"></View> */}
              </View>
              <View className="flex-1 flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">
                {/* <View className="flex-1 rounded-xl bg-secondary-100 h-[100%]">
                  <Text className="text-lg font-pmedium">{token}</Text>
                  </View> */}
                {/* <View className="flex-1 rounded-xl bg-secondary-100"></View> */}
              </View>


            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView >
  );
}

