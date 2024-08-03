import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Divider, Tab, TabView } from '@rneui/themed';
const Profile = () => {
    const [index, setIndex] = React.useState(0);
    return (
        <SafeAreaView className="bg-primary h-full ">
            <View className='mb-5'>
                <Text className='text-start text-xl font-bold p-5 text-gray-100 font-psemibold'>Profile</Text>
                <View className='flex  flex-row items-center justify-start mt-5'>
                    <Image source={require("@/assets/images/cards.png")} className='h-[100px] w-[100px] bg-gray-200 rounded-3xl ml-3 mr-3 border-2 border-slate-600' resizeMode="cover" />
                    <View className='flex flex-col justify-start '>
                        <Text className='text-gray-100 text-2xl font-psemibold'>Subinoy</Text>
                        <View className='flex flex-col gap-1 '>
                            <View className='self-start'>
                                <Text className='text-gray-100 bg-green-400/40 px-2 text-sm font-pmedium rounded-lg'>0 months</Text>
                            </View>
                        </View>
                        <Text className='text-gray-200 text-sm font-pmedium rounded-lg mt-1'>heysubinoy@gmail.com</Text>
                    </View>
                </View>
            </View>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{ backgroundColor: 'white' }}
                containerStyle={{ backgroundColor: 'transparent', }}

            >
                <Tab.Item
                    title="Recent"
                    titleStyle={{ fontSize: 12, color: 'white' }}

                />
                <Tab.Item
                    title="favorite"
                    titleStyle={{ fontSize: 12, color: 'white' }}

                />

            </Tab>
            <Divider />
            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item className='bg-primary'>
                    <Text >Recent</Text>
                </TabView.Item>
                <TabView.Item className='bg-primary'>

                    <Text >Favorite</Text>
                </TabView.Item>

            </TabView>
        </SafeAreaView>
    )
}

export default Profile