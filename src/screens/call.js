import React, {useState} from 'react';
import {Text, ToastAndroid, View} from "react-native";
import AgoraUIKit from "agora-rn-uikit";

export default function Call({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [videoCall, setVideoCall] = useState(true);

    const connectionData = {
        appId: '27cbc413d2574404a598f09e3561cdfc',
        channel: 'engTalk',

        token: '007eJxTYGA77rWMt3tdvkQV51uGAzzxq9zY1C7PzMjV+Li8btOMKz0KDEbmyUnJJobGKUam5iYmBiaJppYWaQaWqcamZobJKWnJ0nGSybPXSyUHFZYwMEIhiM/OkJqXHpKYk83AAAAhYB/H'
    };

    const rtcCallbacks = {
        EndCall: () => {
            navigation.navigate("Home")
            ToastAndroid.show("Leaved", ToastAndroid.SHORT);

        },
    };

    return (

        <View style={{flex: 1}}>

            {videoCall ? <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks}/> :
                <Text>Join Call</Text>}

        </View>

    )

}

