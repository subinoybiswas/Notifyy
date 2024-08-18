import { Text, View, ImageBackground, Image, TouchableOpacity, Linking } from "react-native";
import React, { lazy, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useApp } from "@/contexts/ApplicationContext";
import FactModal from "@/components/IndexPage/FactModal";
import TimeModal from "@/components/IndexPage/TimeModal";
import Header from "@/components/IndexPage/Header";
import ConfigureSection from "@/components/IndexPage/Configure";

import FeaturedGrid from "@/components/IndexPage/FeaturedGrid";
import FeaturedMusic from "@/components/IndexPage/FeaturedMusic";
import { Redirect, router } from "expo-router";
import { SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-expo";
import { ApiUrl } from "@/utils/api";
export default function App() {

  const { isSignedIn, userId } = useAuth()
  const { user } = useUser()
  const {  token, status } = useApp();

  useEffect(() => {
    const updateUser = async () => {
      try {
        // console.log("user", user)
        const response = await fetch(`${ApiUrl}/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userId,
            username: user?.username,
            first_name: user?.firstName,
            last_name: user?.lastName,
            profile_image_url: user?.imageUrl,
            email_address: user?.emailAddresses[0].emailAddress,
            fcm_id: token
          }),
        });
        console.log("response", response.status);
      } catch (error) {
        console.log("error", error);
      }
    }

    if (isSignedIn) {
      updateUser()
    }
  }, [user, token]);


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
