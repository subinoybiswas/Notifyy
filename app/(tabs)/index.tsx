import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, Image, TouchableOpacity, Modal, Pressable } from "react-native";
import { usePushNotifications } from "@/helpers/usePushNotifications";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Avatar, AvatarHelper, Colors, Typography, AvatarProps, Checkbox } from 'react-native-ui-lib';
import { Redirect, router } from "expo-router";
import { TimerPickerModal } from "react-native-timer-picker";
import { LinearGradient } from "expo-linear-gradient"; // or `import LinearGradient from "react-native-linear-gradient"`
import { Audio } from "expo-av"; // for audio feedback (click sound as you scroll)
import * as Haptics from "expo-haptics"; // for haptic feedback
// import { BlurView } from 'expo-blur';
export default function App() {
  const { expoPushToken, notification, token } = usePushNotifications();
  const [surprises, setSurprises] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [alarmString, setAlarmString] = React.useState<
    string | null
  >("19:00:00");
  useEffect(() => {
    fetch("https://2205-223-29-193-8.ngrok-free.app ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        notification: notification,
        expoPushToken: expoPushToken,
      }),
    }).then((response) => {
      console.log("response", response);
    });
    console.log("expoPushToken", expoPushToken);
    console.log("notification", notification);
  }, [expoPushToken, notification]);
  const formatTime = ({
    hours,
    minutes,
    seconds,
  }: {
    hours?: number;
    minutes?: number;
    seconds?: number;
  }) => {
    const timeParts = [];

    if (hours !== undefined) {
      timeParts.push(hours.toString().padStart(2, "0"));
    }
    if (minutes !== undefined) {
      timeParts.push(minutes.toString().padStart(2, "0"));
    }
    if (seconds !== undefined) {
      timeParts.push(seconds.toString().padStart(2, "0"));
    }

    return timeParts.join(":");
  };
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ImageBackground source={require("../../assets/images/grid-bg.png")} resizeMode="cover" className="flex-1" imageStyle={{ borderRadius: 16 }} >

        <View className="m-4 space-y-6 flex flex-row justify-between items-center">
          <View className="flex flex-col gap-0 ">
            <Text className="text-gray-100 font-pmedium text-sm">Welcome Back</Text>
            <Text className="font-pmedium text-xl text-white">Subinoy</Text>
          </View>
          <Avatar containerStyle={{ marginVertical: 5 }} source={require("@/assets/images/cards.png")} />
        </View>
        <View className="flex-1 rounded-xl m-2 mt-7">
          <View className="flex-1 rounded-xl items-center ">
            <View className="w-[100%]">

              <View className="flex flex-col gap-2">
                <Text className="text-gray-100 text-xl px-2 font-pbold ">Dashboard</Text>
                <View className="flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">
                  <TouchableOpacity className="flex-1 rounded-xl bg-[#E2E2B6]/50 h-[100%] flex items-center pt-5" onPress={() => { setModalVisible(true) }}>
                    <Image source={require("@/assets/images/clock.png")} resizeMode="cover" className="h-20 w-20" />
                    <Text className="font-psemibold text-2xl text-white">After {alarmString?.split(":")[0]} hrs</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className={`${surprises ? "border-green-400/70" : "border-transparent"} p-1 border-2  rounded-xl bg-[#6EACDA]/50 w-[45%] h-[100%] flex items-center pt-5`} onPress={() => {
                    setSurprises((prev) => { return !prev });
                  }}>
                    <Image source={require("@/assets/images/gift.png")} resizeMode="cover" className="h-20 w-20" />
                    <Text className="font-psemibold text-2xl text-white">Surprises</Text>

                  </TouchableOpacity>
                </View>

                <Text className="text-gray-100 text-xl px-2 font-pbold mt-6" >Dashboard</Text>
                <View className="flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">

                  <View className=" rounded-xl bg-secondary-100 w-[40%] h-[100%]"></View>
                  <View className="flex-1 rounded-xl bg-secondary-100 h-[100%]"></View>
                </View>

                <View className="flex-1 flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">
                  <View className="flex-1 rounded-xl bg-secondary-100 h-[100%]" ></View>
                  {/* <View className="flex-1 rounded-xl bg-secondary-100"></View> */}
                </View>
                <View className="flex-1 flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">

                  {/* <Modal animationType="fade" transparent={true} visible={modalVisible} >
                  <View className="h-[50%] w-[100%] bg-[#021526] absolute flex  mt-[50%] self-center rounded-2xl">
                    <View className="h-[100%] flex flex-col p-5">
                      <Pressable onPress={() => { setModalVisible(false) }} className="self-end rounded-full">
                        <Ionicons name="close" size={24} color="white" />
                      </Pressable>
                    </View>

                  </View>
                </Modal> */}
                  <TimerPickerModal
                    visible={modalVisible}
                    setIsVisible={setModalVisible}
                    onConfirm={(pickedDuration) => {

                      setAlarmString(formatTime(pickedDuration));
                      setModalVisible(false);

                    }}
                    hideSeconds
                    modalTitle="Set Preferred Time"
                    // onCancel={() => setShowPicker(false)}
                    closeOnOverlayPress
                    Audio={Audio}
                    LinearGradient={LinearGradient}
                    Haptics={Haptics}

                    modalProps={{
                      overlayOpacity: 0.2,
                    }}
                    styles={{

                      theme: "dark",
                      backgroundColor: "#202020",
                      confirmButton: {
                        backgroundColor: "#FF9C01",
                        borderColor: "#FF9C01",
                      },
                      pickerLabelContainer: {
                        right: -20,
                        top: 0,
                        bottom: 6,
                        width: 40,
                        alignItems: "center",
                      },

                    }}
                  />
                  {/* <View className="flex-1 rounded-xl bg-secondary-100 h-[100%]">
                  <Text className="text-lg font-pmedium">{token}</Text>
                  </View> */}
                  {/* <View className="flex-1 rounded-xl bg-secondary-100"></View> */}
                </View>


              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView >
  );
}
