import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { router } from 'expo-router';
import React from 'react';

import SignInWithOAuth from '@/components/SignInWithOAuth';
const onboarding = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView
                contentContainerStyle={{
                    height: "100%",
                }}
            >
                <View className="w-full flex justify-center items-center h-full px-4">
                    <Image
                        source={require("@/assets/images/bgIcon.png")}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />

                    <View className="relative mt-5">
                        <Text className="text-[25px] text-white font-bold text-center">
                            Discover Endless{"\n"}
                            Possibilities with{" "}
                            <Text className="text-secondary-200">Notifyy</Text>
                        </Text>

                        <Image
                            source={require("@/assets/images/path.png")}
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                            resizeMode="contain"
                        />
                    </View>

                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        Where Creativity Meets Innovation: Embark on a Journey of Limitless
                        Exploration with Aora
                    </Text>


                    <SignInWithOAuth />
                </View>
            </ScrollView>

            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    )
}

export default onboarding