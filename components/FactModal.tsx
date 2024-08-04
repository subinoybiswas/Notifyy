import { View, Text, Modal, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useApp } from '@/contexts/ApplicationContext';

const FactModal = () => {
    const { modalVisible2, setModalVisible2, fact } = useApp();
    return (
        <Modal animationType="fade" transparent={true} visible={modalVisible2} >
            <View className="h-[20%] w-[100%] bg-[#021526] absolute flex  mt-[80%] self-center rounded-2xl">
                <Pressable
                    style={{
                        position: "absolute",
                        right: 10,
                        top: 10,
                        zIndex: 1,
                    }}
                    onPress={() => setModalVisible2(false)}
                >
                    <Ionicons name="close" size={24} color="white" />
                </Pressable>
                <View className="flex-1 rounded-xl items-center mt-5">
                    <Text className="text-gray-200 font-pmedium px-2 pt-2  text-sm leading-4 mt-2">Did you know?</Text>
                    <Text className="text-white font-psemibold text-sm px-2 py-2">{fact}</Text>
                </View>
            </View>
        </Modal>
    )
}

export default FactModal