import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
// import { usePushNotifications } from "@/helpers/usePushNotifications";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  // const { expoPushToken, notification, token } = usePushNotifications();
  // const data = JSON.stringify(notification, undefined, 2);
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>

        <View className="flex-1  items-center justify-center content-center ">
          <Text className="font-pbold text-xl p-5">Hi</Text>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

