import { Linking } from "react-native";
import * as Haptics from "expo-haptics";

export const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) => {
        console.error("Failed to open URL:", err);
    });
    Haptics.impactAsync();
};