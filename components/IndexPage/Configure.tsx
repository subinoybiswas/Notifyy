import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useApp } from '@/contexts/ApplicationContext';
import { convertToAmPm } from '@/helpers/convertToAMPM';
import * as Haptics from "expo-haptics"; // for haptic feedback
import Ionicons from '@expo/vector-icons/Ionicons';

const ConfigureSection = () => {
    const { setModalVisible, alarmString, surprises, setSurprises } = useApp();
    return (
        <View className="flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">
            <TouchableOpacity className="flex-1 rounded-xl bg-[#E2E2B6]/80 h-[100%] flex items-center pt-5" onPress={() => { setModalVisible(true); Haptics.selectionAsync() }}>
                <Image source={require("@/assets/images/clock.png")} resizeMode="cover" className="h-20 w-20" />
                <Text className="font-psemibold text-2xl text-white">After {convertToAmPm(alarmString)} </Text>
            </TouchableOpacity>
            <TouchableOpacity className={`${surprises ? "border-green-400/70" : "border-transparent"} p-1 border-2  rounded-xl bg-[#6EACDA]/80 w-[45%] h-[100%] flex items-center pt-5`} onPress={() => {
                setSurprises((prev) => { return !prev });
                Haptics.impactAsync();
            }}>
                {
                    surprises && <View className="absolute right-1 top-0">
                        <Ionicons name="checkmark-circle" size={30} color="rgb(74 222 128 )" />
                    </View>
                }

                <Image source={require("@/assets/images/gift.png")} resizeMode="cover" className="h-20 w-20" />
                <Text className="font-psemibold text-2xl text-white">Surprises</Text>

            </TouchableOpacity>
        </View>);
}
export default ConfigureSection;