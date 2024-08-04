import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Haptics from "expo-haptics"; // for haptic feedback
import { truncate } from "@/helpers/truncate";
import { useApp } from '@/contexts/ApplicationContext';
import { handlePress } from "@/helpers/handlePress";

const FeaturedGrid = () => {
    const { setModalVisible2, fact } = useApp();
    return (
        <View className="flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">
            <TouchableOpacity className=" rounded-xl bg-secondary-100/80 w-[40%] h-[100%]" onPress={() => {
                setModalVisible2(true);
                Haptics.selectionAsync();
            }}>
                <View className="flex flex-col">
                    <Text className="text-gray-200 font-pmedium px-2 pt-2  text-sm leading-4 mt-2">Did you know?</Text>
                    <Text className="text-white font-psemibold text-sm px-2 py-2">{truncate(fact as string, 60)}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 rounded-xl bg-[#F67E7D]/90 h-[100%]" onPress={() => {
                handlePress("https://www.google.com");
            }}>
                <Text className="absolute right-1 top-2 font-pbold bg-[#D92027] p-2 text-sm rounded-full px-3" >Article</Text>

                <Image source={require("@/assets/images/article.png")} resizeMode="cover" className="h-20 w-20" />
                <Text className="p-2 pl-4 font-pmedium">{truncate("5 amazing new JavaScript features in ES15 (2024)", 35)}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FeaturedGrid