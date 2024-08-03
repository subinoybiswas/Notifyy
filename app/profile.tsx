import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Divider, Tab, TabView } from '@rneui/themed';
const Profile = () => {
    const [index, setIndex] = React.useState(0);
    const oldNortification = ["hello how are you", "hey how are you?", "hello how are you", "hey how are you?", "hello how are you", "hey how are you?", "hello how are you", "hey how are you?"]
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
                    title="About"
                    titleStyle={{ fontSize: 12, color: 'white' }}

                />

            </Tab>
            <View className='mt-4'></View>
            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item style={{ width: '100%' }}>
                    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                        <View className='flex-1 bg-transparent mt-5 flex flex-col gap-2 p-2 w-full justify-center items-center'>

                            {oldNortification.map((item, index) => {
                                return (
                                    <View className='flex flex-col gap-2  bg-transparent border-0.5 border-slate-600 rounded-xl w-full p-1 min-h-[100px]'>
                                        <Text className='text-white text-lg font-psemibold'>Mere Babu ne khana khaya?</Text>
                                        <Text className='text-gray-100 text-sm font-pmedium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium aut repellat, minima laborum doloribus voluptas? Velit possimus nobis repellat impedit ut natus dicta adipisci perspiciatis molestiae repudiandae, mollitia odit incidunt!</Text>
                                    </View>
                                )
                            })}
                        </View>


                    </ScrollView>
                </TabView.Item>
                <TabView.Item className='bg-primary'>

                    <Text >Favorite</Text>
                </TabView.Item>

            </TabView>
        </SafeAreaView>
    )
}

export default Profile