import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiUrl } from './api';
import { useApp } from '@/contexts/ApplicationContext';
export const saveConfig = async (userId: string | null | undefined, alarm: string | null | undefined, surprises: boolean | null | undefined) => {

    try {
        const response = await fetch(`${ApiUrl}/configuration`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: userId,
                alarm: alarm,
                surprise: surprises,
            }),
        });
        console.log('Response:', response.status); // Debugging log
        await AsyncStorage.setItem('configure', JSON.stringify({ alarm, surprises }));
    } catch (error: any) {
        console.error('Error saving config:', error);
    }
};