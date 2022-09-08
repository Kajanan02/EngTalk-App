import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import GroupMeeting from "./groupmeeting";
import {io} from "socket.io-client"

let socket;

function GroupJoin(props) {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();
    const api = "http://localhost:3001/"

    // socket = io("http://localhost:3001")
    const joinGroup = () => {
        socket.emit('join-room', {roomID: roomId, user: name})
    }

    useEffect(() => {
        socket = io("https://9c86-2402-4000-21c1-bfd5-4929-2ddd-5b1e-5713.in.ngrok.io/")
        socket.on('connection', () => console.log("connected"))
        console.log("asd")
        // joinGroup()
    }, [])


    return (
        <View>
            <GroupMeeting
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
                joinGroup={joinGroup}
            />
        </View>
    );
}

export default GroupJoin;