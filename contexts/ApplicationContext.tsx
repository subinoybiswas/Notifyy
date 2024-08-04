import { usePushNotifications } from '@/hooks/usePushNotifications';
import React, { createContext, useState, ReactNode, useContext } from 'react';
import * as Notifications from "expo-notifications";

// Define the shape of the AuthContext
interface AppContextProps {
    surprises: boolean;
    setSurprises: React.Dispatch<React.SetStateAction<boolean>>;
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    modalVisible2: boolean;
    setModalVisible2: React.Dispatch<React.SetStateAction<boolean>>;
    alarmString: string | null;
    setAlarmString: React.Dispatch<React.SetStateAction<string | null>>;
    fact: string | null;
    setFact: React.Dispatch<React.SetStateAction<string | null>>;
    expoPushToken?: Notifications.ExpoPushToken;
    notification?: Notifications.Notification;
    token?: string;
    spotifyObj: any | null;
    setSpotifyObj: React.Dispatch<React.SetStateAction<any | null>>;
    user: any | null;
    setUser: React.Dispatch<React.SetStateAction<any | null>>;
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value 
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Create a provider component
const AppProvider = ({ children }: { children: ReactNode }) => {
    const { expoPushToken, notification, token } = usePushNotifications();
    const [surprises, setSurprises] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalVisible2, setModalVisible2] = React.useState(false);
    const [alarmString, setAlarmString] = React.useState<
        string | null
    >("19:00:00");
    const [fact, setFact] = React.useState<string | null>("A can of Pepsi has 41 grams of sugar. This amount to about seven teaspoons of sugar.");
    const [spotifyObj, setSpotifyObj] = React.useState<any | null>({
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
    });
    const [user, setUser] = React.useState<any | null>(null);
    const [isLogged, setIsLogged] = React.useState<boolean>(false);
    return (
        <AppContext.Provider value={{
            surprises, setSurprises, modalVisible,
            setModalVisible, modalVisible2, setModalVisible2,
            alarmString, setAlarmString, fact, setFact, expoPushToken,
            notification, token, spotifyObj, setSpotifyObj, user, setUser,
            isLogged, setIsLogged
        }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the AuthContext
const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};

export { AppProvider, useApp };
