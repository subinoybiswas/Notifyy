
import React from 'react'
import { Stack } from 'expo-router'

const PagesLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ headerShown: false }} />

            <Stack.Screen name="+not-found" />

        </Stack>
    )
}

export default PagesLayout