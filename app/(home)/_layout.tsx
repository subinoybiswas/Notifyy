
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-react'

const PagesLayout = () => {
    const { isSignedIn } = useAuth()

    if (isSignedIn) {
        return <Redirect href={'/home'} />
    }

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />

        </Stack>
    )
}

export default PagesLayout