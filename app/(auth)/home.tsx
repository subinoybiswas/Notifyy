import { Text, View, ImageBackground, Image, TouchableOpacity, Linking } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useApp } from "@/contexts/ApplicationContext";
import FactModal from "@/components/IndexPage/FactModal";
import TimeModal from "@/components/IndexPage/TimeModal";
import Header from "@/components/IndexPage/Header";
import ConfigureSection from "@/components/IndexPage/Configure";

import FeaturedGrid from "@/components/IndexPage/FeaturedGrid";
import FeaturedMusic from "@/components/IndexPage/FeaturedMusic";
import { Redirect, router } from "expo-router";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
export default function App() {

  const { isSignedIn } = useAuth()

  const { expoPushToken, notification, token, status } = useApp();


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
    console.log("token", token);
    console.log("expoPushToken", expoPushToken);
    console.log("notification", notification);
  }, [expoPushToken, notification]);

  // useEffect(() => {
  //   const apiKey = "f3n2TnzyfYX0+4CJXuahVg==VFkdDXIZ3CLR2Ihz"; // Replace with your actual API key
  //   const headers = {
  //     'X-Api-Key': apiKey,
  //   };

  //   fetch("https://api.api-ninjas.com/v1/facts  ", {
  //     headers: headers as Record<string, string>,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data[0].fact);
  //       setFact(data[0].fact);

  //     })
  // }, []);

  console.log(isSignedIn)

  return (
    <SafeAreaView className="bg-primary h-full ">
      <SignedIn>

        <ImageBackground source={require("@/assets/images/grid-bg.png")} resizeMode="cover" className="flex-1" imageStyle={{ borderRadius: 16 }} >

          <Header />
          <View className="flex-1 rounded-xl m-2 mt-7">
            <View className="flex-1 rounded-xl items-center ">
              <View className="w-[100%]">

                {status !== "granted" && (
                  <TouchableOpacity className="bg-red-600/50 p-5 rounded-lg mb-2" onPress={() => {
                    Linking.openSettings()
                  }}>

                    <Text className="font-pbold text-xl text-white">Please allow nortifications</Text>
                  </TouchableOpacity>

                )
                }

                <View className="flex flex-col gap-2">
                  <Text className="text-gray-100 text-xl px-2 font-pbold pb-2">Configure</Text>
                  <ConfigureSection />

                  <Text className="text-gray-100 text-xl px-2 font-pbold pt-5 pb-2" >Featured</Text>
                  <FeaturedGrid />
                  <FeaturedMusic />

                  <View className="flex-1 flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">
                    <FactModal />
                    <TimeModal />
                  </View>

                </View>

              </View>
            </View>
          </View>
        </ImageBackground>
      </SignedIn>
      <SignedOut>
        <Redirect href="/" />
      </SignedOut>
    </SafeAreaView >
  );
}
