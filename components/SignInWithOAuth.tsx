import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";

import CustomButton from "./CustomButton";
import * as Linking from 'expo-linking';


WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({
        strategy: "oauth_google",
    });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, setActive } =
                await startOAuthFlow({
                    redirectUrl: Linking.createURL('/'),
                });

            if (createdSessionId) {
                if (setActive) {
                    setActive({ session: createdSessionId });
                }
            }
        } catch (err: any) {
            console.error(err[0]);
        }
    }, []);

    return (

        <CustomButton
            title="Continue with Google"
            handlePress={onPress}
            containerStyles="w-full mt-7"
        />

    );
};
export default SignInWithOAuth;
