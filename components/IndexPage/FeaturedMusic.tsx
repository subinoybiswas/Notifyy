import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { truncate } from "@/helpers/truncate";
import { useApp } from '@/contexts/ApplicationContext';
import { handlePress } from "@/helpers/handlePress";
const FeaturedMusic = () => {
    const { spotifyObj } = useApp();
    return (
        <View className="flex-1 flex-row flex gap-x-2 min-h-[150px] mx-2 items-center mt-2">
            <TouchableOpacity className="flex-1 rounded-xl bg-[#36C2CE]/80 h-[100%] flex flex-row items-center  w-[100%] " onPress={() => handlePress(`${spotifyObj.external_urls.spotify}`)}>
                <Text className="absolute right-1 top-2 font-pbold bg-[#36C2CE] p-2 text-sm rounded-full px-3" >Music</Text>

                <Image source={{ uri: spotifyObj.album.images[0].url }} resizeMode="cover" className="h-20 w-20 m-4 rounded-lg" />
                <View>
                    <Text className="font-psemibold text-2xl text-white">{truncate(spotifyObj.name, 12)}</Text>
                    <Text className="font-psemibold text-lg text-gray-100">{truncate(spotifyObj.artists[0].name, 17)}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default FeaturedMusic