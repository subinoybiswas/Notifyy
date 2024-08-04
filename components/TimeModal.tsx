import { View, Text } from 'react-native'
import React from 'react'
import { TimerPickerModal } from 'react-native-timer-picker';
import { useApp } from '@/contexts/ApplicationContext';
import { formatTime } from '@/helpers/formatTime';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from "expo-haptics"; // for haptic feedback

const TimeModal = () => {
    const { modalVisible, setModalVisible, setAlarmString } = useApp();
    return (
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
    )
}

export default TimeModal