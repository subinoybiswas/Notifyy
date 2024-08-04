import { View, Text } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-ui-lib';
import * as Haptics from "expo-haptics"; // for haptic feedback
import { router } from "expo-router";

const Header = () => {
    return (
        <View className="m-4 space-y-6 flex flex-row justify-between items-center">
            <View className="flex flex-col gap-0 ">
                <Text className="text-gray-100 font-pmedium text-sm">Welcome Back</Text>
                <Text className="font-pmedium text-xl text-white">Subinoy</Text>
            </View>
            <Avatar containerStyle={{ marginVertical: 5 }} source={require("@/assets/images/cards.png")} onPress={() => {
                router.push("/profile");
                Haptics.selectionAsync();
            }} />
        </View>
    )
}

export default Header