import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, Image, TouchableOpacity, Modal, Pressable, Linking } from "react-native";
import { usePushNotifications } from "@/helpers/usePushNotifications";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Avatar, AvatarHelper, Colors, Typography, AvatarProps, Checkbox } from 'react-native-ui-lib';
import { Link, Redirect, router } from "expo-router";
import { TimerPickerModal } from "react-native-timer-picker";
import { LinearGradient } from "expo-linear-gradient"; // or `import LinearGradient from "react-native-linear-gradient"`
import { Audio } from "expo-av"; // for audio feedback (click sound as you scroll)
import * as Haptics from "expo-haptics"; // for haptic feedback
// import { BlurView } from 'expo-blur';
export default function App() {
  const { expoPushToken, notification, token } = usePushNotifications();
  const [surprises, setSurprises] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);
  const [alarmString, setAlarmString] = React.useState<
    string | null
  >("19:00:00");
  const [fact, setFact] = React.useState<string | null>("A can of Pepsi has 41 grams of sugar. This amount to about seven teaspoons of sugar.");
  const handlePress = (url: string) => {

    Linking.openURL(url).catch((err) => {
      console.error("Failed to open URL:", err);
    });

    Haptics.impactAsync();
  };
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
    console.log("token", token);
    console.log("expoPushToken", expoPushToken);
    console.log("notification", notification);
  }, [expoPushToken, notification]);

  // useEffect(() => {
  //   const apiKey = "f3n2TnzyfYX0+4CJXuahVg==VFkdDXIZ3CLR2Ihz"; // Replace with your actual API key
  //   const headers = {
  //     'X-Api-Key': apiKey,
  //   };

  //   fetch("https://api.api-ninjas.com/v1/facts  ", {
  //     headers: headers as Record<string, string>,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data[0].fact);
  //       setFact(data[0].fact);

  //     })
  // }, []);
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
  const truncate = (str: string, n: number) => {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  const SpotifyObj = {
    "album": {
      "album_type": "album",
      "artists": [{
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6Ff53KvcvAj5U7Z1vojB5o"
        },
        "href": "https://api.spotify.com/v1/artists/6Ff53KvcvAj5U7Z1vojB5o",
        "id": "6Ff53KvcvAj5U7Z1vojB5o",
        "name": "*NSYNC",
        "type": "artist",
        "uri": "spotify:artist:6Ff53KvcvAj5U7Z1vojB5o"
      }],
      "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/20RMokVwJ2wjQ0s8FOdOFC"
      },
      "href": "https://api.spotify.com/v1/albums/20RMokVwJ2wjQ0s8FOdOFC",
      "id": "20RMokVwJ2wjQ0s8FOdOFC",
      "images": [{
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b273a6cb8fab778e1efc406a5909",
        "width": 640
      }, {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02a6cb8fab778e1efc406a5909",
        "width": 300
      }, {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d00004851a6cb8fab778e1efc406a5909",
        "width": 64
      }],
      "name": "No Strings Attached",
      "release_date": "2000-03-21",
      "release_date_precision": "day",
      "total_tracks": 12,
      "type": "album",
      "uri": "spotify:album:20RMokVwJ2wjQ0s8FOdOFC"
    },
    "artists": [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/6Ff53KvcvAj5U7Z1vojB5o"
      },
      "href": "https://api.spotify.com/v1/artists/6Ff53KvcvAj5U7Z1vojB5o",
      "id": "6Ff53KvcvAj5U7Z1vojB5o",
      "name": "*NSYNC",
      "type": "artist",
      "uri": "spotify:artist:6Ff53KvcvAj5U7Z1vojB5o"
    }],
    "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
    "disc_number": 1,
    "duration_ms": 200400,
    "explicit": false,
    "external_ids": {
      "isrc": "USJI10000001"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/62bOmKYxYg7dhrC6gH9vFn"
    },
    "href": "https://api.spotify.com/v1/tracks/62bOmKYxYg7dhrC6gH9vFn",
    "id": "62bOmKYxYg7dhrC6gH9vFn",
    "is_local": false,
    "name": "Bye Bye Bye - From Deadpool and Wolverine Soundtrack",
    "popularity": 83,
    "preview_url": "https://p.scdn.co/mp3-preview/161d6b8cfeb94609aee323195a6452cdb90181ca?cid=56128f89bda94868b37744bdc859076c",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:62bOmKYxYg7dhrC6gH9vFn"
  }
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ImageBackground source={require("@/assets/images/grid-bg.png")} resizeMode="cover" className="flex-1" imageStyle={{ borderRadius: 16 }} >

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
        <View className="flex-1 rounded-xl m-2 mt-7">
          <View className="flex-1 rounded-xl items-center ">
            <View className="w-[100%]">

              <View className="flex flex-col gap-2">
                <Text className="text-gray-100 text-xl px-2 font-pbold ">Configure</Text>
                <View className="flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">
                  <TouchableOpacity className="flex-1 rounded-xl bg-[#E2E2B6]/80 h-[100%] flex items-center pt-5" onPress={() => { setModalVisible(true); Haptics.selectionAsync() }}>
                    <Image source={require("@/assets/images/clock.png")} resizeMode="cover" className="h-20 w-20" />
                    <Text className="font-psemibold text-2xl text-white">After {alarmString?.split(":")[0]} hrs</Text>
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
                </View>

                <Text className="text-gray-100 text-xl px-2 font-pbold pt-5" >Featured</Text>
                <View className="flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">

                  <TouchableOpacity className=" rounded-xl bg-secondary-100/80 w-[40%] h-[100%]" onPress={() => {
                    setModalVisible2(true);
                  }}>
                    <View className="flex flex-col">
                      <Text className="text-gray-200 font-pmedium px-2 pt-2  text-sm leading-4 mt-2">Did you know?</Text>
                      <Text className="text-white font-psemibold text-sm px-2 py-2">{truncate(fact as string, 60)}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 rounded-xl bg-[#F67E7D]/90 h-[100%]" onPress={() => {
                    handlePress("https://www.google.com")
                  }}>
                    <Text className="absolute right-1 top-2 font-pbold bg-[#D92027] p-2 text-sm rounded-full px-3" >Article</Text>

                    <Image source={require("@/assets/images/article.png")} resizeMode="cover" className="h-20 w-20" />
                    <Text className="p-2 pl-4 font-pmedium">{truncate("5 amazing new JavaScript features in ES15 (2024)", 35)}</Text>
                  </TouchableOpacity>
                </View>

                <View className="flex-1 flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">

                  <TouchableOpacity className="flex-1 rounded-xl bg-[#36C2CE]/80 h-[100%] flex flex-row items-center  w-[100%] " onPress={() => handlePress(`spotify://album/${SpotifyObj.album.id}`)}>
                    {/* <Text className="text-gray-200 font-pmedium px-2 py-2  text-base leading-4">Developer's Choice</Text> */}
                    <Text className="absolute right-1 top-2 font-pbold bg-[#36C2CE] p-2 text-sm rounded-full px-3" >Music</Text>

                    <Image source={{ uri: SpotifyObj.album.images[0].url }} resizeMode="cover" className="h-20 w-20 m-4 rounded-lg" />
                    <View>
                      <Text className="font-psemibold text-2xl text-white">{truncate(SpotifyObj.name, 12)}</Text>
                      <Text className="font-psemibold text-lg text-gray-100">{truncate(SpotifyObj.artists[0].name, 17)}</Text>
                    </View>
                  </TouchableOpacity>
                  {/* <View className="flex-1 rounded-xl bg-secondary-100"></View> */}
                </View>
                <View className="flex-1 flex-row flex gap-x-2 min-h-[150px] mx-2 items-center">

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
                      container: {
                        backgroundColor: "#202020",
                        borderRadius: 20,
                        padding: 20,
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
