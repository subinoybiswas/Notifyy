import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Divider, Tab, TabView } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Profile = () => {
    const [index, setIndex] = React.useState(0);
    const oldNortification = ["hello how are you", "hey how are you?", "hello how are you", "hey how are you?", "hello how are you", "hey how are you?", "hello how are you", "hey how are you?"]
    const [rating, setRating] = React.useState(0);

    const handleRating = (rating: number) => {
        setRating(rating);
    };
    return (
        <SafeAreaView className="bg-primary h-full ">
            <View className='mb-5'>
                <View className='flex flex-row items-center ml-3'>
                    <Ionicons name="arrow-back" size={24} color="white" onPress={() => {
                        router.back()
                    }} />
                    <Text className='text-start text-xl font-bold p-5 text-gray-100 font-psemibold'>Profile</Text>
                </View>
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
                                    <View className='flex flex-col gap-2  bg-transparent border-0.5 border-slate-600 rounded-xl w-full p-1 min-h-[100px]' key={index}>
                                        <Text className='text-white text-lg font-psemibold'>Mere Babu ne khana khaya?</Text>
                                        <Text className='text-gray-100 text-sm font-pmedium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium aut repellat, minima laborum doloribus voluptas? Velit possimus nobis repellat impedit ut natus dicta adipisci perspiciatis molestiae repudiandae, mollitia odit incidunt!</Text>
                                    </View>
                                )
                            })}
                        </View>


                    </ScrollView>
                </TabView.Item>
                <TabView.Item className='bg-primary'>
                    <ScrollView contentContainerStyle={{ alignItems: "center", padding: 5, gap: 10 }}>
                        <View className='bg-primary/80 border-0.5 border-slate-600 flex-1 min-w-[100%] flex flex-col items-start rounded-xl'>
                            <Text className='text-gray-100 text-lg font-psemibold p-2'>Developer</Text>
                            <View className='flex flex-row mb-4 items-center'>
                                <Image source={require("@/assets/images/cards.png")} className='h-[100px] w-[100px] bg-gray-200 rounded-full ml-3 mr-3 border-2 border-slate-600' resizeMode="cover" />
                                <View className='flex flex-col'>
                                    <View className='flex flex-row items-center gap-1'>
                                        <Text className='text-gray-100 text-xl font-psemibold pl-2'>Subinoy Biswas</Text>
                                        <Ionicons name="checkmark-circle" size={20} color="green" />
                                    </View>
                                    <Text className='text-gray-100 text-sm font-pregular px-2'>Full Stack Developer</Text>
                                    <View className='flex flex-row justify-between pl-2 pt-2 items-center w-[60%]'>
                                        <AntDesign name="github" size={28} color="white" />
                                        <AntDesign name="twitter" size={28} color="white" />
                                        <AntDesign name="linkedin-square" size={28} color="white" />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className='bg-primary/80 border-0.5 border-slate-600 flex-1 min-w-[100%] flex flex-col items-ce rounded-xl pb-5'>
                            <Text className='text-gray-100 text-lg font-psemibold p-2'>Version</Text>
                            <View className='flex flex-row items-center gap-1 min-w-[100%] px-4'>
                                <MaterialIcons name="update" size={50} color="white" />
                                <Text className='text-gray-100 text-lg font-psemibold'>1.0.0</Text>
                            </View>
                        </View>
                        <View className='bg-primary/80 border-0.5 border-slate-600 flex-1 min-w-[100%] flex flex-col items-ce rounded-xl pb-5'>
                            <View className='flex flex-row justify-between items-center pr-5 '>

                                <Text className='text-gray-100 text-lg font-psemibold p-2'>Rating</Text>
                                <FontAwesome name="send" size={24} color="white" />
                            </View>
                            <View className='flex flex-row items-center gap-1 min-w-[100%] px-4'>
                                {[...Array(5)].map((_, index) => (
                                    <AntDesign
                                        key={index}
                                        name={rating > index ? 'star' : 'staro'}
                                        size={50}
                                        color={rating > index ? '#D4AF37' : '#D4AF37'}
                                        onPress={() => handleRating(index + 1)}
                                    />
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                </TabView.Item>

            </TabView>
        </SafeAreaView >
    )
}

export default Profile